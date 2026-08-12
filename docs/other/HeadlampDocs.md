---
layout: doc
sidebar: false
---

## Helm

> Kubernetes 的“包管理器 + 应用部署工具”

例如 Ubuntu：

```shell
apt install nginx
```

而 Kubernetes 中可能是：

```shell
helm install my-nginx bitnami/nginx
```

### 安装

```shell
sudo snap install helm --classic
```

### 验证

```shell
helm version
```

## Headlamp

### 安装

1. 先确认 Helm
    ```shell
    helm version
    ```
2. 添加 Headlamp Helm 仓库
    ```shell
    helm repo add headlamp https://headlamp-k8s.github.io/headlamp/
    ```
3. 更新 Helm 仓库
    ```shell
    helm repo update
    ```
4. 查看 Headlamp Chart
    ```shell
    helm search repo headlamp
    ```
5. 创建 headlamp 命名空间
    ```shell
    helm search repo headlamp
    ```
6. 安装 Headlamp
    ```shell
    helm install headlamp headlamp/headlamp --namespace headlamp
    ```
7. 验证
    ```shell
    kubectl get pods -n headlamp
    ```
   > NAME READY STATUS
   >
   >headlamp-xxxxxxxxxx-xxxxx 1/1 Running
8. 将 Headlamp Service 修改为 LoadBalancer
    ```shell
    kubectl patch svc headlamp -n headlamp -p '{"spec":{"type":"LoadBalancer"}}'
    ```
9. 查看 Headlamp Service 状态
    ```shell
    kubectl get svc -n headlamp -o wide
    ```
   >headlamp   LoadBalancer   10.43.75.34   <某个IP>   80:xxxxx/TCP
10. 将 Headlamp Service 的对外端口修改为18080
   ```shell
  kubectl patch svc headlamp -n headlamp --type='json' -p='[{"op":"replace","path":"/spec/ports/0/port","value":18080}]'
   ```
11. 查看 Headlamp Service 状态
    ```shell
    kubectl get svc headlamp -n headlamp
    ```
   >NAME       TYPE           CLUSTER-IP    EXTERNAL-IP    PORT(S)
   >
   >headlamp   LoadBalancer   10.43.75.34   192.168.x.x    8080:xxxxx/TCP
12. 创建token,访问Headlamp
   ```shell
    kubectl create token headlamp -n headlamp
   ```
