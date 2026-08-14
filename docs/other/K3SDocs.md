---
layout: doc
sidebar: false
---

# K3s 国内环境部署与 GitHub Actions CI/CD 指南

> 本文整理了一套基于 K3s + GHCR（GitHub Container Registry）+ GitHub Actions 的部署方案。
>
> 适用场景：单节点或轻量级服务器部署，使用 K3s 运行 `orca-client`、`orca-server` 等容器化服务，并通过 GitHub Actions 自动更新镜像。

---

## 1. 安装 K3s（国内镜像）

使用 Rancher 国内镜像安装脚本：

```bash
curl -sfL https://rancher-mirror.rancher.cn/k3s/k3s-install.sh | INSTALL_K3S_MIRROR=cn sh -s
```

安装完成后，可以检查 K3s 服务状态：

```bash
sudo systemctl status k3s
```

如果服务正常运行，应能看到 `active (running)`。

---

## 2. 配置 kubectl

K3s 自带 kubectl，可以通过软链接直接使用。

### 2.1 创建 kubectl 软链接

```bash
sudo ln -s /usr/local/bin/k3s /usr/local/bin/kubectl
```

> 如果系统中已经存在 `/usr/local/bin/kubectl`，请先检查现有文件，避免重复创建软链接。

### 2.2 开放 kubeconfig 读取权限

```bash
sudo chmod 644 /etc/rancher/k3s/k3s.yaml
```

### 2.3 验证 Kubernetes 集群

查看节点：

```bash
kubectl get nodes
```

查看所有命名空间中的 Pod：

```bash
kubectl get pods -A
```

如果节点状态为 `Ready`，说明 K3s 集群基本正常。

---

## 3. 配置私有镜像仓库认证（GHCR）

如果 Docker 镜像存放在 GitHub Container Registry（`ghcr.io`），并且仓库或镜像需要认证，需要让 K3s/containerd 使用 GitHub 用户名和 PAT 拉取镜像。

### 3.1 创建 GitHub Personal Access Token

GitHub PAT 至少需要具备：

```text
read:packages
```

权限。

建议使用专门用于部署的 Token，并避免将 Token 直接写入 Git 仓库。

### 3.2 创建 K3s registry 配置

编辑：

```text
/etc/rancher/k3s/registries.yaml
```

可以使用：

```bash
sudo tee /etc/rancher/k3s/registries.yaml <<'EOF'
mirrors:
  "ghcr.io":
    endpoint:
      - "https://ghcr.io"

configs:
  "ghcr.io":
    auth:
      username: GitHub用户名
      password: GitHub_PAT
EOF
```

> 注意：YAML 对缩进敏感。不要直接把示例中的 `GitHub用户名` 和 `GitHub_PAT` 原样使用。

### 3.3 重启 K3s

修改 registry 配置后：

```bash
sudo systemctl restart k3s
```

检查服务：

```bash
sudo systemctl status k3s
```

### 3.4 验证镜像拉取

例如：

```bash
kubectl run test \
  --image=ghcr.io/用户名/镜像名:tag
```

查看 Pod：

```bash
kubectl get pod test
```

验证完成后删除：

```bash
kubectl delete pod test
```

如果 Pod 能够正常进入 `Running` 或完成启动，说明 GHCR 认证及镜像拉取基本正常。

---

## 4. 编写 Kubernetes Deployment 与 Service

建议统一将 Kubernetes 部署文件放在：

```text
~/deployments/
```

例如：

```text
~/deployments/
├── orca-client.yaml
└── orca-server.yaml
```

### 4.1 orca-client.yaml

推荐同时定义 `Deployment` 和 `Service`。

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: orca-client-deployment
  namespace: orca
spec:
  replicas: 1
  selector:
    matchLabels:
      app: orca-client
  template:
    metadata:
      labels:
        app: orca-client
    spec:
      containers:
        - name: orca-client
          image: ghcr.io/gaoyangbenyang/orca-client:latest
          ports:
            - name: http
              containerPort: 80
              protocol: TCP
---
apiVersion: v1
kind: Service
metadata:
  name: orca-client-service
  namespace: orca
spec:
  type: ClusterIP
  selector:
    app: orca-client
  ports:
    - name: http
      protocol: TCP
      port: 80
      targetPort: 80
---
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: orca-client-ingress
  namespace: orca
spec:
  # 使用 K3s 默认 Traefik
  ingressClassName: traefik
  rules:
    - http:
        paths:
          # 默认路径
          - path: /
            pathType: Prefix
            backend:
              service:
                name: orca-client-service
                port:
                  number: 80
```

### 4.2 orca-server.yaml

`orca-server` 使用 5200 端口时：

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: orca-server-deployment
  namespace: orca
spec:
  replicas: 1
  selector:
    matchLabels:
      app: orca-server
  template:
    metadata:
      labels:
        app: orca-server
    spec:
      containers:
        - name: orca-server
          image: ghcr.io/gaoyangbenyang/orca-server:latest
          ports:
            - name: http
              containerPort: 5200
              protocol: TCP
          # 挂载文件存储
          volumeMounts:
            # 存储卷名称
            - name: file-storage
              # 存储卷路径
              mountPath: /home/ubuntu/orca
      # 定义文件存储卷
      volumes:
        - name: file-storage
          persistentVolumeClaim:
            claimName: orca-server-file-persistent-volume-claim
---
apiVersion: v1
kind: Service
metadata:
  name: orca-server-service
  namespace: orca
spec:
  type: ClusterIP
  selector:
    app: orca-server
  ports:
    - name: http
      protocol: TCP
      port: 5200
      targetPort: 5200
---
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: orca-server-ingress
  namespace: orca
spec:
  # 使用 K3s 默认 Traefik
  ingressClassName: traefik
  rules:
    - http:
        paths:
          # api 路径
          - path: /api
            pathType: Prefix
            backend:
              service:
                name: orca-server-service
                port:
                  number: 5200
          # ws 路径
          - path: /ws
            pathType: Prefix
            backend:
              service:
                name: orca-server-service
                port:
                  number: 5200
          # druid 路径
          - path: /druid
            pathType: Prefix
            backend:
              service:
                name: orca-server-service
                port:
                  number: 5200
---
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: orca-server-file-persistent-volume-claim
  namespace: orca
spec:
  # 单节点读写
  accessModes:
    - ReadWriteOnce
  # 本地存储
  storageClassName: orca-local
  # 容量
  resources:
    requests:
      storage: 20Gi
---
apiVersion: v1
kind: PersistentVolume
metadata:
  name: orca-server-file-persistent-volume
spec:
  # 虚拟容量，只用于 Kubernetes 资源管理
  capacity:
    storage: 20Gi
  # 单节点读写
  accessModes:
    - ReadWriteOnce
  # 保留宿主机上的文件
  persistentVolumeReclaimPolicy: Retain
  # 使用本地存储
  storageClassName: orca-local
  local:
    # 宿主机实际目录
    path: /home/ubuntu/orca
  # 将 PV 固定到 dev 节点
  nodeAffinity:
    required:
      nodeSelectorTerms:
        - matchExpressions:
            - key: kubernetes.io/hostname
              operator: In
              values:
                - dev
```

> 存储卷目录 `/home/ubuntu/orca` 需要提前创建。
>
> 1. 创建分片临时目录
>
> ```shell
> sudo mkdir -p /home/ubuntu/orca/upload_chunks
> ```
>
> 2. 创建最终文件目录
> ```shell
> sudo mkdir -p /home/ubuntu/orca/upload_files
> ```
>
> 3. 查看目录
> ```shell
> ls -ld /home/ubuntu/orca/upload_chunks
> ls -ld /home/ubuntu/orca/upload_files
> ```
>
> 4. 确认 orca-server 容器运行用户
> ```shell
> kubectl exec -it $(kubectl get pod -l app=orca-server -o jsonpath='{.items[0].metadata.name}') -- id
> ```
> 
> 5. 例如：uid=1000(app) gid=1000(app)，修改目录权限
> 
> ```shell
> #将两个上传目录的所有权交给容器中的应用用户
> sudo chown -R 1000:1000 /home/ubuntu/orca/upload_chunks
> sudo chown -R 1000:1000 /home/ubuntu/orca/upload_files
>
> #确保应用用户具有读写权限
> sudo chmod -R 755 /home/ubuntu/orca/upload_chunks
> sudo chmod -R 755 /home/ubuntu/orca/upload_files
> ```

> 如果只是 `orca-client` 和 `orca-server` 在集群内部通信，建议使用 `ClusterIP`，而不是 `LoadBalancer`。
>
>只有需要从 Kubernetes 集群外部访问时，才需要考虑 `LoadBalancer` 或 `NodePort`。

---

## 5. 部署与管理

### 5.1 部署

```bash
kubectl apply -f ~/deployments/orca-client.yaml
kubectl apply -f ~/deployments/orca-server.yaml
```

### 5.2 查看部署、Pod 和 Service

```bash
kubectl get deploy,pods,svc
```

也可以实时查看：

```bash
kubectl get pods -w
```

### 5.3 查看 Pod 详情

```bash
kubectl describe pod <pod名称>
```

例如：

```bash
kubectl describe pod orca-client-xxxxxxxxx-xxxxx
```

重点关注：

- Events
- ImagePullBackOff
- ErrImagePull
- CrashLoopBackOff
- ContainerCreating

### 5.4 查看日志

```bash
kubectl logs <pod名称> -f
```

如果 Pod 中有多个容器，需要指定容器：

```bash
kubectl logs <pod名称> -c orca-client -f
```

### 5.5 更新镜像

```bash
kubectl set image deployment/orca-client \
  orca-client=ghcr.io/用户名/orca-client:latest
```

查看滚动更新状态：

```bash
kubectl rollout status deployment/orca-client
```

### 5.6 回滚

```bash
kubectl rollout undo deployment/orca-client
```

查看历史版本：

```bash
kubectl rollout history deployment/orca-client
```

### 5.7 扩缩容

例如扩展到 3 个副本：

```bash
kubectl scale deployment/orca-client --replicas=3
```

查看结果：

```bash
kubectl get pods -l app=orca-client
```

### 5.8 删除部署

```bash
kubectl delete -f ~/deployments/orca-client.yaml
```

---

## 6. Kubernetes Service 三种常见暴露方式

| 类型             | 访问范围                | 典型用途       |
|----------------|---------------------|------------|
| `ClusterIP`    | 仅集群内部               | 服务之间调用     |
| `NodePort`     | 集群外部，通过节点 IP + 端口访问 | 简单外部暴露     |
| `LoadBalancer` | 集群外部                | 对外提供稳定服务入口 |

### 6.1 ClusterIP

```yaml
spec:
  type: ClusterIP
```

例如：

```text
http://orca-server:5200
```

适合：

```text
orca-client → orca-server
```

这种 Kubernetes 集群内部调用场景。

### 6.2 NodePort

```yaml
spec:
  type: NodePort
  ports:
    - port: 5200
      targetPort: 5200
      nodePort: 30200
```

外部可以通过：

```text
服务器IP:30200
```

访问服务。

### 6.3 LoadBalancer

K3s 默认提供 ServiceLB，可以使用：

```yaml
spec:
  type: LoadBalancer
```

例如：

```text
服务器IP:5200
```

是否能够直接使用对应端口，还取决于 K3s ServiceLB、主机网络以及防火墙配置。

---

## 7. GitHub Actions CI/CD 自动部署

整体流程：

```text
GitHub Push
    │
    ▼
GitHub Actions
    │
    ├── 构建 Docker Image
    │
    ├── Push → ghcr.io
    │
    └── SSH → K3s Server
                  │
                  ▼
          kubectl set image
                  │
                  ▼
          Kubernetes Rolling Update
```

---

## 8. GitHub Secrets 配置

在 GitHub Repository：

```text
Settings
  → Secrets and variables
  → Actions
  → New repository secret
```

配置：

| Secret            | 说明             |
|-------------------|----------------|
| `SSH_HOST`        | K3s 服务器 IP 或域名 |
| `SSH_USER`        | SSH 登录用户名      |
| `SSH_PRIVATE_KEY` | SSH 私钥         |

### 8.1 SSH 私钥

建议使用专门的 CI/CD 部署密钥，而不是个人长期使用的 SSH 私钥。

服务器端需要允许对应公钥登录：

```text
~/.ssh/authorized_keys
```

---

## 9. GitHub Actions 部署步骤

可以使用 `appleboy/ssh-action` 连接服务器，然后执行 Kubernetes 更新命令。

示例：

```yaml
- name: 部署到 K3s
  if: env.IS_LATEST == 'true'
  uses: appleboy/ssh-action@v1.2.0
  with:
    host: ${{ secrets.SSH_HOST }}
    username: ${{ secrets.SSH_USER }}
    key: ${{ secrets.SSH_PRIVATE_KEY }}
    script: |
      # 更新客户端镜像
      sudo kubectl set image deployment/orca-client \
        orca-client=ghcr.io/${{ env.ACTOR_LC }}/orca-client:latest \
        -n orca

      # 更新服务端镜像
      sudo kubectl set image deployment/orca-server \
        orca-server=ghcr.io/${{ env.ACTOR_LC }}/orca-server:latest \
        -n orca

      # 等待客户端滚动更新完成
      sudo kubectl rollout status deployment/orca-client --timeout=300s

      # 等待服务端滚动更新完成
      sudo kubectl rollout status deployment/orca-server --timeout=300s
```

---

## 10. 推荐的 CI/CD 镜像版本策略

直接使用：

```text
:latest
```

可以工作，但生产环境不建议长期依赖 `latest`。

更推荐使用 Git Commit SHA：

```text
ghcr.io/username/orca-client:8f3a2c1
```

GitHub Actions 构建：

```yaml
# 使用 Git Commit SHA 作为不可变镜像版本
- name: 构建并推送镜像
  run: |
    docker build -t ghcr.io/${{ env.ACTOR_LC }}/orca-client:${{ github.sha }} .
    docker push ghcr.io/${{ env.ACTOR_LC }}/orca-client:${{ github.sha }}
```

然后部署：

```bash
# 使用不可变版本更新 Kubernetes Deployment
kubectl set image deployment/orca-client \
  orca-client=ghcr.io/用户名/orca-client:提交SHA
```

这样可以明确知道当前生产环境运行的是哪个 Git Commit。

---

## 11. 部署失败排查

### 11.1 查看 Pod

```bash
kubectl get pods -o wide
```

### 11.2 镜像拉取失败

如果出现：

```text
ImagePullBackOff
ErrImagePull
```

查看：

```bash
kubectl describe pod <pod名称>
```

重点检查：

1. GHCR 镜像名称是否正确
2. 镜像 Tag 是否存在
3. GitHub PAT 是否有效
4. PAT 是否具有 `read:packages`
5. `/etc/rancher/k3s/registries.yaml` 是否配置正确
6. 修改配置后是否重启 K3s

### 11.3 容器不断重启

如果出现：

```text
CrashLoopBackOff
```

查看：

```bash
kubectl logs <pod名称>
```

如果容器已经重启过，可以查看上一次容器日志：

```bash
kubectl logs <pod名称> --previous
```

### 11.4 Service 无法访问

查看：

```bash
kubectl get svc
```

进一步检查 Endpoint：

```bash
kubectl get endpoints
```

如果 Service 没有 Endpoint，通常需要检查：

```text
Service selector
        ↓
Pod labels
```

例如 Service：

```yaml
selector:
  app: orca-client
```

必须能够匹配 Pod：

```yaml
labels:
  app: orca-client
```

---

## 12. K3s 常用运维命令

### 查看 K3s 状态

```bash
sudo systemctl status k3s
```

### 重启 K3s

```bash
sudo systemctl restart k3s
```

### 查看 K3s 日志

```bash
sudo journalctl -u k3s -f
```

### 查看 Kubernetes 资源

```bash
kubectl get all
```

### 查看所有命名空间

```bash
kubectl get all -A
```

### 查看节点资源

```bash
kubectl top node
```

如果 `kubectl top` 不可用，需要确认 Metrics Server 是否正常运行。

---

## 13. 卸载 K3s

K3s 官方安装脚本通常会提供卸载脚本：

```bash
/usr/local/bin/k3s-uninstall.sh
```

执行：

```bash
sudo /usr/local/bin/k3s-uninstall.sh
```

> 卸载 K3s 会删除该节点上的 Kubernetes/K3s 相关资源，请确认重要数据已经完成备份。

---

## 14. 推荐目录结构

服务器上可以采用：

```text
~/
├── deployments/
│   ├── orca-client.yaml
│   └── orca-server.yaml
│
└── ...
```

K3s 配置：

```text
/etc/rancher/k3s/
├── k3s.yaml
└── registries.yaml
```

---

## 15. 推荐的生产化改进

当前方案适合单节点、内部使用或规模较小的部署。如果后续用于更正式的生产环境，建议逐步增加以下能力：

### 15.1 使用固定版本镜像

避免：

```text
latest
```

推荐：

```text
v1.2.3
```

或者：

```text
Git SHA
```

### 15.2 增加健康检查

在 Deployment 中加入：

```yaml
# 存活探针：判断容器是否仍然正常运行
livenessProbe:
  httpGet:
    path: /health
    port: 5200
  initialDelaySeconds: 10
  periodSeconds: 10

# 就绪探针：判断容器是否可以接收流量
readinessProbe:
  httpGet:
    path: /health
    port: 5200
  initialDelaySeconds: 5
  periodSeconds: 5
```

实际项目中应根据 `orca-server` 的健康检查接口调整。

### 15.3 增加资源限制

```yaml
resources:
  requests:
    cpu: "250m"
    memory: "256Mi"
  limits:
    cpu: "1"
    memory: "1Gi"
```

避免单个服务异常消耗节点全部资源。

### 15.4 使用 Secret 管理敏感信息

不要把：

```text
GitHub PAT
数据库密码
JWT Secret
第三方 API Key
```

直接写进 Deployment YAML。

可以使用 Kubernetes Secret：

```bash
kubectl create secret generic orca-secret \
  --from-literal=DATABASE_PASSWORD='你的数据库密码'
```

然后通过环境变量或 Volume 注入容器。

### 15.5 配置持久化存储

如果 `orca-server` 会保存实时数据、日志或业务数据，不建议依赖容器文件系统。

应根据数据类型选择：

```text
PersistentVolume
PersistentVolumeClaim
NFS
本地磁盘
对象存储
数据库
```

对于高吞吐实时数据，还应单独设计数据落盘策略，而不是简单依赖容器生命周期。

---

## 16. 最终架构

整体可以形成如下结构：

```text
                    GitHub
                       │
                       │ Push
                       ▼
              GitHub Actions
                       │
             ┌─────────┴─────────┐
             │                   │
             ▼                   ▼
        Docker Build        SSH Deploy
             │                   │
             ▼                   ▼
          GHCR              K3s Server
        ghcr.io                  │
             │                   │
             │          ┌────────┴────────┐
             │          │                 │
             │          ▼                 ▼
             │    orca-client       orca-server
             │       :5210              :5200
             │          │                 │
             │          └───────┬─────────┘
             │                  │
             └──────────────────┘
                  镜像更新
```

### 核心组件

| 组件                    | 作用                     |
|-----------------------|------------------------|
| K3s                   | 轻量级 Kubernetes 集群      |
| containerd            | 容器运行时                  |
| GHCR                  | Docker 镜像仓库            |
| Kubernetes Deployment | 管理应用 Pod               |
| Kubernetes Service    | 提供服务发现和网络访问            |
| GitHub Actions        | CI/CD 自动化              |
| SSH Action            | 从 GitHub Actions 连接服务器 |
| kubectl               | Kubernetes 集群管理工具      |

---

## 17. 部署流程总结

完整流程：

```text
① 安装 K3s
   ↓
② 配置 kubectl
   ↓
③ 配置 GHCR 认证
   ↓
④ 编写 Deployment + Service
   ↓
⑤ kubectl apply
   ↓
⑥ 验证 Pod / Service
   ↓
⑦ GitHub Actions 构建 Docker 镜像
   ↓
⑧ Push 到 GHCR
   ↓
⑨ SSH 登录 K3s
   ↓
⑩ kubectl set image
   ↓
⑪ Kubernetes Rolling Update
   ↓
⑫ rollout status 验证
```

这套方案可以作为在单台服务器上的基础 K3s 部署方案，并可以进一步演进到多节点 K3s、Ingress、HTTPS、持久化存储、Secret 管理、监控告警以及 GitOps（例如
Argo CD）架构。
