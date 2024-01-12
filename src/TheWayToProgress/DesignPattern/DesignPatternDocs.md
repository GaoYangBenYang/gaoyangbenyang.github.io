---
title: 设计模式
icon: kaifasheji
date: 2023-07-26 08:07:17
pageInfo: ["Author","Date","ReadingTime","Word","Category","Tag"]
# 是否将该文章添加至文章列表中
article: false
# 是否将该文章添加至时间线中
timeline: false
category: 
  - 设计模式
tag:
  - 设计模式
# 标题渲染深度。
headerDepth: 3
---

## 一、单例模式
### 简介

单例模式确保类只有一个实例，而且自行实例化并向整个系统提供这个实例。

在计算机系统中，线程池、缓存、日志对象、对话框、打印机、显卡的驱动程序对象常被设计成单例。

### 特点

1. 单例类只能有一个实例。
2. 单例类必须自己创建自己的唯一实例。
3. 单例类必须给所有其他对象提供这一实例。

### 实现方式
1. 饿汉式（静态常量）
   * 优点：在类装载的时候完成实例化
   * 缺点：由于在类装载的时候完成实例化，不使用会造成内存浪费。
```java
public class User {
    
    private static final User USER = new User();
    
    private User(){}
    
    public static User getInstance(){
        return USER;
    }
}
```

2. 饿汉式（静态代码块）
    * 优点：在类装载的时候完成实例化
    * 缺点：由于在类装载的时候完成实例化，不使用会造成内存浪费。
```java
public class User {
    private static User user;

    {
        user = new User();
    }
    
    private User(){}
    
    public static User getInstance(){
        return user;
    }
}
```

3. 懒汉式（线程不安全）
    * 优点：使用时再加载
    * 缺点：多线程下，线程不安全
```java
public class User {
    
    private static User user;

    private User(){}

    public static User getInstance(){
        if (user==null){
            user = new User();
        }
        return user;
    }
}
```

4. 懒汉式（同步方法）
    * 优点：使用时再加载，线程安全
    * 缺点：效率低
```java
public class User {
    
    private static User user;

    private User(){}

    public static synchronized User getInstance(){
        if (user==null){
            user = new User();
        }
        return user;
    }
}
```

5. 懒汉式（同步代码块）
    * 优点：使用时再加载，线程安全
    * 缺点：假如一个线程进入了if (user == null)判断语句块，还未来得及往下执行，另一个线程也通过了这个判断语句，这时便会产生多个实例。
```java
public class User {
    
    private static User user;

    private User(){}

    public static synchronized User getInstance(){
        if (user==null){
            user = new User();
        }
        return user;
    }
}
```

6. 双重检查（推荐使用Double-Check）
    * 优点：线程安全；延迟加载；效率较高。
```java
public class User {
    
    private static volatile User user;

    private User(){}

    public static User getInstance(){
        if (user==null){
            synchronized(User.class){
                user = new User();
            }
        }
        return user;
    }
}
```

7. 静态内部类（推荐使用）
    * 优点：这种方式跟饿汉式方式采用的机制类似，但又有不同。两者都是采用了类装载的机制来保证初始化实例时只有一个线程。不同的地方在饿汉式方式是只要Singleton类被装载就会实例化，没有Lazy-Loading的作用，而静态内部类方式在Singleton类被装载时并不会立即实例化，而是在需要实例化时，调用getInstance方法，才会装载SingletonInstance类，从而完成Singleton的实例化。
      类的静态属性只会在第一次加载类的时候初始化，所以在这里，JVM帮助我们保证了线程的安全性，在类进行初始化时，别的线程是无法进入的。
      避免了线程不安全，延迟加载，效率高。
```java
public class User {
    
    private User(){}

    private static class UserInstance {
        private static final User USER = new User();
    }

    public static User getInstance(){
      
        return UserInstance.USER;
    }
}
```

8. 枚举（推荐使用）
    * 优点：借助JDK1.5中添加的枚举来实现单例模式。因为Java虚拟机会保证枚举对象的唯一性，因此每一个枚举类型和定义的枚举变量在JVM中都是唯一的。不仅能避免多线程同步问题，而且还能防止反序列化重新创建新的对象。
```java
public enum User {
    INSTANCE;
    public void businessMethod() {
        System.out.println("我是一个单例！");
    }
}
```