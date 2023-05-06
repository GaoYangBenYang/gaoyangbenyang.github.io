---
title: WSL2中Mysql相关问题解决
date: 2023-05-06 08:44:06
author: GaoYang
img:
summary: 
categories:
- 运维
tags:
- WSL2
---

# 安装
在 WSL (ie 上安装 MySQL。Ubuntu) ：

1. 打开 WSL 终端 (即。Ubuntu) 。
2. 更新 Ubuntu 包：sudo apt update
3. 更新该包后，使用以下命令安装 MySQL：sudo apt install mysql-server
4. 确认安装并获取版本号：mysql --version

可能还想运行包含的安全脚本。 这会更改一些不太安全的默认选项，例如远程根登录名和示例用户。 运行安全脚本：

1. 启动 MySQL 服务器：sudo /etc/init.d/mysql start
2. 启动安全脚本提示符：sudo mysql_secure_installation
3.第一个提示符会询问是否要设置验证密码插件，该插件可用于测试 MySQL 密码的强度。 然后将为 MySQL 根用户设置密码，决定是否删除匿名用户，决定是否允许根用户本地和远程登录，决定是否删除测试数据库，最后决定是否立即重新加载特权表。

若要打开 MySQL 提示符，请输入：sudo mysql

若要查看可用的数据库，请在 MySQL 提示符中输入：SHOW DATABASES;

若要创建新数据库，请输入：CREATE DATABASE database_name;

若要删除数据库，请输入： DROP DATABASE database_name;

有关使用 MySQL 数据库的更多信息，请参阅 MySQL 文档。

[详细内容浏览官方文档](https://learn.microsoft.com/zh-cn/windows/wsl/tutorials/wsl-database)

# 卸载
```
sudo apt purge mysql-*
sudo rm -rf /etc/mysql/ /var/lib/mysql
sudo apt autoremove
sudo apt autoclean
```
apt-get purge 与 apt-get remove是不同的，简单来说：

purge可以将包以及软件的配置文件全部删除
remove仅可以删除包，但不会删除配置文件

# 问题
1. MySQL服务启动时出现`su: warning: cannot change directory to /nonexistent: No such file or directory`
    [Github Issues](https://github.com/miguelgrinberg/microblog/issues/256#issuecomment-991578683)
    ```
    sudo service mysql stop #先停止服务
    sudo usermod -d /var/lib/mysql/ mysql #为 mysql 用户创建一个主目录
    sudo service mysql start #然后再启动
    ```


2. 设置MySQL服务相关命令

    * 查看MySQL运行状态： `sudo service mysql status`
    * 开机自启：`sudo update-rc.d -f mysql defaults`
    * 取消开机自启：`sudo update-rc.d -f mysql remove`
    * 开启MySQL服务：`sudo service mysql start`
    * 关闭MySQL服务：`sudo service mysql stop`

3. Linux使用sudo mysql -u root -p登录MySQL，虽然会提示输入密码，但是输入任何内容都可以成功登录。

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