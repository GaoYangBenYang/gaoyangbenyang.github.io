---
layout: doc
sidebar: false
---

## 1.SpringBoot简介

## @ResponseBody和@RestController区别

1. @ResponseBody：@ResponseBody 是一个方法级别的注解，用于标识方法的返回值应该直接作为响应体返回，而不是通过视图解析器进行页面跳转。在使用
   @ResponseBody 注解时，Spring MVC 会自动将方法返回的对象转换成适当的响应格式，如 JSON、XML 等，然后发送给客户端。需要注意的是，@ResponseBody
   注解仅仅表示方法返回的数据要作为响应体返回，并不会进行视图解析。

2. @RestController：@RestController 是一个类级别的注解，它相当于 @Controller 和 @ResponseBody 的组合。使用 @RestController 注解后，类中的所有方法都会默认使用
   @ResponseBody 注解，表示所有方法的返回值都将直接作为响应体返回给客户端，并且不会进行视图解析。因此，@RestController 适合用于构建 RESTful 风格的
   Web 服务，其中所有的响应都是以数据形式返回，而不是页面。

> 总结起来，@ResponseBody 注解用于标识方法的返回值作为响应体返回，而 @RestController 注解则是将整个类都视为 RESTful 服务的控制器，类中的所有方法默认都会使用
> @ResponseBody 注解，直接返回响应体数据。
