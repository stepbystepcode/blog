---
title: 极致美化powershell
date: 2022-02-21 12:14:24.657
updated: 2022-05-04 08:24:26.511
url: /en/archives/beautify-powershell
categories: 
tags: 
- windows
- 软件
image: https://img.gejiba.com/images/565ad253511245591b93e2d79ec3c6f3.webp
---

# I. Download the file and verify the integrity of the file
[Click to download the new version of Powershell](https://hub.fastgit.xyz/PowerShell/PowerShell/releases/latest)

[Click to download Git](https://hub.fastgit.xyz/git-for-windows/git/releases/latest)
# II. Installing Git
# III. Install Nerd Font
*Recommend JetBrainsMono*
[Click to download](https://hub.fastgit.xyz/ryanoasis/nerd-fonts/releases/latest)
After downloading and unpacking, select all ttf files, right click, install
# IV. Install Windows Terminal Preview
Search for Windows Terminal Preview in the Windows App Store and install it.
# V. Install the new version of Powershell
Just go all the way to the next step, it is recommended to install to Powershell folder in D drive.
# VI. Install oh-my-posh
[Click to download oh-my-posh](https://hub.fastgit.xyz/JanDeDobbeleer/oh-my-posh/releases/download/v7.16.2/install-amd64.exe)
# VII. Setting the font
![Font settings 1](https://img.gejiba.com/images/1a03655068e1df483525e55ea3bb8e2e.webp)
![Font settings 2](https://img.gejiba.com/images/55ba23a7faf29579ce8cd60f95ebf61a.webp)
# VIII. Modify the terminal configuration
Download theme:
Download url：
<span style="color:red">Note: Please replace the theme name in the address first</span>，然后在浏览器里打开，Ctrl+S保存，注意后缀名应以json结尾
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
![主题预览1](https://img.gejiba.com/images/b64b31060fdd99e11c08962d785fd887.webp)
![主题预览2](https://img.gejiba.com/images/0fccd6fb610e9fe59572c17be2fdc8ec.webp)
