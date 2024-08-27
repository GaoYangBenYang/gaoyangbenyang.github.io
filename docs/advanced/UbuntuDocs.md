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
