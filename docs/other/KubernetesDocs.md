---
layout: doc
sidebar: false
---

## 1. 概述

Kubernetes 是一个开源的容器集群管理系统。

## 2. 安装

### 2.1 Kubectl

#### 2.1.1 概述

Kubernetes 命令行工具 kubectl， 让你可以对 Kubernetes 集群运行命令。 你可以使用 kubectl 来部署应用、监测和管理集群资源以及查看日志

#### 2.1.2 安装(Linux 二进制文件 X86-64)

1. 下载最新发行版：
    ```shell
    curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl"
    ```
2. 安装 kubectl：

   ```shell
   sudo install -o root -g root -m 0755 kubectl /usr/local/bin/kubectl
   ```

   > 说明：
   >
   > 即使你没有目标系统的 root 权限，仍然可以将 kubectl 安装到目录 ~/.local/bin 中：

   ```shell
   chmod +x kubectl
   mkdir -p ~/.local/bin
   mv ./kubectl ~/.local/bin/kubectl
   # 之后将 ~/.local/bin 附加（或前置）到 $PATH
   ```

3. 执行测试，以保障你安装的版本是最新的：

   ```shell
   kubectl version --client
   ```

### 2.2 Kind

### 2.2.1 概述

kind (Kubernetes In Docker) 是一个使用 Docker 容器“节点”运行本地 Kubernetes 集群的工具。
kind 主要设计用于测试 Kubernetes 本身，但也可用于本地开发或 CI。

### 2.2.2 安装

1. Linux (二进制文件)
    ```shell
    # For AMD64 / x86_64
    [ $(uname -m) = x86_64 ] && curl -Lo ./kind https://kind.sigs.k8s.io/dl/v0.30.0/kind-linux-amd64
    # For ARM64
    [ $(uname -m) = aarch64 ] && curl -Lo ./kind https://kind.sigs.k8s.io/dl/v0.30.0/kind-linux-arm64
    chmod +x ./kind
    sudo mv ./kind /usr/local/bin/kind
    ```
2. MacOS (二进制文件)
    ```shell
    # For Intel Macs
    [ $(uname -m) = x86_64 ] && curl -Lo ./kind https://kind.sigs.k8s.io/dl/v0.30.0/kind-darwin-amd64
    # For M1 / ARM Macs
    [ $(uname -m) = arm64 ] && curl -Lo ./kind https://kind.sigs.k8s.io/dl/v0.30.0/kind-darwin-arm64
    chmod +x ./kind
    mv ./kind /some-dir-in-your-PATH/kind
    ```
3. Windows (二进制文件)
    ```shell
    curl.exe -Lo kind-windows-amd64.exe https://kind.sigs.k8s.io/dl/v0.30.0/kind-windows-amd64
    Move-Item .\kind-windows-amd64.exe c:\some-dir-in-your-PATH\kind.exe
    ```
4. 验证
    ```shell
    kind --version
    ```

### 2.2.3 基本命令

1. 创建集群

> kind create cluster [flags]
>
> Flags:
>
> --image 用于启动集群的节点 docker 镜像
>
> --config 指向kind配置文件的路径
>
> --name 集群名称 ，覆盖 KIND_CLUSTER_NAME ，配置(默认类型)
>
> --kubeconfig 设置 kubeconfig 路径，而不是 `$`KUBECONFIG 或 $HOME/.kube/config
>
> --wait 集群创建完成等待时间
>
> --retain 集群创建失败时保留节点以供调试

2. 按名称列出现有的集群

> kind get clusters

3. 删除集群

> kind delete cluster [flags]
>
> Flags:
>
> --name 集群名称
