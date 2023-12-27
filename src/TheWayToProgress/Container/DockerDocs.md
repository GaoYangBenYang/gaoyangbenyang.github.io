---
title: Docker Docs
icon: docker
date: 2023-03-25
category: 
  - Docker
tag:
  - Docs
pageInfo: ["Author", "Date", "ReadingTime", "Word", "Category", "Tag"]
# 是否将该文章添加至文章列表中
article: false
# 是否将该文章添加至时间线中
timeline: false
# 标题渲染深度。
headerDepth: 3
---
## Docker简介



## *Docker镜像上传Github
    
1. 登录 : 

    您可以使用 docker 登录命令，通过 Docker 向 GitHub Packages 验证。

    为确保凭据安全，建议将个人访问令牌保存在您计算机上的本地文件中，然后使用 Docker 的 --password-stdin 标志从本地文件读取您的令牌。 

    ```shell
    echo [token] | docker login ghcr.io -u [GithubName] --password-stdin
    ``` 

2. 上传镜像:

    1.准备镜像(最后面有个.)将 OWNER 替换为拥有仓库的用户或组织帐户的名称(使用小 写)，将 REPOSITORY 替换为包含项目的仓库的名称，将 IMAGE_NAME 替换为包或映像的名称，将 VERSION 替换为构建时的包版本。 而 VERSION 使用构建时的软件包版本。 
    
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

    您可以使用 docker pull 命令从 GitHub Packages 安装 Docker 映像，将 OWNER 替换为拥有仓库的 用户或组织帐户的名称，将 REPOSITORY 替换为包含项目的仓库的名称，将 IMAGE_NAME 替换为包或映 像的名称，并将 TAG_NAME 替换为要安装的映像的标记。 
       
    ```shell
    docker pull ghcr.io/OWNER/REPOSITORY(可不写)/IMAGE_NAME:TAG_NAME 
    ```