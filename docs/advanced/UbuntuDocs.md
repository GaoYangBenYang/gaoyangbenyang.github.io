---
layout: doc
sidebar: false
---

# 开发环境配置

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

### 2、配置

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

### 2、配置

1. 开启远程连接

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
       
