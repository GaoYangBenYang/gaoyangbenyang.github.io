---
title: VSCode配置Bug记录
date: 2024-01-22
category:
  - VSCode
tag:
  - Bug
# 此页面会在文章列表置顶
sticky: true
# 此页面会出现在文章收藏中
star: true
pageInfo: ["Author","Date","ReadingTime","Word","Category","Tag"]
---
## C# Language & c# Dev Kit Extension 插件自动下载runtime
### 解决方式
>手动安装SDK,指向本地SDK
### 步骤
> 1. 在setting中搜索 配置项 existingDotnetPath 进入setting.json中
> 2. 添加 指定哪几个扩展需要指向本地的sdk
```json
"dotnetAcquisitionExtension.existingDotnetPath": [
    {
        "extensionId": "ms-dotnettools.csharp",
        "path": "C:\\Development\\dotnet\\dotnet.exe"
    },
    {
        "extensionId": "ms-dotnettools.csdevkit",
        "path": "C:\\Development\\dotnet\\dotnet.exe"
    }
],
```