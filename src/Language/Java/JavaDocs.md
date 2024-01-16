---
title: Java Docs
icon: java
date: 2023-03-25
category: 
  - Java
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
## 1. Java简介

## *. Java Swing JFileChooser(文件选择器)
### *.1 常用API
```java
// 实例化
JFileChooser fileChooser = new JFileChooser();
//打开确认按钮文本是“打开”的文件选择器
fileChooser.showOpenDialog(null);
//打开确认按钮文本是“保存”的文件选择器
fileChooser.showSaveDialog(null);
// 拿到文件系统
FileSystemView fsv = FileSystemView.getFileSystemView();
// 设置过滤器
FileNameExtensionFilter fileNameExtensionFilter = new FileNameExtensionFilter("all","txt","exe");
// 修改为英文 
JFileChooser.setDefaultLocale(Locale.US);
// 设置当前工作目录为桌面
fileChooser.setCurrentDirectory(fsv.getHomeDirectory());
// 设置标头
fileChooser.setDialogTitle("select");
// 设置文件选择类型
fileChooser.setFileSelectionMode(JFileChooser.FILES_AND_DIRECTORIES);
// 设置多文件选择模式
fileChooser.setMultiSelectionEnabled(true);
// 移除所有文件过滤模式
fileChooser.removeChoosableFileFilter(fileChooser.getAcceptAllFileFilter());
// 添加文件过滤
fileChooser.setFileFilter(fileNameExtensionFilter);
// 拿到操作结果
int result = fileChooser.showOpenDialog(null);
// 判断操作结果
if(result == JFileChooser.APPROVE_OPTION) {
// 打印所选文件路径
    System.out.println("path: " + Arrays.toString(fileChooser.getSelectedFiles()));
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
fileChooser.showOpenDialog(null);
//间接参数
FileSystemView fsv = FileSystemView.getFileSystemView();
JFileChooser fileChooser = new JFileChooser();
fileChooser.setCurrentDirectory(fsv.getHomeDirectory());
fileChooser.showOpenDialog(null);
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
if(result == JFileChooser.APPROVE_OPTION) {
    System.out.println("path: " + fileChooser.getSelectedFile().getAbsolutePath());
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
fileChooser.setFileSelectionMode(JFileChooser.DIRECTORIES_ONLY);
int result = fileChooser.showOpenDialog(null);
if(result == JFileChooser.APPROVE_OPTION) {
    System.out.println("path: " + fileChooser.getSelectedFile().getAbsolutePath());
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
fileChooser.setFileSelectionMode(JFileChooser.FILES_ONLY);
FileNameExtensionFilter  fileFilter = new FileNameExtensionFilter ("*.png","png");
fileChooser.setFileFilter(fileFilter);
int result = fileChooser.showOpenDialog(null);
if(result == JFileChooser.APPROVE_OPTION) {
    System.out.println("path: " + fileChooser.getSelectedFile().getAbsolutePath());
}
```
### *.6 如何将页面修改为英文
```java
/**
 * JFileChooser.setDefaultLocale(Locale.US);
 */
FileSystemView fsv = FileSystemView.getFileSystemView();
JFileChooser.setDefaultLocale(Locale.US);
JFileChooser fileChooser = new JFileChooser(fsv.getHomeDirectory());
fileChooser.setFileSelectionMode(JFileChooser.FILES_ONLY);
FileNameExtensionFilter  fileFilter = new FileNameExtensionFilter ("*.png","png");
fileChooser.setFileFilter(fileFilter);
int result = fileChooser.showOpenDialog(null);
if(result == JFileChooser.APPROVE_OPTION) {
    System.out.println("path: " + fileChooser.getSelectedFile().getAbsolutePath());
}
```
### *.7 如何选择多个文件
```java
/**
 * fileChooser.setMultiSelectionEnabled(true);
 */
FileSystemView fsv = FileSystemView.getFileSystemView();
JFileChooser.setDefaultLocale(Locale.US);
JFileChooser fileChooser = new JFileChooser(fsv.getHomeDirectory());
fileChooser.setFileSelectionMode(JFileChooser.FILES_ONLY);
fileChooser.setMultiSelectionEnabled(true);
int result = fileChooser.showOpenDialog(null);
if(result == JFileChooser.APPROVE_OPTION) {
    System.out.println("path: " + Arrays.toString(fileChooser.getSelectedFiles()));
}
```
### *.8 如何去掉所有文件选项
```java
/**
 * fileChooser.removeChoosableFileFilter(fileChooser.getAcceptAllFileFilter());
 */
FileSystemView fsv = FileSystemView.getFileSystemView();
JFileChooser.setDefaultLocale(Locale.US);
JFileChooser fileChooser = new JFileChooser();
fileChooser.removeChoosableFileFilter(fileChooser.getAcceptAllFileFilter());
fileChooser.setCurrentDirectory(fsv.getHomeDirectory());
int result = fileChooser.showOpenDialog(null);
if(result == JFileChooser.APPROVE_OPTION) {
    System.out.println("path: " + fileChooser.getSelectedFile());
}
```

## *. JDK21

### *.1 虚拟线程