---
layout: doc
sidebar: false
---

## Docker简介

Docker 是一种开源的应用容器引擎，它可以让开发者将应用程序和依赖打包到一个轻量级、可移植的容器中，然后在任何流行的 Linux 机器上运行，实现虚拟化。Docker
的优点包括快速交付、响应式部署、高效的资源利用和跨平台的兼容性。本文将介绍 Docker 的基本使用和常用命令。

### 安装 Docker (Install Docker Engine on Ubuntu)

Docker 支持多种 Linux 发行版，如 CentOS、Ubuntu、Debian 等。Ubuntu 安装 Docker 的步骤如下：

- 更新Ubuntu依赖

```shell
sudo apt update       # 更新软件包索引
sudo apt upgrade      # 更新已安装的包，不删除或安装额外包
sudo apt full-upgrade # 允许添加、删除包以完成升级
```

- 在安装 Docker Engine 之前，需要卸载任何冲突的软件包。

> 您的 Linux 发行版可能提供非官方的 Docker 软件包，这可能会发生冲突 使用 Docker 提供的官方软件包。您必须卸载这些软件包 在安装 Docker Engine
> 正式版之前。

```shell
for pkg in docker.io docker-doc docker-compose docker-compose-v2 podman-docker containerd runc; do sudo apt-get remove $pkg; done
```

- 使用存储库安装

> 在新主机上首次安装 Docker Engine 之前，需要设置 Docker 存储库。之后，您可以安装和更新存储库中的 Docker。

```shell
# Add Docker's official GPG key:
sudo apt-get update
sudo apt-get install ca-certificates curl
sudo install -m 0755 -d /etc/apt/keyrings
sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
sudo chmod a+r /etc/apt/keyrings/docker.asc

# Add the repository to Apt sources:
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu \
  $(. /etc/os-release && echo "${UBUNTU_CODENAME:-$VERSION_CODENAME}") stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt-get update
```

- 安装 Docker 软件包

> 安装最新版本

```shell
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```

> 安装特定版本

```shell
# List the available versions:
apt-cache madison docker-ce | awk '{ print $3 }'

5:28.3.1-1~ubuntu.24.04~noble
5:28.3.0-1~ubuntu.24.04~noble
...
```

- 验证安装是否成功

```shell
sudo docker run hello-world
```

### 以非 root 用户身份管理 Docker

- 创建组

```shell
sudo groupadd docker
```

- 将您的用户添加到组

```shell
sudo usermod -aG docker $USER
```

- 注销并重新登录或者激活对组的更改,以便重新评估群组成员资格

```shell
newgrp docker
```

- 使用 systemd 将 Docker 配置为在启动时启动

```shell
sudo systemctl enable docker.service
sudo systemctl enable containerd.service
```

> 要停止此行为，请改用。disable

```shell
sudo systemctl disable docker.service
sudo systemctl disable containerd.service
```

- 配置 Docker 守护进程代理

1. 编辑或新建 Docker systemd 配置文件

```shell
sudo mkdir -p /etc/systemd/system/docker.service.d
sudo nano /etc/systemd/system/docker.service.d/http-proxy.conf
```

2. 在文件中添加代理配置（根据你的代理地址替换）

```shell
#[Service]
#Environment="HTTP_PROXY=http://你的代理地址:端口/"
#Environment="HTTPS_PROXY=http://你的代理地址:端口/"
#Environment="NO_PROXY=localhost,127.0.0.1"
[Service]
Environment="HTTP_PROXY=http://127.0.0.1:7890/"
Environment="HTTPS_PROXY=http://127.0.0.1:7890/"
Environment="NO_PROXY=localhost,127.0.0.1"
```

3. 重载 systemd 配置，重启 docker

```shell
sudo systemctl daemon-reload
sudo systemctl restart docker
```


- 验证是否可以在没有组内

```shell
docker run hello-world
```

### 卸载 Docker Engine

1. 卸载 Docker Engine、CLI、containerd 和 Docker Compose 软件包:

```shell
sudo apt-get purge docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin docker-ce-rootless-extras
```

2. 主机上的映像、容器、卷或自定义配置文件 不会自动删除。要删除所有镜像、容器和卷，请执行以下作：

```shell
sudo rm -rf /var/lib/docker
sudo rm -rf /var/lib/containerd
```

3. 删除源列表和密钥环

```shell
sudo rm /etc/apt/sources.list.d/docker.list
sudo rm /etc/apt/keyrings/docker.asc
```

### Docker 的基本组成

Docker 的基本组成包括三个部分：镜像（Image）、容器（Container）和仓库（Repository）。

- 镜像（Image）：Docker 镜像是一个只读的模板，用于创建容器。一个镜像可以包含一个基本的操作系统，以及运行应用程序所需的环境和文件。镜像可以从仓库中拉取，也可以通过
  Dockerfile 来构建。
- 容器（Container）：Docker 容器是一个独立运行的应用程序的实例，它是从镜像创建出来的。容器可以启动、停止、删除、暂停等。每个容器都有自己的文件系统，互相隔离，不会影响其他容器。
- 仓库（Repository）：Docker 仓库是一个存放镜像的地方，可以是公有的，也可以是私有的。Docker Hub
  是一个公有的仓库，任何人都可以上传和下载镜像。也可以使用阿里云、腾讯云等提供的私有仓库服务，或者自己搭建私有仓库。

### Docker 的常用命令

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

```shell
docker run -it --name mycontainer -p 8080:80 -e MYVAR=hello -v /data:/data myimage
```

这个命令会从 myimage 镜像创建一个名为 mycontainer 的容器，以交互模式运行，将容器的 80 端口映射到主机的 8080 端口，设置一个环境变量 MYVAR 的值为
hello，将主机的 /data 目录挂载到容器的 /data 目录。

- `docker start`：启动一个已经创建的容器，可以指定容器的 ID 或者名称。例如：

```shell
docker start mycontainer
```

这个命令会启动名为 mycontainer 的容器。

- `docker stop`：停止一个正在运行的容器，可以指定容器的 ID 或者名称。例如：

```shell
docker stop mycontainer
```

这个命令会停止名为 mycontainer 的容器。

- `docker restart`：重启一个容器，可以指定容器的 ID 或者名称。例如：

```shell
docker restart mycontainer
```

这个命令会重启名为 mycontainer 的容器。

- `docker kill`：强制停止一个容器，可以指定容器的 ID 或者名称。例如：

```shell
docker kill mycontainer
```

这个命令会强制停止名为 mycontainer 的容器。

- `docker rm`：删除一个已经停止的容器，可以指定容器的 ID 或者名称。例如：

```shell
docker rm mycontainer
```

这个命令会删除名为 mycontainer 的容器。

- `docker pause`：暂停一个容器的所有进程，可以指定容器的 ID 或者名称。例如：

```shell
docker pause mycontainer
```

这个命令会暂停名为 mycontainer 的容器的所有进程。

- `docker unpause`：恢复一个暂停的容器的所有进程，可以指定容器的 ID 或者名称。例如：

```shell
docker unpause mycontainer
```

这个命令会恢复名为 mycontainer 的容器的所有进程。

- `docker create`：创建一个容器，但不启动它，可以指定镜像、名称、端口映射、环境变量、挂载数据卷等参数。例如：

```shell
docker create -it --name mycontainer -p 8080:80 -e MYVAR=hello -v /data:/data myimage
```

这个命令会从 myimage 镜像创建一个名为 mycontainer 的容器，以交互模式运行，将容器的 80 端口映射到主机的 8080 端口，设置一个环境变量 MYVAR 的值为
hello，将主机的 /data 目录挂载到容器的 /data 目录。

- `docker exec`：在一个运行的容器中执行一个命令，可以指定容器的 ID 或者名称。例如：

```shell
docker exec -it mycontainer shell
```

这个命令会在名为 mycontainer 的容器中执行 shell 命令，进入交互模式。

### 容器操作

- `docker ps`：查看当前运行的容器，可以指定 -a 参数查看所有的容器，包括已经停止的。例如：

```shell
docker ps -a
```

这个命令会显示所有的容器的 ID、名称、状态、端口映射等信息。

- `docker inspect`：查看一个容器的详细信息，可以指定容器的 ID 或者名称。例如：

```shell
docker inspect mycontainer
```

这个命令会显示名为 mycontainer 的容器的配置、网络、挂载、日志等信息。

- `docker logs`：查看一个容器的日志，可以指定容器的 ID 或者名称。例如：

```shell
docker logs mycontainer
```

这个命令会显示名为 mycontainer 的容器的标准输出和标准错误的内容。

- `docker top`：查看一个容器的进程信息，可以指定容器的 ID 或者名称。例如：

```shell
docker top mycontainer
```

这个命令会显示名为 mycontainer 的容器的进程 ID、用户、命令等信息。

- `docker stats`：查看一个或多个容器的资源使用情况，可以指定容器的 ID 或者名称，或者使用 -a 参数查看所有的容器。例如：

```shell
docker stats mycontainer
```

这个命令会显示名为 mycontainer 的容器的 CPU、内存、网络、磁盘等资源的使用情况。

- `docker port`：查看一个容器的端口映射情况，可以指定容器的 ID 或者名称。例如：

```shell
docker port mycontainer
```

这个命令会显示名为 mycontainer 的容器的端口映射情况，如 80/tcp -> 0.0.0.0:8080。

- `docker attach`：连接到一个正在运行的容器的标准输入、输出和错误流，可以指定容器的 ID 或者名称。例如：

```shell
docker attach mycontainer
```

这个命令会连接到名为 mycontainer 的容器的标准输入、输出和错误流，可以与容器进行交互。

### 容器 rootfs 命令

- `docker commit`：将一个容器的修改保存为一个新的镜像，可以指定容器的 ID 或者名称，以及新镜像的名称和标签。例如：

```shell
docker commit mycontainer mynewimage:latest
```

这个命令会将名为 mycontainer 的容器的修改保存为一个名为 mynewimage 的镜像，标签为 latest。

- `docker cp`：将一个容器的文件或目录复制到主机，或者将主机的文件或目录复制到容器，可以指定容器的 ID 或者名称，以及源和目标的路径。例如：

```shell
docker cp mycontainer:/etc/hosts /tmp/hosts
```

这个命令会将名为 mycontainer 的容器的 /etc/hosts 文件复制到主机的 /tmp/hosts 目录。

- `docker diff`：查看一个容器的文件系统的变化，可以指定容器的 ID 或者名称。例如：

```shell
docker diff mycontainer
```

这个命令会显示名为 mycontainer 的容器的文件系统的变化，如 A 表示新增，D 表示删除，C 表示修改。

### 镜像仓库

- `docker login`：登录到一个镜像仓库，可以指定仓库的地址、用户名和密码。例如：

```shell
docker login registry.example.com -u username -p password
```

这个命令会登录到 registry.example.com 这个镜像仓库，用户名为 username，密码为 password。

- `docker logout`：登出一个镜像仓库，可以指定仓库的地址。例如：

```shell
docker logout registry.example.com
```

这个命令会登出 registry.example.com 这个镜像仓库。

- `docker pull`：从一个镜像仓库拉取一个镜像，可以指定仓库的地址、镜像的名称和标签。例如：

```shell
docker pull registry.example.com/myimage:latest
```

这个命令会从 registry.example.com 这个镜像仓库拉取一个名为 myimage 的镜像，标签为 latest。

- `docker push`：将一个镜像推送到一个镜像仓库，可以指定仓库的地址、镜像的名称和标签。例如：

```shell
docker push registry.example.com/myimage:latest
```

这个命令会将一个名为 myimage 的镜像，标签为 latest，推送到 registry.example.com 这个镜像仓库。

- `docker search`：在一个镜像仓库中搜索一个镜像，可以指定仓库的地址、镜像的名称和过滤条件。例如：

```shell
docker search registry.example.com/myimage --filter stars=3
```

这个命令会在 registry.example.com 这个镜像仓库中搜索一个名为 myimage 的镜像，过滤条件为星级大于等于 3。

### 镜像管理

- `docker images`：查看本地的镜像，可以指定镜像的名称和标签。例如：

```shell
docker images myimage:latest
```

这个命令会显示本地的一个名为 myimage 的镜像，标签为 latest。

- `docker rmi`：删除本地的一个或多个镜像，可以指定镜像的 ID 或者名称和标签。例如：

```shell
docker rmi myimage:latest
```

这个命令会删除本地的一个名为 myimage 的镜像，标签为 latest。

- `docker build`：根据 Dockerfile 构建一个镜像，可以指定 Dockerfile 的路径和新镜像的名称和标签。例如：

```shell
docker build -t myimage:latest .
```

这个命令会根据当前目录下的 Dockerfile 构建一个名为 myimage 的镜像，标签为 latest。

- `docker history`：查看一个镜像的历史记录，可以指定镜像的 ID 或者名称和标签。例如：

```shell
docker history myimage:latest
```

这个命令会显示一个名为 myimage 的镜像的历史记录，包括每一层的 ID、大小、创建时间、命令等信息。

- `docker tag`：给一个镜像添加一个新的标签，可以指定镜像的 ID 或者名称和标签，以及新的名称和标签。例如：

```shell
docker tag myimage:latest myimage:v1.0
```

这个命令会给一个名为 myimage 的镜像，标签为 latest，添加一个新的标签 v1.0。

- `docker save`：将一个镜像保存为一个 tar 文件，可以指定镜像的 ID 或者名称和标签，以及文件的路径。例如：

```shell
docker save myimage:latest -o myimage.tar
```

这个命令会将一个名为 myimage 的镜像，标签为 latest，保存为一个名为 myimage.tar 的文件。

- `docker load`：从一个 tar 文件加载一个镜像，可以指定文件的路径。例如：

```shell
docker load -i myimage.tar
```

这个命令会从一个名为 myimage.tar 的文件加载一个镜像。

- `docker import`：从一个文件或 URL 导入一个镜像，可以指定文件或 URL 的路径，以及新镜像的名称和标签。例如：

```shell
docker import http://example.com/myimage.tar myimage:latest
```

这个命令会从 http://example.com/myimage.tar 这个 URL 导入一个镜像，名为 myimage

Docker 的常用命令（续）

在上一篇文章中，我们介绍了 Docker 的基本概念和容器生命周期管理、容器操作、容器 rootfs 命令、镜像仓库、镜像管理等常用命令。本文将继续介绍 Docker
的其他常用命令，包括网络管理和数据卷管理。

### 网络管理

- `docker network create`：创建一个自定义的网络，可以指定网络的名称、驱动、子网等参数。例如：

```shell
docker network create --driver bridge --subnet 172.18.0.0/16 mynetwork
```

这个命令会创建一个名为 mynetwork 的网络，使用 bridge 驱动，子网为 172.18.0.0/16。

- `docker network rm`：删除一个网络，可以指定网络的 ID 或者名称。例如：

```shell
docker network rm mynetwork
```

这个命令会删除名为 mynetwork 的网络。

- `docker network ls`：查看本地的网络，可以指定 -f 参数过滤网络。例如：

```shell
docker network ls -f driver=bridge
```

这个命令会显示本地的所有使用 bridge 驱动的网络。

- `docker network inspect`：查看一个网络的详细信息，可以指定网络的 ID 或者名称。例如：

```shell
docker network inspect mynetwork
```

这个命令会显示名为 mynetwork 的网络的配置、连接的容器等信息。

- `docker network connect`：将一个容器连接到一个网络，可以指定容器的 ID 或者名称，以及网络的 ID 或者名称。例如：

```shell
docker network connect mynetwork mycontainer
```

这个命令会将名为 mycontainer 的容器连接到名为 mynetwork 的网络。

- `docker network disconnect`：将一个容器从一个网络断开，可以指定容器的 ID 或者名称，以及网络的 ID 或者名称。例如：

```shell
docker network disconnect mynetwork mycontainer
```

这个命令会将名为 mycontainer 的容器从名为 mynetwork 的网络断开。

### 数据卷管理

- `docker volume create`：创建一个数据卷，可以指定数据卷的名称、驱动、标签等参数。例如：

```shell
docker volume create --name myvolume --driver local --label backup=yes
```

这个命令会创建一个名为 myvolume 的数据卷，使用 local 驱动，标签为 backup=yes。

- `docker volume rm`：删除一个数据卷，可以指定数据卷的 ID 或者名称。例如：

```shell
docker volume rm myvolume
```

这个命令会删除名为 myvolume 的数据卷。

- `docker volume ls`：查看本地的数据卷，可以指定 -f 参数过滤数据卷。例如：

```shell
docker volume ls -f driver=local
```

这个命令会显示本地的所有使用 local 驱动的数据卷。

- `docker volume inspect`：查看一个数据卷的详细信息，可以指定数据卷的 ID 或者名称。例如：

```shell
docker volume inspect myvolume
```

这个命令会显示名为 myvolume 的数据卷的配置、挂载点、标签等信息。

- `docker volume prune`：删除所有未使用的数据卷，可以指定 -f 参数强制删除。例如：

```shell
docker volume prune -f
```

这个命令会删除所有未使用的数据卷，不需要确认。

##                                                                                                                  * Docker 开启远程TCP连接

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

## *. WSL2环境中Docker代理配置

### 1. WSL2.0开启本机代理

1. 关闭WSL并且在用户目录下创建.wslconfig配置文件

```shell
wsl --shutdown
```

2. .wslconfig文件内容

```shell
[wsl2]
# 设置虚拟机的最大内存使用量为 8GB
memory=4GB
# 设置虚拟机的处理器核心数为 8
processors=4
# 设置虚拟机的交换空间大小为 2GB
swap=2GB
# 设置localhost转发，让Linux应用可以通过localhost访问Windows应用
localhostForwarding=true
[experimental]
# 网络模式，使用 mirrored 模式 nat 默认nat,让Linux应用可以通过localhost访问Windows应用
networkingMode=mirrored
# 自动内存回收模式，逐步回收内存
autoMemoryReclaim=gradual  # gradual | dropcache | disabled
# 启用 DNS 隧道，优化 DNS 查询
dnsTunneling=true
# 启用防火墙功能
firewall=false
# 启用自动代理配置
autoProxy=false
# 启用稀疏 VHD 文件，节省磁盘空间
sparseVhd=false
```

### 2. 配置Docker代理

1. 使用 sudo 创建目录和文件：

> 确保 Docker 服务的配置目录存在并具有正确的权限。

```shell
sudo mkdir -p /etc/systemd/system/docker.service.d
```

2. 使用 sudo 编辑配置文件：

> 使用具有超级用户权限的编辑器来编辑文件。

```shell
sudo vim /etc/systemd/system/docker.service.d/http-proxy.conf
```

3. 在文件中添加以下内容：

```shell
[Service]
Environment="HTTP_PROXY=http://127.0.0.1:<代理端口>"
Environment="HTTPS_PROXY=http://127.0.0.1:<代理端口>"
Environment="NO_PROXY=localhost,127.0.0.1,::1"
```

4. 重新加载 systemd 配置并重启 Docker 服务：

```shell
sudo systemctl daemon-reload
sudo systemctl restart docker
```

5. 检查 Docker 服务状态：

> 确保 Docker 服务正在运行并没有错误：

```shell
sudo systemctl status docker
```

6. 尝试拉取 Docker 镜像：

```shell
sudo docker pull hello-world
```

## *. Docker镜像上传Github

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

## *. Docker 配置本地开发环境

### *.1 MySQL

1. 拉取官方镜像

```shell
docker pull mysql       # 拉取最新版mysql镜像
```

2. 创建主机挂载文件

```shell
# 创建目录 -p 递归创建
mkdir -p ~/mysql/{conf.d,logs,data}
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
-v /root/mysql/conf.d:/etc/mysql/conf.d \
#将日志文件夹挂载到主机
-v /root/mysql/logs:/var/log/mysql \
#将mysql储存文件夹挂载到主机
-v /root/mysql/data:/var/lib/mysql \
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
mkdir -p ~/redis/{conf,data}
```

3. 创建容器

```shell
docker run \
--name redis \
-p 6379:6379 \
-v /root/redis/data:/data \
-v /root/redis/conf:/etc/redis \
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
mkdir -p ~/rabbitmq/{data,conf,log}
```

3. 修改log目录权限

```shell
sudo chmod 777 /root/rabbitmq/log
```

4. 创建容器

```shell
docker run \
--name rabbitmq \
-p 5672:5672 \
-p 15672:15672 \
-e RABBITMQ_DEFAULT_USER=admin \
-e RABBITMQ_DEFAULT_PASS=admin \
-v /root/rabbitmq/data:/var/lib/rabbitmq \
-v /root/rabbitmq/conf:/etc/rabbitmq \
-v /root/rabbitmq/log:/var/log/rabbitmq \
-d rabbitmq:3.9.29-management
```

5. 开启web控制台

```shell
docker exec -it rabbitmq shell
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
mkdir -p ~/nacos/{conf,logs}
#创建文件
touch ~/nacos/conf/application.properties
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
#-v /root/nacos/logs:/home/nacos/logs
-d nacos/nacos-server
```

```shell
docker run --name nacos -p 8848:8848 -p 9848:9848 -e JVM_XMS=256m -e JVM_XMX=256m -e MODE=standalone -e NACOS_AUTH_CACHE_ENABLE=true -e NACOS_AUTH_IDENTITY_KEY=admin -e NACOS_AUTH_IDENTITY_VALUE=admin -e NACOS_AUTH_TOKEN=SecretKey012345678901234567890123456789012345678901234567890123456789 -d nacos/nacos-server
```

4. 进入nacos容器，进入conf目录

```shell
docker exec -it nacos shell
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
      mkdir -p /root/elasticsearch/{data,plugins}
      #修改权限
      chmod 777 /root/elasticsearch/data
      chmod 777 /root/elasticsearch/plugins
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
      -v /root/elasticsearch/data:/usr/share/elasticsearch/data
      -v /root/elasticsearch/plugins:/usr/share/elasticsearch/plugins
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
      mkdir -p /root/kibana/{data,config}
      #修改权限
      chmod 777 /root/kibana/data
      chmod 777 /root/kibana/config
      ```
    * 启动容器
      ```shell
      docker run
      --name kibana 
      --network elastic
      -p 5601:5601 
      -e ELASTICSEARCH_HOSTS=http://elasticsearch:9200
      -v /root/kibana/data:/usr/share/kibana/data
      -v /root/kibana/plugins:/usr/share/kibana/plugins
      -d kibana:8.6.0
      ```
    * 查看容器是否正常运行
      ```shell
      docker ps
      ```

4. 生成登录kibana的令牌(有问题 第一次能出现 之后就报错)

```shell
# 进入容器
docker exec -it elasticsearch /bin/shell
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
docker exec -it kibana /bin/shell
# 执行生成验证码命令
bin/kibana-verification-code 
# 获得的验证码输入之前页面中
Your verification code is: 788 373
```

6. 重置密码 登录elasticsearch

```shell
# 进入elastic容器中
docker exec -it elasticsearch /bin/shell
# 重置密码
bin/elasticsearch-reset-password --username elastic -i
```
