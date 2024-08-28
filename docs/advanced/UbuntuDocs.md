---
layout: doc
sidebar: false
---

## MySQL

### 1、安装

1. 更新软件包列表

```shell
sudo apt update
```

2. 安装 MySQL 服务器

```shell
sudo apt install mysql-server
```

3. 启动 MySQL 服务

```shell
sudo systemctl start mysql
```

4. 确保 MySQL 开机启动

```shell
sudo systemctl enable mysql
```

5. 运行安全配置脚本，进行初步的安全配置

> 根据提示完成以下操作：

> 设置 MySQL root 用户的密码

> 移除匿名用户

> 禁止 root 用户远程登录

> 删除测试数据库

> 重新加载权限表

```shell
sudo mysql_secure_installation
```

6. 验证安装

```shell
sudo mysql -u root -p
```

### 2、卸载

1. 停止 MySQL 服务

```shell
sudo systemctl stop mysql
```

2. 卸载 MySQL 软件包

> 移除 MySQL 的所有相关包。

```shell
sudo apt-get purge mysql-server mysql-client mysql-common mysql-server-core-* mysql-client-core-*
```

3. 删除 MySQL 数据目录

> MySQL 的数据目录通常位于 /var/lib/mysql，需要手动删除：

```shell
sudo rm -rf /var/lib/mysql
```

4. 删除配置文件

> MySQL 的配置文件通常位于 /etc/mysql，删除它们：

```shell
sudo rm -rf /etc/mysql
```

5. 删除 MySQL 用户和组

> 如果你想彻底清理，还可以删除 MySQL 创建的用户和组：

```shell
sudo deluser mysql
sudo delgroup mysql
```

6. 清理残留文件

```shell
sudo apt-get autoremove
sudo apt-get autoclean
```

7. 验证卸载

> 如果没有返回任何结果，说明它们已经被完全卸载。

```shell
dpkg -l | grep mysql
```

### 3、移除 auth_socket 身份验证插件

> 该插件允许用户通过操作系统用户身份验证，而不使用传统的密码方式。

1. 确定 MySQL 版本

```mysql
SELECT VERSION();
```

2. 登录 MySQL

```shell
sudo mysql -u root
```

3. 检查当前身份验证方式

```mysql
SELECT user, host, plugin
FROM mysql.user
WHERE user = 'root';
```

> 输出中，plugin 列的值通常是 auth_socket，表示当前使用的是 auth_socket 插件。

4. 修改为密码身份验证

> 如果你想改为使用传统的密码身份验证，可以将 root 用户的身份验证插件更改为`mysql_native_password`
> 或`caching_sha2_password（在较新版本中更推荐）`
> 。

```mysql
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'your_new_password';
```

或

```mysql
ALTER USER 'root'@'localhost' IDENTIFIED WITH caching_sha2_password BY 'your_new_password';
```

5. 刷新权限

> 更改完成后，刷新权限使其立即生效：

```mysql
FLUSH PRIVILEGES;
```

### 4、修改密码策略

1. 编辑 MySQL 配置文件：

```shell
sudo vim /etc/mysql/mysql.conf.d/mysqld.cnf
```

2. 添加或修改以下配置：

```ini
[mysqld]
validate_password.policy=LOW
validate_password.length=6
```

3. 保存并退出，然后重启 MySQL 服务：

```shell
sudo systemctl restart mysql
```

### 5、修改root用户密码

1. 登录 MySQL

```shell
sudo mysql -u root
```

2. 修改密码

> 修改密码策略后，可以尝试再次设置密码：

```shell
ALTER USER 'root'@'localhost' IDENTIFIED WITH caching_sha2_password BY 'your_new_password';
```

## Redis

### 1、安装

1. 更新软件包列表

```shell
sudo apt update
```

2. 安装 Redis

```shell
sudo apt install redis-server
```

3. 启动 Redis 服务

```shell
sudo systemctl start redis-server
```

4. 确保 Redis 开机启动

```shell
sudo systemctl enable redis-server
```

6. 验证安装

> 使用 Redis CLI 工具检查 Redis 是否正常运行：

```shell
redis-cli
```

> 然后输入 ping 命令，Redis 应该返回 PONG，说明 Redis 正在运行：

```shell
127.0.0.1:6379> ping
PONG
```

### 2、卸载

1. 停止 Redis 服务

```shell
sudo systemctl stop redis-server
```

2. 卸载 Redis 软件包

> 移除 Redis 的所有相关包。

```shell
sudo apt-get purge redis-server redis-tools
```

3. 删除 Redis 数据目录

> Redis 的数据目录通常位于 /var/lib/redis，需要手动删除：

```shell
sudo rm -rf /var/lib/redis
```

4. 删除 Redis 配置文件

> Redis 的配置文件通常位于 /etc/redis，删除它们：

```shell
sudo rm -rf /etc/redis
```

5. 删除 Redis 用户和组

> 如果你想彻底清理，还可以删除 Redis 创建的用户和组：

```shell
sudo deluser redis
sudo delgroup redis
```

6. 清理残留文件

```shell
sudo apt-get autoremove
sudo apt-get autoclean
```

7. 验证卸载

> 如果没有返回任何结果，说明它们已经被完全卸载。

```shell
dpkg -l | grep redis
```

### 3、开启远程连接

1. 打开 Redis 配置文件：

   > 通常 Redis 配置文件位于 /etc/redis/redis.conf。

   ```shell
   sudo vim /etc/redis/redis.conf
   ```
2. 绑定到所有网络接口：

   > 找到 bind 127.0.0.1 ::1 这一行，并将其注释掉（在行前加上 #），或者直接修改为 bind 0.0.0.0 以允许 Redis 监听所有网络接口：

    ```shell
    # bind 127.0.0.1 ::1
    bind 0.0.0.0
    ```

3. 禁用保护模式（可选但推荐）：

   > 保护模式默认开启，只允许本地访问。找到 protected-mode yes 这一行，并将其修改为 no：

   ```shell
   protected-mode no
   ```
   > 注意：禁用保护模式后，请确保配置了密码保护，以免未授权访问。

4. 设置密码保护（强烈推荐）：

   > 为了安全起见，建议你为 Redis 设置访问密码。找到 # requirepass foobared 这一行，并取消注释并设置你的密码：

    ```shell
    requirepass your_password_here
    ```

5. 重启 Redis 服务：

   > 修改配置文件后，重启 Redis 服务以使更改生效：

    ```shell
    sudo systemctl restart redis-server
    ```

6. 配置防火墙：

   > 如果你的服务器有防火墙（例如 ufw），你需要允许 Redis 的默认端口（6379）通过防火墙：

    ```shell
    sudo ufw allow 6379
    ```

7. 测试远程连接：

   > 在你的远程客户端上，可以使用 redis-cli 或其他 Redis 客户端工具来连接到你的服务器：

    ```shell
    redis-cli -h your_server_ip -p 6379 -a your_password_here
    ```

8. 安全性注意事项：

   > 使用强密码：确保 Redis 配置了强密码，并避免使用默认或简单的密码。

   > 限制 IP 地址：尽可能在 bind 选项中指定可以连接的特定 IP 地址，而不是使用 0.0.0.0，这可以减少潜在的攻击面。

   > 启用 TLS：如果 Redis 需要在不安全的网络环境中使用，可以考虑配置 Redis 以支持 TLS（加密传输）。

## JDK

### 1、安装

1. 创建安装目录，并切换

   > 统一存放至~主目录

   ```shell
   mkdir java
   cd java/
   ```

2. 下载 Oracle JDK 21

   > 前往 Oracle 官方的 JDK 下载页面。在下载页面上，找到适合你操作系统的版本。对于 Ubuntu，你需要下载 Linux x64 Compressed Archive（.tar.gz 文件）。

   ```shell
   wget https://download.oracle.com/java/21/latest/jdk-21_linux-x64_bin.tar.gz
   ```

3. 解压下载的 JDK 包：

   > 使用 tar 命令解压下载的 JDK 压缩包：

    ```shell
    sudo tar -xvf jdk-21_linux-x64_bin.tar.gz -C ~/java
    ```

4. 更新环境变量：

   > 为了让系统识别新安装的 JDK，需要更新环境变量。你可以编辑 /etc/profile 或者在用户级别编辑 ~/.bashrc 文件：

   ```shell
   sudo vim /etc/profile
   ```

   > 在文件末尾添加以下内容：

   ```shell
   export JAVA_HOME=~/java/jdk-21.0.4
   export PATH=$PATH:$JAVA_HOME/bin
   ```

   > 保存并退出后，使更改生效：

   ```shell
   source /etc/profile
   ```

5. 验证安装

   > 验证 Oracle JDK 21 是否正确安装：

    ```shell
    java -version
    ```

### 2、卸载

## Nacos

[Unit]
Description=Nacos Server
After=network.target

[Service]
Type=forking
User=root
ExecStart=/root/nacos/nacos/bin/startup.sh
ExecStop=/root/nacos/nacos/bin/shutdown.sh
Restart=on-failure

[Install]
WantedBy=multi-user.target

### 1、安装

### 2、卸载

## Sentinel

### 1、安装

### 2、卸载
