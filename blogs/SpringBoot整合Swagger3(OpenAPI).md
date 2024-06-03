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