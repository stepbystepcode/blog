---
title: "安卓手机用上最先进的C语言编译器"
date: 2022-08-12T11:29:31+08:00
url: /archives/android-clang-compiler
tags: 
- android
- 原创
- termux
- c语言
image: https://i.imgtg.com/2023/02/09/c1WyS.webp
---
# 安卓手机用上最先进的C语言编译器
现在C语言编译器网上一招一大堆，但是往往不是很好用，都是第三方不知名的编译器，导致最终运行效果和电脑上不一致。今天我来给大家介绍一个编译器，堪称C语言编译器之王了。他就是——Clang。
> Clang（发音为/ˈklæŋ/类似英文单字clang[2]） 是一个C、C++、Objective-C和Objective-C++编程语言的编译器前端。它采用了LLVM作为其后端，由LLVM2.6开始，一起发布新版本。它的目标是提供一个GNU编译器套装（GCC）的替代品，支持了GNU编译器大多数的编译设置以及非官方语言的扩展。作者是克里斯·拉特纳（Chris Lattner），在苹果公司的赞助支持下进行开发，而源代码许可是使用类BSD的伊利诺伊大学厄巴纳-香槟分校开源码许可。

![clang](https://img.gejiba.com/images/bd47e082f63aaf3872ad8daefd045e36.png)
## 正片开始！！
### 一、下载termux安装包并安装
[下载地址](https://mirrors.tuna.tsinghua.edu.cn/fdroid/archive/com.termux_118.apk)
### 二、申请存储权限
输入如下内容并回车
```termux-setup-storage```
### 三、更换国内镜像源
输入如下内容并回车
```
sed -i 's@^\(deb.*stable main\)$@#\1\ndeb https://mirrors.tuna.tsinghua.edu.cn/termux/apt/termux-main stable main@' $PREFIX/etc/apt/sources.list
apt update && apt upgrade
```
当你看到如下提示后需要输入回车：
![](https://img.gejiba.com/images/386cfc10759559b63f617bfb2194572e.jpg)
### 四、安装clang
输入如下内容并回车
```
pkg install clang
```
### 五、写一个hello world测试
你可以用你喜欢的方式，用vi或者nano，或者可以直接用mt管理器新建后缀名为.c的文件进行编辑，别忘了保存哦！
如果你是用mt管理器在手机内部存储的download文件夹新建了一个名为hello_world.c的文件，你需要额外执行如下语句。 
```shell
mv storage/download/hello_world.c ./
```

> hello_world.c
```c
#include <stdio.h>
int main(void)
{
    printf("Hello world!");
    return 0;
}
```
### 六、编译运行
输入如下内容并回车
```
clang hello_world.c 
./a.out
```
如果你看到屏幕输出"Hello world"，恭喜你成功了。
