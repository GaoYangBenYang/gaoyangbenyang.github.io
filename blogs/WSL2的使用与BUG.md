### WSL如何重新启动（restart）

sudo systemctl restart命令无效

* 打开任务管理器，找到服务选项卡，找到LxssManager右键重新启动即可。

### WSL2中安装Docker

1. 错误安装方式

```
sudo apt install docker.io
```

[出现sudo service docker start启动错误：docker: unrecognized service]()

2. 正确安装方式

    * 使用脚本自动安装
      在测试或开发环境中 Docker 官方为了简化安装流程，提供了一套便捷的安装脚本，Ubuntu 系统上可以使用这套脚本安装，另外可以通过 --mirror
      选项使用国内源进行安装：
      若你想安装测试版的 Docker, 请从 test.docker.com 获取脚本
        ```
        # $ curl -fsSL test.docker.com -o get-docker.sh
        $ curl -fsSL get.docker.com -o get-docker.sh
        $ sudo sh get-docker.sh --mirror Aliyun
        # $ sudo sh get-docker.sh --mirror AzureChinaCloud
        ```
      执行这个命令后，脚本就会自动的将一切准备工作做好，并且把 Docker 的稳定(stable)版本安装在系统中。

    * 启动 Docker
      $ sudo service docker start

    * 建立 docker 用户组
      默认情况下，docker 命令会使用 Unix socket 与 Docker 引擎通讯。而只有 root 用户和 docker 组的用户才可以访问 Docker 引擎的 Unix
      socket。出于安全考虑，一般 Linux 系统上不会直接使用 root 用户。因此，更好地做法是将需要使用 docker 的用户加入 docker 用户组:
      建立 docker 组：
      $ sudo groupadd docker
      将当前用户加入 docker 组：
      $ sudo usermod -aG docker $USER
      退出当前终端并重新登录，进行如下测试。

   [正确安装会出现一个问题(使用sudo service docker start启动docker时提示启动但是并未真正启动)按以下方法解决]()

   使用过 WSL2 的人肯定知道，WSL2 中不能使用systemctl，需要使用service来启动 docker 或其他服务。

   启动 docker：
    ```
    sudo service docker start
    ```
   此时竟无法启动，查看日志：
    ```
    $ cat /var/log/docker.log
    ...
    Sep 13 20:47:37 xxx dockerd: failed to start daemon: Error initializing network controller: error
    obtaining controller instance: failed to create NAT chain DOCKER: iptables failed: iptables -t nat -N D
    OCKER: iptables v1.4.21: can't initialize iptables table `nat': Table does not exist (do you need to ins
    mod?)
    ```
   可以看到是 iptables 的问题，此问题在其 github 仓库中有人提出过[#1105](https://github.com/docker/for-linux/issues/1105)，幸运的是，这个问题正好能被简单地解决。

   首先，将iptables用iptables-legacy替换：
    ```
    sudo update-alternatives --set iptables /usr/sbin/iptables-legacy
    ```
   然后，开启 ipv4 的包转发功能：
    ```
    sudo sed -i 's/#net.ipv4.ip_forward=1/net.ipv4.ip_forward=1/g' /etc/sysctl.conf
    ```
   最后，重启 WSL2，下面的代码在管理员模式下的 powershell 中运行：
    ```
    wsl --shutdown
    ```
   此时再启动 Debian，就能顺利启动 docker了。

### WSL2中安装MySQL

1. 安装
   在 WSL2 上安装 MySQL (Ubuntu) ：

1. 打开 WSL 终端 (即。Ubuntu) 。
2. 更新 Ubuntu 包：sudo apt update
3. 更新该包后，使用以下命令安装 MySQL：sudo apt install mysql-server
4. 确认安装并获取版本号：mysql --version

可能还想运行包含的安全脚本。 这会更改一些不太安全的默认选项，例如远程根登录名和示例用户。 运行安全脚本：

1. 启动 MySQL 服务器：sudo /etc/init.d/mysql start
2. 启动安全脚本提示符：sudo mysql_secure_installation
   3.第一个提示符会询问是否要设置验证密码插件，该插件可用于测试 MySQL 密码的强度。 然后将为 MySQL
   根用户设置密码，决定是否删除匿名用户，决定是否允许根用户本地和远程登录，决定是否删除测试数据库，最后决定是否立即重新加载特权表。

若要打开 MySQL 提示符，请输入：sudo mysql

若要查看可用的数据库，请在 MySQL 提示符中输入：SHOW DATABASES;

若要创建新数据库，请输入：CREATE DATABASE database_name;

若要删除数据库，请输入： DROP DATABASE database_name;

有关使用 MySQL 数据库的更多信息，请参阅 MySQL 文档。

[详细内容浏览官方文档](https://learn.microsoft.com/zh-cn/windows/wsl/tutorials/wsl-database)

2. 卸载

```
sudo apt purge mysql-*
sudo rm -rf /etc/mysql/ /var/lib/mysql
sudo apt autoremove
sudo apt autoclean
```

apt-get purge 与 apt-get remove是不同的，简单来说：

purge可以将包以及软件的配置文件全部删除
remove仅可以删除包，但不会删除配置文件

3. 问题

* MySQL服务启动时出现`su: warning: cannot change directory to /nonexistent: No such file or directory`
  [Github Issues](https://github.com/miguelgrinberg/microblog/issues/256#issuecomment-991578683)
    ```
    sudo service mysql stop #先停止服务
    sudo usermod -d /var/lib/mysql/ mysql #为 mysql 用户创建一个主目录
    sudo service mysql start #然后再启动
    ```


* 设置MySQL服务相关命令

    * 查看MySQL运行状态： `sudo service mysql status`
    * 开机自启：`sudo update-rc.d -f mysql defaults`
    * 取消开机自启：`sudo update-rc.d -f mysql remove`
    * 开启MySQL服务：`sudo service mysql start`
    * 关闭MySQL服务：`sudo service mysql stop`

* Linux使用sudo mysql -u root -p登录MySQL，虽然会提示输入密码，但是输入任何内容都可以成功登录。

  sudo mysql登录成功后，我们可以切换到mysql对root的密码进行修改，具体操作如下：
    ```
    #switch database 
    mysql>use msyql;  
    #update root's password 
    mysql>alter user 'root'@'localhost' identified with mysql_native_password by '123456';  
    #write privileges 
    mysql>flush privileges;
    ```

  之后即可quit/exit退出。

  这里要注意，最好重启一下mysql服务，以使配置生效。

  然后通过root登录
    ```
    mysql -uroot -p123456
    ```