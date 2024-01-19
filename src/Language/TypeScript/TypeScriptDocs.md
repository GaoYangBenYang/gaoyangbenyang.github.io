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

## 2. 变量声明

### 2.1. 声明变量`let`
```ts
let str: string = '声明变量';
```

### 2.2 声明常量`const`
```ts
const STR: string = '声明常量，不再进行赋值';
```

## 3. 基础类型

### 3.1. 布尔值 `boolean`
> `true` or `false`
```ts
let flag: boolean = false;
```

### 3.2. 数字 `number`
> TypeScript里的所有数字都是浮点数
```ts
let num: number = 123;
```

### 3.3. 字符串 `string`
```ts
let str: string = "gaoyang";
//模板字符串:被反引号包围（ `），并且以${ expr }这种形式嵌入表达式
let say: string = `my name is ${str}`;
```

### 3.4. 数组
> 第一种，可以在元素类型后面接上 `[]`
```ts
let arr1: number[] = [123, 123, 123];
```
> 第二种，使用数组泛型 `Array<元素类型>`
```ts
let arr2: Array<number> = [123, 123, 123];
```

### 3.5. 元组 `Tuple`
> 元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同。
```ts
//声明
let tup :[string,number];
tup = ["a",1];
//访问元素
console.log(tup[0].substr(1));
```

### 3.6. 枚举 `enum`
>默认情况下，从0开始为元素编号。或者，全部都采用手动赋值。
```ts
//声明
enum x {
    Red,Greed,Blue
}
//由枚举名字找到枚举值
let a:x= x.Blue;
console.log(a);
//由枚举值找到枚举名字
let name:string = x[0];
console.log(name);
```

### 3.7. `any`
> 在编程阶段还不清楚类型的变量指定一个类型。与object类型相似，
> 但是object类型的变量只是允许你给它赋任意值，但是却不能够在它上面调用任意的方法，即便它真的有这些方法。
```ts
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false;
```

### 3.8. `object`
> object表示非原始类型，也就是除number，string，boolean，symbol，null或undefined之外的类型。
```ts
declare function create(o: object | null): void;

create({ prop: 0 }); // OK
create(null); // OK

create(42); // Error
create("string"); // Error
create(false); // Error
create(undefined); // Error
```

### 3.9. `void`
> void类型像是与any类型相反，它表示没有任何类型。
```ts
function warnUser(): void {
    console.log("This is my warning message");
}
```

### 3.10. `null` 和 `undefined`
> 和 void相似，它们的本身的类型用处不是很大。默认情况下null和undefined是所有类型的子类型。 就是说你可以把 null和undefined赋值给number类型的变量。
```ts
let u: undefined = undefined;
let n: null = null;
```

### 3.11. `never`
> never类型表示的是那些永不存在的值的类型。
```ts
// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
    throw new Error(message);
}

// 推断的返回值类型为never
function fail() {
    return error("Something failed");
}

// 返回never的函数必须存在无法达到的终点
function infiniteLoop(): never {
    while (true) {
    }
}
```

### 3.12. 类型断言
> 强制类型转换
```ts
//方式一：<>语法
let someValue: any = "this is a string";
let strLength1: number = (<string>someValue).length;
//方式二：as语法
let strLength2: number = (someValue as string).length;
```


