---
title: Nodejs Docs
icon: nodejs
date: 2023-03-25
category: 
  - Nodejs
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
## 1. Nodejs简介

## 2. Nodejs安装
### 2.1. 配置全局安装模块 _node_global_ 环境变量
1. 在Nodejs安装目录中新建node_global目录
2. ```shell
    npm config set prefix "%安装目录%\node_global"
    ```
### 2.2. 配置缓存目录 _node_cache_ 环境变量
1. 在Nodejs安装目录中新建node_cache目录
2. ```shell
    npm config set cache "%安装目录%\node_cache"
    ```
### 2.3. 配置全局系统变量
1. 在系统变量中新建环境变量***NODE_PATH***
2. 值设置为 `%安装目录%\node_global`

### 2.4. 修改用户变量
1. 将`path`中的默认全局安装模块修改为自定义目录`node_global`

### 2.5. 验证安装
1. 重启，更新环境变量
2. 全局安装typescript模块,查看全局安装模块目录下是否有vue
```shell
npm install -g typescript # -g 表示全局安装
```
### 2.6. npm换国内源
1. 查看源： `npm config get registry`
2. 修改源： `npm config set registry http://registry.npmmirror.com`