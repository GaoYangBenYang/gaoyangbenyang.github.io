---
title: Golang中http.ListenAndServe阻塞导致if-else不执行问题分析
date: 2023-09-25
category:
  - Goalng
tag:
  - 问题分析
# 此页面会在文章列表置顶
sticky: true
# 此页面会出现在文章收藏中
star: true
pageInfo: ["Author","Date","ReadingTime","Word","Category","Tag"]
prev: 基于角色访问控制(Role-Based Access Control)模型.md
next: Golang读取配置文件处理方式.md
---
## 问题代码
>简单的代码，你可能很难发现其中的错误：
```golang
err := http.ListenAndServe(":8000", nil)
if err != nil {
  log.Println("ListenAndServe: ", err)
} else {
  log.Println("服务器启动,监听8000端口: ")
}
```
理想运行：

1. 如果服务启动成功，打印“服务器启动,监听8000端口: ”，开始访问http://localhost:8000。

2. 如果启动失败就打印“ListenAndServe: + 错误信息”。逻辑很简单！看上去没有任何问题！！

实际运行:

1. 服务器启动失败，端口被占用，打印“ListenAndServe + 错误信息”。

2. 服务启动成功，且 err==nil，log.Println("服务器启动,监听8000端口: ") 这段代码不会执行。

## 问题原因

1. http.ListenAndServe 方法执行如果异常，则会执行下面的if语句，打印“ListenAndServe: + 错误信息”。

2. 如果服务启动成功， err==nil， goroutine 就会阻塞后续执行。也就是服务启动后，后面 if 整段代码都不会被执行！

## 解决方案

1. 开源项目基本都是只进行错误时的处理
```golang
err := http.ListenAndServe(":8000", nil)
if err != nil {
  log.Println("ListenAndServe: ", err)
}
```

2. 新建一个goroutine协程每秒ping一下服务端口
```golang
go func() {
  for {
    time.Sleep(time.Second)
    log.Println("正在监听服务端口...")
    resp, err := http.Get("http://localhost:8000")
    if err != nil {
      log.Println("Failed:", err)
      continue
    }
    resp.Body.Close()
    if resp.StatusCode != http.StatusOK {
      log.Println("Not OK:", resp.StatusCode)
      continue
    }
    break
  }
  log.Println("服务器启动,监听8000端口:")
}()

err := http.ListenAndServe(":8000", nil)
if err != nil {
  log.Println("ListenAndServe: ", err)
} else {
  log.Println("服务器启动,监听8000端口: ")
}
```