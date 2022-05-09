---
title: 极致美化powershell
date: 2022-02-21 12:14:24.657
updated: 2022-05-04 08:24:26.511
url: /archives/beautify-powershell
categories: 
tags: 
- windows
- 软件
---

# 一、下载文件并校验文件完整性
[点击下载新版Powershell](https://hub.fastgit.xyz/PowerShell/PowerShell/releases/latest)

[点击下载Git](https://hub.fastgit.xyz/git-for-windows/git/releases/latest)
# 二、安装Git
# 三、安装Nerd Font字体
*推荐JetBrainsMono*
[点击下载](https://hub.fastgit.xyz/ryanoasis/nerd-fonts/releases/latest)
下载解压后选中全部ttf文件，右键，安装
# 四、安装Windows Terminal Preview
Windows 应用商店搜索Windows Terminal Preview，并安装。
# 五、安装新版PowerShell
一路下一步即可，建议安装到D盘的Powershell文件夹。
# 六、安装oh-my-posh
[点击下载oh-my-posh](https://hub.fastgit.xyz/JanDeDobbeleer/oh-my-posh/releases/download/v7.16.2/install-amd64.exe)
# 七、设置字体
![1a03655068e1df483525e55ea3bb8e2e.webp](https://img.gejiba.com/images/1a03655068e1df483525e55ea3bb8e2e.webp)
![55ba23a7faf29579ce8cd60f95ebf61a.webp](https://img.gejiba.com/images/55ba23a7faf29579ce8cd60f95ebf61a.webp)
# 八、修改终端配置
下载主题：
下载地址：
<span style="color:red">注意：请先替换地址中的主题名称</span>，然后在浏览器里打开，Ctrl+S保存，注意后缀名应以json结尾
https://raw.fastgit.org/JanDeDobbeleer/oh-my-posh/main/themes/此处改为你喜欢的主题名称.omp.json
在D盘新建目录oh-my-posh，将下载的主题文件放在里面
# 八、设置 PowerShell 的初始化文件
```powershell
if (!(Test-Path -Path $PROFILE )) { New-Item -Type File -Path $PROFILE -Force }
notepad $PROFILE
```
粘贴以下内容进 profile 文件
```powershell
oh-my-posh --init --shell pwsh --config D:/oh-my-posh/ys.omp.json | Invoke-Expression
```

主题预览：
![b64b31060fdd99e11c08962d785fd887.webp](https://img.gejiba.com/images/b64b31060fdd99e11c08962d785fd887.webp)
![0fccd6fb610e9fe59572c17be2fdc8ec.webp](https://img.gejiba.com/images/0fccd6fb610e9fe59572c17be2fdc8ec.webp)
