---
title: Docker配置本地开发环境
icon: docker
date: 2023-12-18
# 此页面会在文章列表置顶
sticky: true
# 此页面会出现在文章收藏中
star: true
category:
  - Docker
tag:
  - 本地开发环境配置
pageInfo: ["Author","Date","ReadingTime","Word","Category","Tag"]
---

## MySQL
1. 拉取官方镜像
```shell
docker pull mysql       # 拉取最新版mysql镜像
```
2. 创建主机挂载文件
```shell
# 创建目录 -p 递归创建
mkdir -p /home/gaoyang/docker/mysql/{conf,logs,data}
# 创建文件
touch /home/gaoyang/docker/mysql/conf/my.cnf
```
3. 创建容器
```shell
docker run                                                  #创建一个新的容器,同时运行这个容器
-p 3306:3306                                                #指定端口映射，格式为：主机(宿主)端口:容器端口
--name mysql                                                #为容器指定一个名称
-e MYSQL_ROOT_PASSWORD=123456                               #设置环境变量 root账户密码
-v /home/gaoyang/docker/mysql/conf/my.cnf:/etc/mysql/my.cnf #将配置文件夹挂载到主机
-v /home/gaoyang/docker/mysql/logs:/var/log/mysql           #将日志文件夹挂载到主机
-v /home/gaoyang/docker/mysql/data:/var/lib/mysql           #将mysql储存文件夹挂载到主机
-d mysql:latest                                             #后台运行容器，并返回容器ID                                          
```
4. 检查容器是否正确运行
```shell
docker ps
```

## Redis
1. 拉取官方镜像
```shell
docker pull redis       # 拉取最新版redis镜像
```
2. 创建主机挂载文件
```shell
# 创建目录 -p 递归创建
mkdir -p /home/gaoyang/docker/redis/{conf,data}
# 创建文件
touch /home/gaoyang/docker/redis/conf/redis.cnf
```
3. 创建容器(命令省略了换行符 \ )
```shell
docker run 
--name redis 
-p 6379:6379 
-v /home/gaoyang/docker/redis/data:/data 
-v /home/gaoyang/docker/redis/conf/redis.conf:/etc/redis/redis.conf 
redis-server /etc/redis/redis.conf #Redis 容器中设置 redis-server 每次启动读取 /etc/redis/redis.conf 这个配置为准
-d redis:latest   
```
4. 检查容器是否正确运行
```shell
docker ps
```

## RabbitMQ
1. 拉取官方镜像(包含web控制界面的)
```shell
docker pull rabbitmq:3.9.29-management
```
2. 创建主机挂载文件
```shell
# 创建目录 -p 递归创建
mkdir -p /home/gaoyang/docker/rabbitmq/{data,conf,log}
```
3. 修改log目录权限
```shell
sudo chmod 777 /home/gaoyang/docker/rabbitmq
```
4. 创建容器(命令省略了换行符 \ )
```shell
docker run 
--name rabbitmq 
-p 5672:5672 
-p 15672:15672
-e RABBITMQ_DEFAULT_USER=admin  #控制面板账号
-e RABBITMQ_DEFAULT_PASS=admin  #控制面板密码
-v /home/gaoyang/docker/rabbitmq/data:/var/lib/rabbitmq
-v /home/gaoyang/docker/rabbitmq/conf:/etc/rabbitmq
-v /home/gaoyang/docker/rabbitmq/log:/var/log/rabbitmq
-d rabbitmq:3.9.29-management
```
5. 开启web控制台
```shell
docker exec -it rabbitmq bash
rabbitmq-plugins enable rabbitmq_management
```
6. 检查容器是否正确运行
```shell
docker ps
```

## Nacos
1. 拉取官方镜像
```shell
docker pull nacos/nacos-server       # 拉取最新版镜像
```
2. 创建主机挂载文件（开发环境可不挂载）
```shell
# 创建目录 -p 递归创建
mkdir -p /home/gaoyang/docker/nacos/{conf,logs}
# 创建文件
touch /home/gaoyang/docker/nacos/conf/application.properties
```
3. 创建容器,2.x版本后增加了 grpc 通信并且增加nacos的集群端口上下偏移1000，创建容器时除了 8848 还需要把 9848 也暴露出来
```shell
docker run 
--name nacos 
#Jraft请求服务端端口，用于处理服务端间的Raft相关请求
#-p 7848:7848
#主端口，客户端、控制台及OpenAPI所使用的HTTP端口
-p 8848:8848
#客户端gRPC请求服务端端口，用于客户端向服务端发起连接和请求
-p 9848:9848 
#服务端gRPC请求服务端端口，用于服务间同步等
#-p 9849:9849
#9849 和 7848 端口为服务端之间的通信端口，请勿暴露到外部网络环境和客户端测
#-e SPRING_DATASOURCE_PLATFORM=mysql 
#-e MYSQL_SERVICE_HOST=localhost 
#-e MYSQL_SERVICE_PORT=3306 
#-e MYSQL_SERVICE_USER=root 
#-e MYSQL_SERVICE_PASSWORD=123456 
#-e MYSQL_SERVICE_DB_NAME=nacos 
-e JVM_XMS=256m #jvm启动时分配的内存
-e JVM_XMX=256m #为jvm运行过程中分配的最大内存
-e MODE=standalone #单机模式
#一下四个环境变量使用鉴权必须都配置
-e NACOS_AUTH_CACHE_ENABLE=true #开启权限系统
-e NACOS_AUTH_IDENTITY_KEY=admin    #不配置nacos报错  配置了不生效 账号还是nacos(真离谱)
-e NACOS_AUTH_IDENTITY_VALUE=admin  #不配置nacos报错  配置了不生效 密码还是nacos(真离谱)
-e NACOS_AUTH_TOKEN=SecretKey012345678901234567890123456789012345678901234567890123456789
#-v /home/gaoyang/docker/nacos/logs:/home/nacos/logs
-d nacos/nacos-server
```
4. 进入容器终端开启鉴权
```properties
nacos.core.auth.enabled=true
```
5. 检查容器是否正确运行
```shell
docker ps
```




