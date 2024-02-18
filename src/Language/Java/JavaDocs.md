---
title: Java Docs
icon: java
date: 2023-03-25
category:
  - Java
tag:
  - Docs
pageInfo: [ "Author", "Date", "ReadingTime", "Word", "Category", "Tag" ]
# 是否将该文章添加至文章列表中
article: false
# 是否将该文章添加至时间线中
timeline: false
# 标题渲染深度。
headerDepth: 3
---

## 1. 简介

Java是由Sun Microsystems公司于1995年5月推出的Java面向对象程序设计语言和Java平台的总称。由詹姆斯·高斯林(James Gosling)和同事们共同研发，并在1995年正式推出。

Java分为三个体系：

JavaSE(J2SE)(Java2 Platform Standard Edition，java平台标准版)

JavaEE(J2EE)(Java 2 Platform,Enterprise Edition，java平台企业版)

JavaME(J2ME)(Java 2 Platform Micro Edition，java平台微型版)

2005年6月，JavaOne大会召开，SUN公司公开Java SE 6。此时，Java的各种版本已经更名以取消其中的数字"2"：J2EE更名为Java EE, J2SE更名为Java
SE，J2ME更名为Java ME。

2009年，sun公司被oracle收购.

2018年，开源组织Eclipse基金会宣布将JavaEE(Enterprise Edition)被更名为JakartaEE(雅加达)。

### 1.1 主要特性

* Java语言是简单的：

  Java语言的语法与C语言和C++语言很接近，使得大多数程序员很容易学习和使用。另一方面，Java丢弃了C++中很少使用的、很难理解的、令人迷惑的那些特性，如操作符重载、多继承、自动的强制类型转换。特别地，Java语言不使用指针，而是引用。并提供了自动的内存回收管理机制，使得程序员不必为内存管理而担忧。

* Java语言是面向对象的：

  Java语言提供类、接口和继承等原语，为了简单起见，只支持类之间的单继承，但支持接口之间的多继承，并支持类与接口之间的实现机制（关键字为implements）。Java语言全面支持动态绑定，而C++语言只对虚函数使用动态绑定。总之，Java语言是一个纯的面向对象程序设计语言。

* Java语言是分布式的：

  Java语言支持Internet应用的开发，在基本的Java应用编程接口中有一个网络应用编程接口（java
  net），它提供了用于网络应用编程的类库，包括URL、URLConnection、Socket、ServerSocket等。Java的RMI（远程方法激活）机制也是开发分布式应用的重要手段。

* Java语言是健壮的：

  Java的强类型机制、异常处理、垃圾的自动收集等是Java程序健壮性的重要保证。对指针的丢弃是Java的明智选择。Java的安全检查机制使得Java更具健壮性。

* Java语言是安全的：

  Java通常被用在网络环境中，为此，Java提供了一个安全机制以防恶意代码的攻击。除了Java语言具有的许多安全特性以外，Java对通过网络下载的类具有一个安全防范机制（类ClassLoader），如分配不同的名字空间以防替代本地的同名类、字节代码检查，并提供安全管理机制（类SecurityManager）让Java应用设置安全哨兵。

* Java语言是体系结构中立的：

  Java程序（后缀为java的文件）在Java平台上被编译为体系结构中立的字节码格式（后缀为class的文件），然后可以在实现这个Java平台的任何系统中运行。这种途径适合于异构的网络环境和软件的分发。

* Java语言是可移植的：

  这种可移植性来源于体系结构中立性，另外，Java还严格规定了各个基本数据类型的长度。Java系统本身也具有很强的可移植性，Java编译器是用Java实现的，Java的运行环境是用ANSI
  C实现的。

* ava语言是解释型的：

  如前所述，Java程序在Java平台上被编译为字节码格式，然后可以在实现这个Java平台的任何系统中运行。在运行时，Java平台中的Java解释器对这些字节码进行解释执行，执行过程中需要的类在联接阶段被载入到运行环境中。

* Java是高性能的：

  与那些解释型的高级脚本语言相比，Java的确是高性能的。事实上，Java的运行速度随着JIT(Just-In-Time）编译器技术的发展越来越接近于C++。

* Java语言是多线程的：

  在Java语言中，线程是一种特殊的对象，它必须由Thread类或其子（孙）类来创建。通常有两种方法来创建线程：其一，使用型构为Thread(Runnable)
  的构造子将一个实现了Runnable接口的对象包装成一个线程，其二，从Thread类派生出子类并重写run方法，使用该子类创建的对象即为线程。值得注意的是Thread类已经实现了Runnable接口，因此，任何一个线程均有它的run方法，而run方法中包含了线程所要运行的代码。线程的活动由一组方法来控制。Java语言支持多个线程的同时执行，并提供多线程之间的同步机制（关键字为synchronized）。

* Java语言是动态的：

  Java语言的设计目标之一是适应于动态变化的环境。Java程序需要的类能够动态地被载入到运行环境，也可以通过网络来载入所需要的类。这也有利于软件的升级。另外，Java中的类有一个运行时刻的表示，能进行运行时刻的类型检查。

### 1.2 发展历史

* 1995年5月23日，Java语言诞生
* 1996年1月，第一个JDK-JDK1.0诞生
* 1996年4月，10个最主要的操作系统供应商申明将在其产品中嵌入JAVA技术
* 1996年9月，约8.3万个网页应用了JAVA技术来制作
* 1997年2月18日，JDK1.1发布
* 1997年4月2日，JavaOne会议召开，参与者逾一万人，创当时全球同类会议规模之纪录
* 1997年9月，JavaDeveloperConnection社区成员超过十万
* 1998年2月，JDK1.1被下载超过2,000,000次
* 1998年12月8日，JAVA2企业平台J2EE发布
* 1999年6月，SUN公司发布Java的三个版本：标准版（JavaSE,以前是J2SE）、企业版（JavaEE以前是J2EE）和微型版（JavaME，以前是J2ME）
* 2000年5月8日，JDK1.3发布
* 2000年5月29日，JDK1.4发布
* 2001年6月5日，NOKIA宣布，到2003年将出售1亿部支持Java的手机
* 2001年9月24日，J2EE1.3发布
* 2002年2月26日，J2SE1.4发布，自此Java的计算能力有了大幅提升
* 2004年9月30日18:00PM，J2SE1.5发布，成为Java语言发展史上的又一里程碑。为了表示该版本的重要性，J2SE1.5更名为Java SE 5.0
* 2005年6月，JavaOne大会召开，SUN公司公开Java SE 6。此时，Java的各种版本已经更名，以取消其中的数字"2"：J2EE更名为Java EE，J2SE更名为Java
  SE，J2ME更名为Java ME
* 2006年12月，SUN公司发布JRE6.0
* 2009年04月20日，甲骨文74亿美元收购Sun。取得java的版权。
* 2010年11月，由于甲骨文对于Java社区的不友善，因此Apache扬言将退出JCP。
* 2011年7月28日，甲骨文发布java7.0的正式版。
* 2014 年 3 月 18 日，Oracle 公司发表 Java SE 8。
* 2017 年 9 月 21 日，Oracle 公司发表 Java SE 9
* 2018 年 3 月 21 日，Oracle 公司发表 Java SE 10
* 2018 年 9 月 25 日，Java SE 11 发布
* 2019 年 3 月 20 日，Java SE 12 发布

## 2. 开发环境配置

## 3. 基础语法

## *. JDK21

### *.1 虚拟线程

## *. 常用的正则匹配规则

```regexp
\s  表示空白字符。包括，空格，制表符等
\s+ 可匹配至少一个Space。
\s* 匹配0到多个Space
```

## *. Java Swing JFileChooser(文件选择器)

### *.1 常用API

```java
// 实例化
JFileChooser fileChooser = new JFileChooser();
//打开确认按钮文本是“打开”的文件选择器
fileChooser.

showOpenDialog(null);
//打开确认按钮文本是“保存”的文件选择器
fileChooser.

showSaveDialog(null);

// 拿到文件系统
FileSystemView fsv = FileSystemView.getFileSystemView();
// 设置过滤器
FileNameExtensionFilter fileNameExtensionFilter = new FileNameExtensionFilter("all", "txt", "exe");
// 修改为英文 
JFileChooser.

setDefaultLocale(Locale.US);
// 设置当前工作目录为桌面
fileChooser.

setCurrentDirectory(fsv.getHomeDirectory());
// 设置标头
        fileChooser.

setDialogTitle("select");
// 设置文件选择类型
fileChooser.

setFileSelectionMode(JFileChooser.FILES_AND_DIRECTORIES);
// 设置多文件选择模式
fileChooser.

setMultiSelectionEnabled(true);
// 移除所有文件过滤模式
fileChooser.

removeChoosableFileFilter(fileChooser.getAcceptAllFileFilter());
// 添加文件过滤
        fileChooser.

setFileFilter(fileNameExtensionFilter);

// 拿到操作结果
int result = fileChooser.showOpenDialog(null);
// 判断操作结果
if(result ==JFileChooser.APPROVE_OPTION){
// 打印所选文件路径
        System.out.

println("path: "+Arrays.toString(fileChooser.getSelectedFiles()));
        }
```

### *.2 设置默认打开的路径为桌面

```java
/**
 * JFileChooser fileChooser = new JFileChooser()，这个括号里面是可以传路径参数的
 */
//直接传参
FileSystemView fsv = FileSystemView.getFileSystemView();
JFileChooser fileChooser = new JFileChooser(fsv);
fileChooser.

showOpenDialog(null);

//间接参数
FileSystemView fsv = FileSystemView.getFileSystemView();
JFileChooser fileChooser = new JFileChooser();
fileChooser.

setCurrentDirectory(fsv.getHomeDirectory());
        fileChooser.

showOpenDialog(null);
```

### *.3 拿到选择的文件路径

```java
/**
 * JFileChooser 的返回值，代表着不同的状态，例如：用户点了取消按钮或者打开/保存。
 * 所以比较返回值即可，加入下面这两行，即可拿到当前状态：
 * int result = fileChooser.showOpenDialog(null);
 * if(result == JFileChooser.APPROVE_OPTION)
 * 加入下面这一行，即可拿到路径：
 * fileChooser.getSelectedFile().getAbsolutePath()
 */
FileSystemView fsv = FileSystemView.getFileSystemView();
JFileChooser fileChooser = new JFileChooser(fsv.getHomeDirectory());
int result = fileChooser.showOpenDialog(null);
if(result ==JFileChooser.APPROVE_OPTION){
        System.out.

println("path: "+fileChooser.getSelectedFile().

getAbsolutePath());
        }
```

### *.4 如何选择文件夹

```java
/**
 * fileChooser.setFileSelectionMode(JFileChooser.DIRECTORIES_ONLY);
 * 上面这行是JFileChooser 的选择类型样例：它的选择类型有基本的三种：文件、文件夹、文件和文件夹。
 */
FileSystemView fsv = FileSystemView.getFileSystemView();
JFileChooser fileChooser = new JFileChooser(fsv.getHomeDirectory());
fileChooser.

setFileSelectionMode(JFileChooser.DIRECTORIES_ONLY);

int result = fileChooser.showOpenDialog(null);
if(result ==JFileChooser.APPROVE_OPTION){
        System.out.

println("path: "+fileChooser.getSelectedFile().

getAbsolutePath());
        }
```

### *.5 如何过滤文件

```java
/**
 * 写一个过滤器
 * FileNameExtensionFilter fileFilter = new FileNameExtensionFilter (“exe file”,“exe”);
 * 添加这个过滤器
 * fileChooser.setFileFilter(fileFilter);
 */
FileSystemView fsv = FileSystemView.getFileSystemView();
JFileChooser fileChooser = new JFileChooser(fsv.getHomeDirectory());
fileChooser.

setFileSelectionMode(JFileChooser.FILES_ONLY);

FileNameExtensionFilter fileFilter = new FileNameExtensionFilter("*.png", "png");
fileChooser.

setFileFilter(fileFilter);

int result = fileChooser.showOpenDialog(null);
if(result ==JFileChooser.APPROVE_OPTION){
        System.out.

println("path: "+fileChooser.getSelectedFile().

getAbsolutePath());
        }
```

### *.6 如何将页面修改为英文

```java
/**
 * JFileChooser.setDefaultLocale(Locale.US);
 */
FileSystemView fsv = FileSystemView.getFileSystemView();
JFileChooser.

setDefaultLocale(Locale.US);

JFileChooser fileChooser = new JFileChooser(fsv.getHomeDirectory());
fileChooser.

setFileSelectionMode(JFileChooser.FILES_ONLY);

FileNameExtensionFilter fileFilter = new FileNameExtensionFilter("*.png", "png");
fileChooser.

setFileFilter(fileFilter);

int result = fileChooser.showOpenDialog(null);
if(result ==JFileChooser.APPROVE_OPTION){
        System.out.

println("path: "+fileChooser.getSelectedFile().

getAbsolutePath());
        }
```

### *.7 如何选择多个文件

```java
/**
 * fileChooser.setMultiSelectionEnabled(true);
 */
FileSystemView fsv = FileSystemView.getFileSystemView();
JFileChooser.

setDefaultLocale(Locale.US);

JFileChooser fileChooser = new JFileChooser(fsv.getHomeDirectory());
fileChooser.

setFileSelectionMode(JFileChooser.FILES_ONLY);
fileChooser.

setMultiSelectionEnabled(true);

int result = fileChooser.showOpenDialog(null);
if(result ==JFileChooser.APPROVE_OPTION){
        System.out.

println("path: "+Arrays.toString(fileChooser.getSelectedFiles()));
        }
```

### *.8 如何去掉所有文件选项

```java
/**
 * fileChooser.removeChoosableFileFilter(fileChooser.getAcceptAllFileFilter());
 */
FileSystemView fsv = FileSystemView.getFileSystemView();
JFileChooser.

setDefaultLocale(Locale.US);

JFileChooser fileChooser = new JFileChooser();
fileChooser.

removeChoosableFileFilter(fileChooser.getAcceptAllFileFilter());
        fileChooser.

setCurrentDirectory(fsv.getHomeDirectory());
int result = fileChooser.showOpenDialog(null);
if(result ==JFileChooser.APPROVE_OPTION){
        System.out.

println("path: "+fileChooser.getSelectedFile());
        }
```



