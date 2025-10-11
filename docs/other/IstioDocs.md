---
layout: doc
sidebar: false
---

## 1. 概述

### 1.1 Istio 是什么？

Istio 是一种开源服务网格，可透明地分层到现有的分布式应用程序上。 Istio 的强大功能提供了一种统一且更高效的方式来保护、连接和监控服务。 Istio
是实现负载均衡、服务到服务身份验证和监控的途径 - 几乎无需更改服务代码。它为您提供：

* 使用双向 TLS 加密、强大的基于身份的身份验证和鉴权在集群中保护服务到服务通信
* HTTP、gRPC、WebSocket 和 TCP 流量的自动负载均衡
* 使用丰富的路由规则、重试、故障转移和故障注入对流量行为进行细粒度控制
* 支持访问控制、限流和配额的可插入策略层和配置 API
* 集群内所有流量（包括集群入口和出口）的自动指标、日志和链路追踪

### 1.2 Istio 如何工作的?

Istio 使用代理来拦截您的所有网络流量，从而根据您设置的配置允许使用一系列应用程序感知功能。

控制平面采用您所需的配置及其对服务的视图，并动态地编程代理服务器，并根据规则或环境的变化对其进行更新。

数据平面是服务之间的通信。如果没有服务网格，网络就无法理解正在发送的流量，也无法根据流量类型、流量来源或目的地做出任何决策。

Istio 支持两种数据平面模式：

* Sidecar 模式，它会与您在集群中启动的每个 Pod 一起部署一个 Envoy 代理，或者与在虚拟机上运行的服务一同运行。
* Ambient 模式，它使用每个节点的四层代理，并且可选地使用每个命名空间的 Envoy 代理来实现七层功能。

## 2. 安装

### 2.1 平台安装(Kind)

#### 2.1.1 创建 Kind 集群

```shell
kind create cluster --name istio-testing
```

> --name 用于为集群指定一个名字。默认情况下，该集群将会名为 kind。

#### 2.1.2 为 kind 设置操作界面

1. 运行以下命令以部署操作界面：

    ```shell
    kubectl apply -f https://raw.githubusercontent.com/kubernetes/dashboard/v2.7.0/aio/deploy/recommended.yaml
    ```

2. 验证操作界面已经部署并且正在运行。

   > 注意：如果节点容器中的pod由于镜像下载失败导致运行失败，在节点容器通过给 containerd 配置代理解决镜像下载失败问题后，再重新运行该命令。
   >
   > 1.进入控制平面：
   >```shell
   >docker exec -it istio-cluster-control-plane bash
   >```
   > 2.创建 systemd proxy 配置文件：
   >```shell
   >mkdir -p /etc/systemd/system/containerd.service.d
   >cat <<EOF >/etc/systemd/system/containerd.service.d/http-proxy.conf
   >[Service]
   >Environment="HTTP_PROXY=http://172.17.0.1:7890"
   >Environment="HTTPS_PROXY=http://172.17.0.1:7890"
   >Environment="NO_PROXY=localhost,127.0.0.1,10.96.0.0/12,10.244.0.0/16,172.17.0.0/16,*.svc"
   >EOF
   >```
   >3.重新加载并重启 containerd：
   >```shell
   >systemctl daemon-reexec
   >systemctl daemon-reload
   >systemctl restart containerd
   >```
   >4.验证拉镜像：
   >```shell
   >ctr -n k8s.io images pull docker.io/library/busybox:latest
   >```
   >如果成功，会输出：
   >```
   >unpacking docker.io/library/busybox:latest ...
   >done
   >```

    ```shell
    kubectl get pod -n kubernetes-dashboard
    ```

    ```
    NAME                                         READY   STATUS    RESTARTS   AGE
    dashboard-metrics-scraper-76585494d8-zdb66   1/1     Running   0          39s
    kubernetes-dashboard-b7ffbc8cb-zl8zg         1/1     Running   0          39s
    ```

3. 创建 ServiceAccount 和 ClusterRoleBinding 以提供对新创建的集群的管理权限访问。

    ```shell
    kubectl create serviceaccount -n kubernetes-dashboard admin-user
    kubectl create clusterrolebinding -n kubernetes-dashboard admin-user --clusterrole cluster-admin --serviceaccount=kubernetes-dashboard:admin-user
    ```

4. 需要用 Bearer Token 来登录到操作界面。使用以下命令将 token 保存到变量。

    ```shell
    token=$(kubectl -n kubernetes-dashboard create token admin-user)
    ```

   使用 echo 命令显示 token 并复制它，以用于登录到操作界面。

    ```shell
    echo $token
    ```

5. 使用 kubectl 命令行工具运行以下命令以访问操作界面：
    ```shell
    # 启动代理(默认只监听 127.0.0.1，也就是只能在本机访问。)
    kubectl proxy
    # 启动代理(监听所有网络接口，允许任何主机访问。)
    kubectl proxy --address=0.0.0.0 --accept-hosts='.*'
    ```
    ```
    Starting to serve on 127.0.0.1:8001
    ```

### 2.2 下载 Istio CLI

Istio 使用名为 istioctl 的命令行工具进行配置。下载该工具以及 Istio 示例应用程序：

```shell
curl -L https://istio.io/downloadIstio | sh -
cd istio-1.27.1
export PATH=$PWD/bin:$PATH
```

通过打印版本的命令来检查您是否能够运行 istioctl。 此时，Istio 尚未安装在您的集群中，因此您将看到没有 Pod 就绪。

```shell
istioctl version
```

### 2.3 将 Istio 安装到你的集群上

istioctl 支持多种配置文件， 其中包含不同的默认选项，并可根据您的生产需求进行自定义。 ambient 配置文件中包含对 Ambient 模式的支持。使用以下命令安装
Istio：

```shell
istioctl install --set profile=ambient --skip-confirmation
```

安装完成后，您将看到以下输出，表明所有组件已成功安装。

```shell
✔ Istio core installed  
✔ Istiod installed
✔ CNI installed
✔ Ztunnel installed
✔ Installation complete
```

### 2.4 安装 Kubernetes Gateway API CRD

您将使用 Kubernetes Gateway API 来配置流量路由。

请注意，Kubernetes Gateway API CRD 不会默认安装在大多数 Kubernetes 集群上， 因此请确保在使用 Gateway API 之前已安装好这些 CRD：

```shell
kubectl get crd gateways.gateway.networking.k8s.io &> /dev/null || \
kubectl apply -f https://github.com/kubernetes-sigs/gateway-api/releases/download/v1.3.0/standard-install.yaml
```
