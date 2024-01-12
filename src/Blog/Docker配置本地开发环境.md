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
docker run \
#指定端口映射，格式为：主机(宿主)端口:容器端口
-p 3306:3306 \
#为容器指定一个名称
--name mysql \
#设置环境变量 root账户密码
-e MYSQL_ROOT_PASSWORD=123456 \
#将配置文件夹挂载到主机
-v /home/gaoyang/docker/mysql/conf/my.cnf:/etc/mysql/my.cnf \
#将日志文件夹挂载到主机
-v /home/gaoyang/docker/mysql/logs:/var/log/mysql \
#将mysql储存文件夹挂载到主机
-v /home/gaoyang/docker/mysql/data:/var/lib/mysql \
#后台运行容器，并返回容器ID
-d mysql:latest
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
3. 创建容器
```shell
docker run \
--name redis \
-p 6379:6379 \
-v /home/gaoyang/docker/redis/data:/data \
-v /home/gaoyang/docker/redis/conf/redis.conf:/etc/redis/redis.conf \
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
sudo chmod 777 /home/gaoyang/docker/rabbitmq/log
```
4. 创建容器
```shell
docker run \
--name rabbitmq \
-p 5672:5672 \
-p 15672:15672 \
-e RABBITMQ_DEFAULT_USER=admin \
-e RABBITMQ_DEFAULT_PASS=admin \
-v /home/gaoyang/docker/rabbitmq/data:/var/lib/rabbitmq \
-v /home/gaoyang/docker/rabbitmq/conf:/etc/rabbitmq \
-v /home/gaoyang/docker/rabbitmq/log:/var/log/rabbitmq \
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
docker pull nacos/nacos-server       #拉取最新版镜像
```
2. 创建主机挂载文件（开发环境可不挂载）
```shell
#创建目录 -p 递归创建
mkdir -p /home/gaoyang/docker/nacos/{conf,logs}
#创建文件
touch /home/gaoyang/docker/nacos/conf/application.properties
```
3. 创建容器,2.x版本后增加了 grpc 通信并且增加nacos的集群端口上下偏移1000，创建容器时除了 8848 还需要把 9848 也暴露出来
```shell
docker run \
--name nacos \
#Jraft请求服务端端口，用于处理服务端间的Raft相关请求
#-p 7848:7848
#主端口，客户端、控制台及OpenAPI所使用的HTTP端口
-p 8848:8848 \
#客户端gRPC请求服务端端口，用于客户端向服务端发起连接和请求
-p 9848:9848 \
#服务端gRPC请求服务端端口，用于服务间同步等
#-p 9849:9849
#9849 和 7848 端口为服务端之间的通信端口，请勿暴露到外部网络环境和客户端测
#-e SPRING_DATASOURCE_PLATFORM=mysql 
#-e MYSQL_SERVICE_HOST=localhost 
#-e MYSQL_SERVICE_PORT=3306 
#-e MYSQL_SERVICE_USER=root 
#-e MYSQL_SERVICE_PASSWORD=123456 
#-e MYSQL_SERVICE_DB_NAME=nacos 
-e JVM_XMS=256m \  #jvm启动时分配的内存
-e JVM_XMX=256m \  #为jvm运行过程中分配的最大内存
-e MODE=standalone \  #单机模式
#一下四个环境变量使用鉴权必须都配置
-e NACOS_AUTH_CACHE_ENABLE=true \  #开启权限系统
-e NACOS_AUTH_IDENTITY_KEY=admin \    #不配置nacos报错  配置了不生效 账号还是nacos(真离谱)
-e NACOS_AUTH_IDENTITY_VALUE=admin \  #不配置nacos报错  配置了不生效 密码还是nacos(真离谱)
-e NACOS_AUTH_TOKEN=SecretKey012345678901234567890123456789012345678901234567890123456789 \
#-v /home/gaoyang/docker/nacos/logs:/home/nacos/logs
-d nacos/nacos-server
```
```shell
docker run --name nacos -p 8848:8848 -p 9848:9848 -e JVM_XMS=256m -e JVM_XMX=256m -e MODE=standalone -e NACOS_AUTH_CACHE_ENABLE=true -e NACOS_AUTH_IDENTITY_KEY=admin -e NACOS_AUTH_IDENTITY_VALUE=admin -e NACOS_AUTH_TOKEN=SecretKey012345678901234567890123456789012345678901234567890123456789 -d nacos/nacos-server
```


4. 进入nacos容器，进入conf目录
```shell
docker exec -it nacos bash
```
```shell
cd conf/
```

5. 修改配置文件
```properties
nacos.core.auth.enabled=true
```
6. 重启nacos容器
```shell
docker restart nacos
```

7. 检查容器是否正确运行
```shell
docker ps
```

## Sentinel
1. 拉取官方镜像
```shell
docker pull bladex/sentinel-dashboard #拉取最新版镜像
```
2. 创建容器
```shell
docker run \
--name Sentinel \
-p 8719:8719 \
-p 8858:8858 \
-d bladex/sentinel-dashboard
```
3. 检查容器是否正确运行
```shell
docker ps
```

## Elasticsearch(有问题，待处理)

1. Elasticsearch简介

   Elasticsearch是位于Elastic Stack核心的分布式搜索和分析引擎。

   Logstash和Beats有助于收集、聚合和丰富数据，并将其存储在Elasticsearch中。
   
   Kibana使您能够交互式地探索、可视化和共享对数据的见解，并管理和监视堆栈。
   
   Elasticsearch是索引、搜索和分析魔术发生的地方。

   Elasticsearch为所有类型的数据提供近乎实时的搜索和分析。无论您是结构化还是非结构化文本、数字数据还是地理空间数据，Elasticsearch都可以以一种支持快速搜索的方式有效地存储和索引它。您可以远远超出简单的数据检索和汇总信息，从而发现数据中的趋势和模式。随着数据和查询量的增长，Elasticsearch的分布式特性使您的部署能够无缝地随之增长。
   
   虽然不是每个问题都是搜索问题，但Elasticsearch提供了在各种用例中处理数据的速度和灵活性:
      * 在应用程序或网站中添加搜索框
      * 存储和分析日志、度量和安全事件数据
      * 使用机器学习实时自动模拟数据的行为
      * 使用Elasticsearch作为矢量数据库来创建、存储和搜索矢量嵌入
      * 使用Elasticsearch作为存储引擎自动化业务工作流
      * 使用Elasticsearch作为地理信息系统(GIS)管理、整合和分析空间信息
      * 使用Elasticsearch作为生物信息学研究工具存储和处理遗传数据

   我们不断地被人们使用搜索的新奇方式所震撼。但是，无论您的用例与其中一个类似，还是您正在使用Elasticsearch来解决新问题，您在Elasticsearch中处理数据，文档和索引的方式都是相同的


2. 单节点Elasticsearch集群安装
    * 创建网络
      ```shell
      #保证Kibana容器和Elasticsearch容器在同一网络中实现互联
      docker network create elastic
      ```
    * 下载官方镜像
      ```shell
      docker pull docker.elastic.co/elasticsearch/elasticsearch:8.11.3
      ```
    * 创建挂载文件
      ```shell
      # 创建目录 -p 递归创建
      mkdir -p /home/gaoyang/docker/elasticsearch/{data,plugins}
      #修改权限
      chmod 777 /home/gaoyang/docker/elasticsearch/data
      chmod 777 /home/gaoyang/docker/elasticsearch/plugins
      ```
    * 启动容器，复制生成的密码和注册令牌，首次启动 Elasticsearch 时，生成的用户密码和 Kibana 注册令牌将输出到终端，记得保存。
      ```shell
      docker run 
      --name elasticsearch 
      --net elastic 
      -p 9200:9200 
      -p 9300:9300 
      -e "discovery.type=single-node" 
      -e "ES_JAVA_OPTS=-Xms512m -Xmx512m"
      -v /home/gaoyang/docker/elasticsearch/data:/usr/share/elasticsearch/data
      -v /home/gaoyang/docker/elasticsearch/plugins:/usr/share/elasticsearch/plugins
      -d docker.elastic.co/elasticsearch/elasticsearch:8.11.3
      ```
    * 查看容器是否正常运行
      ```shell
      docker ps
      ```
3. Kibana(Elastic的用户界面)安装
   * 下载官方镜像
     ```shell
     docker pull docker.elastic.co/kibana/kibana:8.11.3
     ```
   * 创建挂载文件
     ```shell
     # 创建目录 -p 递归创建
     mkdir -p /home/gaoyang/docker/kibana/{data,config}
     #修改权限
     chmod 777 /home/gaoyang/docker/kibana/data
     chmod 777 /home/gaoyang/docker/kibana/config
     ```
   * 启动容器
     ```shell
     docker run
     --name kibana 
     --network elastic
     -p 5601:5601 
     -e ELASTICSEARCH_HOSTS=http://elasticsearch:9200
     -v /home/gaoyang/docker/kibana/data:/usr/share/kibana/data
     -v /home/gaoyang/docker/kibana/plugins:/usr/share/kibana/plugins
     -d kibana:8.6.0
     ```
   * 查看容器是否正常运行
     ```shell
     docker ps
     ```

4. 生成登录kibana的令牌(有问题  第一次能出现 之后就报错)
```shell
# 进入容器
docker exec -it elasticsearch /bin/bash
# 关闭安全验证
echo 'xpack.security.enabled: false' >> config/elasticsearch.yml
## 开启安全注册
echo 'xpack.security.enrollment.enabled: true' >> config/elasticsearch.yml
## 开启transport SSL验证
#echo 'xpack.security.transport.ssl.enabled: true' >> config/elasticsearch.yml
#echo 'xpack.security.transport.ssl.verification_mode: certificate' >> config/elasticsearch.yml
#echo 'xpack.security.transport.ssl.keystore.path: certs/elastic-certificates.p12' >> config/elasticsearch.yml
#echo 'xpack.security.transport.ssl.truststore.path: certs/elastic-certificates.p12' >> config/elasticsearch.yml
## 开启HTTP SSL验证
echo 'xpack.security.http.ssl.enabled: true' >> config/elasticsearch.yml
#echo 'xpack.security.http.ssl.keystore.path: certs/elastic-certificates.p12' >> config/elasticsearch.yml
#echo 'xpack.security.http.ssl.truststore.path: certs/elastic-certificates.p12' >> config/elasticsearch.yml
#echo 'xpack.security.http.ssl.client_authentication: optional' >> config/elasticsearch.yml
## 开启PKI 身份验证
#echo 'xpack.security.authc.realms.pki.pki1.order: 1' >> config/elasticsearch.yml

# 生成令牌 令牌有30分钟有效期
bin/elasticsearch-create-enrollment-token --scope kibana
```

5.kibana验证
```shell
# 进入kibana容器中
docker exec -it kibana /bin/bash
# 执行生成验证码命令
bin/kibana-verification-code 
# 获得的验证码输入之前页面中
Your verification code is: 788 373
```

6. 重置密码 登录elasticsearch
```shell
# 进入elastic容器中
docker exec -it elasticsearch /bin/bash
# 重置密码
bin/elasticsearch-reset-password --username elastic -i
```