---
title: SpringBoot整合第三方依赖
icon: java
date: 2023-12-26
# 此页面会在文章列表置顶
sticky: true
# 此页面会出现在文章收藏中
star: true
category:
  - SpringBoot
tag:
  - 第三方依赖
pageInfo: ["Author","Date","ReadingTime","Word","Category","Tag"]
---

## SpringBoot整合Swagger3(OpenAPI)

1. 导入Maven依赖,官网地址：[Springdoc](https://springdoc.org/)
   
```
        <dependency>
            <groupId>org.springdoc</groupId>
            <artifactId>springdoc-openapi-starter-webmvc-ui</artifactId>
            <version>2.3.0</version>
        </dependency>
```
2. 添加配置文件
```yaml
springdoc:
  api-docs:
    enabled: true
    path: /swagger
```