---
title: Docker Docs
icon: docker
date: 2023-03-25
category:
  - Docker
tag:
  - Docs
pageInfo: [ "Author", "Date", "ReadingTime", "Word", "Category", "Tag" ]
# 是否将该文章添加至文章列表中
article: false
# 是否将该文章添加至时间线中
timeline: false
# 标题渲染深度。
headerDepth: 3
---

## 1. Docker简介

Docker 是一种开源的应用容器引擎，它可以让开发者将应用程序和依赖打包到一个轻量级、可移植的容器中，然后在任何流行的 Linux 机器上运行，实现虚拟化。Docker
的优点包括快速交付、响应式部署、高效的资源利用和跨平台的兼容性。本文将介绍 Docker 的基本使用和常用命令，帮助读者快速入门 Docker 的使用。

## 安装 Docker

Docker 支持多种 Linux 发行版，如 CentOS、Ubuntu、Debian 等。安装 Docker 的步骤如下：

- 卸载旧版本的 Docker，如果有的话，使用命令：

```bash
yum remove docker \
docker-client \
docker-client-latest \
docker-common \
docker-latest \
docker-latest-logrotate \
docker-logrotate \
docker-engine
```

- 安装需要的软件包，使用命令：

```bash
yum install -y yum-utils
```

- 设置镜像仓库，使用命令：

```bash
yum-config-manager \
--add-repo \
https://download.docker.com/linux/centos/docker-ce.repo
```

- 安装 Docker 引擎，使用命令：

```bash
yum install docker-ce docker-ce-cli containerd.io
```

- 启动 Docker 服务，使用命令：

```bash
systemctl start docker
```

- 验证 Docker 是否安装成功，使用命令：

```bash
docker run hello-world
```

如果看到类似以下的输出，说明 Docker 已经成功安装并运行：

```bash
Hello from Docker!
This message shows that your installation appears to be working correctly.
...
```

## Docker 的基本组成

Docker 的基本组成包括三个部分：镜像（Image）、容器（Container）和仓库（Repository）。

- 镜像（Image）：Docker 镜像是一个只读的模板，用于创建容器。一个镜像可以包含一个基本的操作系统，以及运行应用程序所需的环境和文件。镜像可以从仓库中拉取，也可以通过
  Dockerfile 来构建。
- 容器（Container）：Docker 容器是一个独立运行的应用程序的实例，它是从镜像创建出来的。容器可以启动、停止、删除、暂停等。每个容器都有自己的文件系统，互相隔离，不会影响其他容器。
- 仓库（Repository）：Docker 仓库是一个存放镜像的地方，可以是公有的，也可以是私有的。Docker Hub
  是一个公有的仓库，任何人都可以上传和下载镜像。也可以使用阿里云、腾讯云等提供的私有仓库服务，或者自己搭建私有仓库。

## Docker 的常用命令

Docker 的常用命令可以分为以下几类：

- 容器生命周期管理：用于创建、启动、停止、删除等容器的操作，如 `docker run`、`docker start`、`docker stop`、`docker rm` 等。
- 容器操作：用于查看和管理容器的状态、信息、日志等，如 `docker ps`、`docker inspect`、`docker logs`、`docker exec` 等。
- 容器 rootfs 命令：用于操作容器的文件系统，如 `docker commit`、`docker cp`、`docker diff` 等。
- 镜像仓库：用于登录、拉取、推送、搜索等镜像的操作，如 `docker login`、`docker pull`、`docker push`、`docker search` 等。
- 镜像管理：用于查看、删除、构建、导入导出等镜像的操作，如 `docker images`、`docker rmi`、`docker build`、`docker import`、`docker export` 等。
- 网络管理：用于创建、删除、查看、连接等网络的操作，如 `docker network create`、`docker network rm`、`docker network ls`、`docker network connect`
  等。
- 数据卷管理：用于创建、删除、查看、挂载等数据卷的操作，如 `docker volume create`、`docker volume rm`、`docker volume ls`、`docker volume inspect`
  等。

下面我们举一些常用命令的例子，详细的命令用法可以参考 [Docker 命令大全](^2^)。

### 容器生命周期管理

- `docker run`：创建并启动一个容器，可以指定镜像、名称、端口映射、环境变量、挂载数据卷等参数。例如：

```bash
docker run -it --name mycontainer -p 8080:80 -e MYVAR=hello -v /data:/data myimage
```

这个命令会从 myimage 镜像创建一个名为 mycontainer 的容器，以交互模式运行，将容器的 80 端口映射到主机的 8080 端口，设置一个环境变量 MYVAR 的值为
hello，将主机的 /data 目录挂载到容器的 /data 目录。

- `docker start`：启动一个已经创建的容器，可以指定容器的 ID 或者名称。例如：

```bash
docker start mycontainer
```

这个命令会启动名为 mycontainer 的容器。

- `docker stop`：停止一个正在运行的容器，可以指定容器的 ID 或者名称。例如：

```bash
docker stop mycontainer
```

这个命令会停止名为 mycontainer 的容器。

- `docker restart`：重启一个容器，可以指定容器的 ID 或者名称。例如：

```bash
docker restart mycontainer
```

这个命令会重启名为 mycontainer 的容器。

- `docker kill`：强制停止一个容器，可以指定容器的 ID 或者名称。例如：

```bash
docker kill mycontainer
```

这个命令会强制停止名为 mycontainer 的容器。

- `docker rm`：删除一个已经停止的容器，可以指定容器的 ID 或者名称。例如：

```bash
docker rm mycontainer
```

这个命令会删除名为 mycontainer 的容器。

- `docker pause`：暂停一个容器的所有进程，可以指定容器的 ID 或者名称。例如：

```bash
docker pause mycontainer
```

这个命令会暂停名为 mycontainer 的容器的所有进程。

- `docker unpause`：恢复一个暂停的容器的所有进程，可以指定容器的 ID 或者名称。例如：

```bash
docker unpause mycontainer
```

这个命令会恢复名为 mycontainer 的容器的所有进程。

- `docker create`：创建一个容器，但不启动它，可以指定镜像、名称、端口映射、环境变量、挂载数据卷等参数。例如：

```bash
docker create -it --name mycontainer -p 8080:80 -e MYVAR=hello -v /data:/data myimage
```

这个命令会从 myimage 镜像创建一个名为 mycontainer 的容器，以交互模式运行，将容器的 80 端口映射到主机的 8080 端口，设置一个环境变量 MYVAR 的值为
hello，将主机的 /data 目录挂载到容器的 /data 目录。

- `docker exec`：在一个运行的容器中执行一个命令，可以指定容器的 ID 或者名称。例如：

```bash
docker exec -it mycontainer bash
```

这个命令会在名为 mycontainer 的容器中执行 bash 命令，进入交互模式。

### 容器操作

- `docker ps`：查看当前运行的容器，可以指定 -a 参数查看所有的容器，包括已经停止的。例如：

```bash
docker ps -a
```

这个命令会显示所有的容器的 ID、名称、状态、端口映射等信息。

- `docker inspect`：查看一个容器的详细信息，可以指定容器的 ID 或者名称。例如：

```bash
docker inspect mycontainer
```

这个命令会显示名为 mycontainer 的容器的配置、网络、挂载、日志等信息。

- `docker logs`：查看一个容器的日志，可以指定容器的 ID 或者名称。例如：

```bash
docker logs mycontainer
```

这个命令会显示名为 mycontainer 的容器的标准输出和标准错误的内容。

- `docker top`：查看一个容器的进程信息，可以指定容器的 ID 或者名称。例如：

```bash
docker top mycontainer
```

这个命令会显示名为 mycontainer 的容器的进程 ID、用户、命令等信息。

- `docker stats`：查看一个或多个容器的资源使用情况，可以指定容器的 ID 或者名称，或者使用 -a 参数查看所有的容器。例如：

```bash
docker stats mycontainer
```

这个命令会显示名为 mycontainer 的容器的 CPU、内存、网络、磁盘等资源的使用情况。

- `docker port`：查看一个容器的端口映射情况，可以指定容器的 ID 或者名称。例如：

```bash
docker port mycontainer
```

这个命令会显示名为 mycontainer 的容器的端口映射情况，如 80/tcp -> 0.0.0.0:8080。

- `docker attach`：连接到一个正在运行的容器的标准输入、输出和错误流，可以指定容器的 ID 或者名称。例如：

```bash
docker attach mycontainer
```

这个命令会连接到名为 mycontainer 的容器的标准输入、输出和错误流，可以与容器进行交互。

### 容器 rootfs 命令

- `docker commit`：将一个容器的修改保存为一个新的镜像，可以指定容器的 ID 或者名称，以及新镜像的名称和标签。例如：

```bash
docker commit mycontainer mynewimage:latest
```

这个命令会将名为 mycontainer 的容器的修改保存为一个名为 mynewimage 的镜像，标签为 latest。

- `docker cp`：将一个容器的文件或目录复制到主机，或者将主机的文件或目录复制到容器，可以指定容器的 ID 或者名称，以及源和目标的路径。例如：

```bash
docker cp mycontainer:/etc/hosts /tmp/hosts
```

这个命令会将名为 mycontainer 的容器的 /etc/hosts 文件复制到主机的 /tmp/hosts 目录。

- `docker diff`：查看一个容器的文件系统的变化，可以指定容器的 ID 或者名称。例如：

```bash
docker diff mycontainer
```

这个命令会显示名为 mycontainer 的容器的文件系统的变化，如 A 表示新增，D 表示删除，C 表示修改。

### 镜像仓库

- `docker login`：登录到一个镜像仓库，可以指定仓库的地址、用户名和密码。例如：

```bash
docker login registry.example.com -u username -p password
```

这个命令会登录到 registry.example.com 这个镜像仓库，用户名为 username，密码为 password。

- `docker logout`：登出一个镜像仓库，可以指定仓库的地址。例如：

```bash
docker logout registry.example.com
```

这个命令会登出 registry.example.com 这个镜像仓库。

- `docker pull`：从一个镜像仓库拉取一个镜像，可以指定仓库的地址、镜像的名称和标签。例如：

```bash
docker pull registry.example.com/myimage:latest
```

这个命令会从 registry.example.com 这个镜像仓库拉取一个名为 myimage 的镜像，标签为 latest。

- `docker push`：将一个镜像推送到一个镜像仓库，可以指定仓库的地址、镜像的名称和标签。例如：

```bash
docker push registry.example.com/myimage:latest
```

这个命令会将一个名为 myimage 的镜像，标签为 latest，推送到 registry.example.com 这个镜像仓库。

- `docker search`：在一个镜像仓库中搜索一个镜像，可以指定仓库的地址、镜像的名称和过滤条件。例如：

```bash
docker search registry.example.com/myimage --filter stars=3
```

这个命令会在 registry.example.com 这个镜像仓库中搜索一个名为 myimage 的镜像，过滤条件为星级大于等于 3。

### 镜像管理

- `docker images`：查看本地的镜像，可以指定镜像的名称和标签。例如：

```bash
docker images myimage:latest
```

这个命令会显示本地的一个名为 myimage 的镜像，标签为 latest。

- `docker rmi`：删除本地的一个或多个镜像，可以指定镜像的 ID 或者名称和标签。例如：

```bash
docker rmi myimage:latest
```

这个命令会删除本地的一个名为 myimage 的镜像，标签为 latest。

- `docker build`：根据 Dockerfile 构建一个镜像，可以指定 Dockerfile 的路径和新镜像的名称和标签。例如：

```bash
docker build -t myimage:latest .
```

这个命令会根据当前目录下的 Dockerfile 构建一个名为 myimage 的镜像，标签为 latest。

- `docker history`：查看一个镜像的历史记录，可以指定镜像的 ID 或者名称和标签。例如：

```bash
docker history myimage:latest
```

这个命令会显示一个名为 myimage 的镜像的历史记录，包括每一层的 ID、大小、创建时间、命令等信息。

- `docker tag`：给一个镜像添加一个新的标签，可以指定镜像的 ID 或者名称和标签，以及新的名称和标签。例如：

```bash
docker tag myimage:latest myimage:v1.0
```

这个命令会给一个名为 myimage 的镜像，标签为 latest，添加一个新的标签 v1.0。

- `docker save`：将一个镜像保存为一个 tar 文件，可以指定镜像的 ID 或者名称和标签，以及文件的路径。例如：

```bash
docker save myimage:latest -o myimage.tar
```

这个命令会将一个名为 myimage 的镜像，标签为 latest，保存为一个名为 myimage.tar 的文件。

- `docker load`：从一个 tar 文件加载一个镜像，可以指定文件的路径。例如：

```bash
docker load -i myimage.tar
```

这个命令会从一个名为 myimage.tar 的文件加载一个镜像。

- `docker import`：从一个文件或 URL 导入一个镜像，可以指定文件或 URL 的路径，以及新镜像的名称和标签。例如：

```bash
docker import http://example.com/myimage.tar myimage:latest
```

这个命令会从 http://example.com/myimage.tar 这个 URL 导入一个镜像，名为 myimage

Docker 的常用命令（续）

在上一篇文章中，我们介绍了 Docker 的基本概念和容器生命周期管理、容器操作、容器 rootfs 命令、镜像仓库、镜像管理等常用命令。本文将继续介绍 Docker
的其他常用命令，包括网络管理和数据卷管理。

### 网络管理

- `docker network create`：创建一个自定义的网络，可以指定网络的名称、驱动、子网等参数。例如：

```bash
docker network create --driver bridge --subnet 172.18.0.0/16 mynetwork
```

这个命令会创建一个名为 mynetwork 的网络，使用 bridge 驱动，子网为 172.18.0.0/16。

- `docker network rm`：删除一个网络，可以指定网络的 ID 或者名称。例如：

```bash
docker network rm mynetwork
```

这个命令会删除名为 mynetwork 的网络。

- `docker network ls`：查看本地的网络，可以指定 -f 参数过滤网络。例如：

```bash
docker network ls -f driver=bridge
```

这个命令会显示本地的所有使用 bridge 驱动的网络。

- `docker network inspect`：查看一个网络的详细信息，可以指定网络的 ID 或者名称。例如：

```bash
docker network inspect mynetwork
```

这个命令会显示名为 mynetwork 的网络的配置、连接的容器等信息。

- `docker network connect`：将一个容器连接到一个网络，可以指定容器的 ID 或者名称，以及网络的 ID 或者名称。例如：

```bash
docker network connect mynetwork mycontainer
```

这个命令会将名为 mycontainer 的容器连接到名为 mynetwork 的网络。

- `docker network disconnect`：将一个容器从一个网络断开，可以指定容器的 ID 或者名称，以及网络的 ID 或者名称。例如：

```bash
docker network disconnect mynetwork mycontainer
```

这个命令会将名为 mycontainer 的容器从名为 mynetwork 的网络断开。

### 数据卷管理

- `docker volume create`：创建一个数据卷，可以指定数据卷的名称、驱动、标签等参数。例如：

```bash
docker volume create --name myvolume --driver local --label backup=yes
```

这个命令会创建一个名为 myvolume 的数据卷，使用 local 驱动，标签为 backup=yes。

- `docker volume rm`：删除一个数据卷，可以指定数据卷的 ID 或者名称。例如：

```bash
docker volume rm myvolume
```

这个命令会删除名为 myvolume 的数据卷。

- `docker volume ls`：查看本地的数据卷，可以指定 -f 参数过滤数据卷。例如：

```bash
docker volume ls -f driver=local
```

这个命令会显示本地的所有使用 local 驱动的数据卷。

- `docker volume inspect`：查看一个数据卷的详细信息，可以指定数据卷的 ID 或者名称。例如：

```bash
docker volume inspect myvolume
```

这个命令会显示名为 myvolume 的数据卷的配置、挂载点、标签等信息。

- `docker volume prune`：删除所有未使用的数据卷，可以指定 -f 参数强制删除。例如：

```bash
docker volume prune -f
```

这个命令会删除所有未使用的数据卷，不需要确认。

##              * Docker 开启远程TCP连接

### *.1 修改docker.service配置文件

```shell
sudo vim /lib/systemd/system/docker.service
```

### *.2 修改ExecStart=xxxxxxxxx配置

> 在-H fd:// 后添加-H tcp://0.0.0.0:2375，然后保存退出0.0.0.0 是允许所有IP可访问，2375是默认端口，不是固定的，都可以按需修改

### *.3 重载配置

```shell
sudo systemctl daemon-reload          # 重新加载守护进程配置
sudo systemctl restart docker			  # 重启 docker 服务
```

### *.4 连接WSL环境下的Docker

```shell
# ip addr看看wsl ip地址
# 通过 wsl ip地址：2375进行tcp远程连接
```

### *.5 启用 TCP 连接

```shell
sudo vim /etc/docker/daemon.json
```

```json
{
  "hosts": [
    "tcp://0.0.0.0:2375",
    "unix:///var/run/docker.sock"
  ]
}

```

##              * Docker镜像上传Github

1. 登录 :

   您可以使用 docker 登录命令，通过 Docker 向 GitHub Packages 验证。

   为确保凭据安全，建议将个人访问令牌保存在您计算机上的本地文件中，然后使用 Docker 的 --password-stdin 标志从本地文件读取您的令牌。

    ```shell
    echo [token] | docker login ghcr.io -u [GithubName] --password-stdin
    ``` 

2. 上传镜像:

   1.准备镜像(最后面有个.)将 OWNER 替换为拥有仓库的用户或组织帐户的名称(使用小 写)，将 REPOSITORY 替换为包含项目的仓库的名称，将 IMAGE_NAME
   替换为包或映像的名称，将 VERSION 替换为构建时的包版本。 而 VERSION 使用构建时的软件包版本。

    ```shell
    docker build -t ghcr.io/OWNER/REPOSITORY(可不写)/IMAGE_NAME:VERSION .
    ```   

   2.使用 docker images 确定 docker 映像的名称和 ID。

    ```shell
    docker images
    ```
   3.使用 Docker 映像 ID 标记 docker 映像.

    ```shell
    docker tag IMAGE_ID:VERSION ghcr.io/OWNER/REPOSITORY(可不写)/IMAGE_NAME:VERSION
    ```     
   4.上传

    ```shell
    docker push ghcr.io/OWNER/REPOSITORY(可不写)/IMAGE_NAME:VERSION
    ```

3. 下载镜像:

   您可以使用 docker pull 命令从 GitHub Packages 安装 Docker 映像，将 OWNER 替换为拥有仓库的 用户或组织帐户的名称，将 REPOSITORY
   替换为包含项目的仓库的名称，将 IMAGE_NAME 替换为包或映 像的名称，并将 TAG_NAME 替换为要安装的映像的标记。

    ```shell
    docker pull ghcr.io/OWNER/REPOSITORY(可不写)/IMAGE_NAME:TAG_NAME 
    ```

##              * Docker 配置本地开发环境

### *.1 MySQL

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

### *.2 Redis

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

### *.3 RabbitMQ

1. 拉取官方镜像(包含web控制界面的)

```shell
docker pull rabbitmq:latest
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

### *.4 Nacos

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

### *.5 Sentinel

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

### *.6 Elasticsearch(有问题，待处理)

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

4. 生成登录kibana的令牌(有问题 第一次能出现 之后就报错)

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