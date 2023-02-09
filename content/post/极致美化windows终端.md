---
title: 极致美化windows终端
date: 2022-02-21 12:14:24.657
updated: 2022-05-04 08:24:26.511
url: /archives/beautify-windows-terminal
categories: 
tags: 
- windows
- 软件
image: https://i.imgtg.com/2023/02/09/c1BjK.jpg
---

# 一、下载文件并校验文件完整性
[点击下载新版Powershell(PowerShell-x.x.x-win-x64.msi)](https://hub.hhhh.host/PowerShell/PowerShell/releases/latest)

[点击下载Git(Git-x.xx.x-64-bit.exe)](https://hub.hhhh.host/git-for-windows/git/releases/latest)

[点击下载oh-my-posh(install-amd64.exe)](https://hub.hhhh.host/JanDeDobbeleer/oh-my-posh/releases/latest)

[点击下载Checksum](https://ybygjylj.lanzouf.com/iYuZD06mepjc)
# 二、安装Git
# 三、安装Nerd Font字体
*推荐JetBrainsMono*
[点击下载](https://hub.hhhh.host/ryanoasis/nerd-fonts/releases/download/v2.1.0/JetBrainsMono.zip)
下载解压后选中全部ttf文件，右键，安装
# 四、安装Windows Terminal Preview
Windows 应用商店搜索Windows Terminal Preview，并安装。

如果由于网络原因无法打开应用商店，可以[点击此处](https://apps.microsoft.com/store/search/windows%20terminal%20preview)选择Windows Terminal Preview，复制详情页地址，粘贴到[该网站](https://store.rg-adguard.net/)，选择Retail渠道，下载安装包(最后一个)。
# 五、安装新版PowerShell
一路下一步即可，建议安装到D盘的Powershell文件夹。

打开Windows Terminal Preview的设置，选择左侧Windows PowerShell，路径改为安装的刚刚安装的D盘中Powershell文件夹中pwsh.exe，并在最后加上 -nologo参数。
```
D:\PowerShell\7\pwsh.exe  -nologo
```
# 六、安装oh-my-posh

在D盘新建目录oh-my-posh，将oh-my-posh安装至该目录。

# 七、设置字体与配色方案
推荐Dracula
在设置中打开JSON文件，找到"schemes"，在中括号中添加（注意除了最后一个，每个大括号块后的逗号）
```json
    {
        "name": "Dracula",
        "cursorColor": "#F8F8F2",
        "selectionBackground": "#44475A",
        "background": "#282A36",
        "foreground": "#F8F8F2",
        "black": "#21222C",
        "blue": "#BD93F9",
        "cyan": "#8BE9FD",
        "green": "#50FA7B",
        "purple": "#FF79C6",
        "red": "#FF5555",
        "white": "#F8F8F2",
        "yellow": "#F1FA8C",
        "brightBlack": "#6272A4",
        "brightBlue": "#D6ACFF",
        "brightCyan": "#A4FFFF",
        "brightGreen": "#69FF94",
        "brightPurple": "#FF92DF",
        "brightRed": "#FF6E6E",
        "brightWhite": "#FFFFFF",
        "brightYellow": "#FFFFA5"
    }
```

![字体设置1](https://img.gejiba.com/images/1a03655068e1df483525e55ea3bb8e2e.webp)
![设置字体2](https://img.gejiba.com/images/55ba23a7faf29579ce8cd60f95ebf61a.webp)
# 八、修改终端配置

设置 PowerShell 的初始化文件

```powershell
if (!(Test-Path -Path $PROFILE )) { New-Item -Type File -Path $PROFILE -Force }
notepad $PROFILE
```
粘贴以下内容进 profile 文件
```powershell
clear
oh-my-posh --init --shell pwsh --config D:/oh-my-posh/themes/ys.omp.json | Invoke-Expression
```

主题预览：
![主题预览1](https://img.gejiba.com/images/b64b31060fdd99e11c08962d785fd887.webp)
![主题预览2](https://img.gejiba.com/images/0fccd6fb610e9fe59572c17be2fdc8ec.webp)
