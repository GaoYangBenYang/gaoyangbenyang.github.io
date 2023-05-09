---
title: WSL2中Docker相关问题解决
date: 2023-05-09 08:44:06
author: GaoYang
img:
summary: 
categories:
- 运维
tags:
- WSL2
- Docker
- 坑
---

# wsl2中安装Docker
1. 错误安装方式

```
sudo apt install docker.io
```
[出现sudo service docker start启动错误：docker: unrecognized service]()

2. 正确安装方式

    * 使用脚本自动安装
    在测试或开发环境中 Docker 官方为了简化安装流程，提供了一套便捷的安装脚本，Ubuntu 系统上可以使用这套脚本安装，另外可以通过 --mirror 选项使用国内源进行安装：
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
    默认情况下，docker 命令会使用 Unix socket 与 Docker 引擎通讯。而只有 root 用户和 docker 组的用户才可以访问 Docker 引擎的 Unix socket。出于安全考虑，一般 Linux 系统上不会直接使用 root 用户。因此，更好地做法是将需要使用 docker 的用户加入 docker 用户组:
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