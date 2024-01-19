---
title: TypeScript Docs
icon: typescript
date: 2022-12-25
category: 
  - TypeScript
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

## 1. TypeScript编译和运行
### 1.1. 编译(ts => js)
```shell
npm install -g tsc
tsc main.ts
```
### 1.2. 运行
```shell
npm install -g tsx
tsx main.ts
```

## 变量声明
```ts
// let
let str: string = '声明变量';
// const 
const STR: string = '声明常量，不再进行赋值';
```

## 基础类型
```ts
// 布尔值
let flag: boolean = false;
```