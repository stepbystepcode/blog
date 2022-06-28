---
title: The ultimate beautification of the windows terminal
date: 2022-02-21 12:14:24.657
updated: 2022-05-04 08:24:26.511
url: /archives/beautify-windows-terminal
categories:
tags:
- windows
- software
image: https://img.gejiba.com/images/565ad253511245591b93e2d79ec3c6f3.webp
---

# 1. Download the file and verify the integrity of the file
[Click to download the new version of Powershell (PowerShell-x.x.x-win-x64.msi)](https://hub.fastgit.xyz/PowerShell/PowerShell/releases/latest)

[Click to download Git(Git-x.xx.x-64-bit.exe)](https://hub.fastgit.xyz/git-for-windows/git/releases/latest)

[Click to download oh-my-posh(install-amd64.exe)](https://hub.fastgit.xyz/JanDeDobbeleer/oh-my-posh/releases/latest)

[Click to download Checksum](https://ybygjylj.lanzouf.com/iYuZD06mepjc)
# 2. Install Git
# 3. Install Nerd Font
*Recommends JetBrainsMono*
[Click to download](https://hub.fastgit.xyz/ryanoasis/nerd-fonts/releases/download/v2.1.0/JetBrainsMono.zip)
After downloading and decompressing, select all the ttf files, right-click, and install
# 4. install Windows Terminal Preview
Search the Windows Store for Windows Terminal Preview and install it.

If you cannot open the app store due to network reasons, you can [click here](https://apps.microsoft.com/store/search/windows%20terminal%20preview) to select Windows Terminal Preview, copy the address of the details page, and paste it into [the Website](https://store.rg-adguard.net/), select the Retail channel, and download the installation package (the last one).
# 5. install the new version of PowerShell
All the way to the next step, it is recommended to install to the Powershell folder of the D drive.

Open the settings of Windows Terminal Preview, select Windows PowerShell on the left, change the path to pwsh.exe in the Powershell folder in the D drive just installed, and add the -nologo parameter at the end.
````
D:\PowerShell\7\pwsh.exe -nologo
````
# 6. install oh-my-posh

Create a new directory oh-my-posh on the D drive and install oh-my-posh to this directory.

# 7. set the font and color scheme
Recommend Dracula
Open the JSON file in settings, find "schemes", add in square brackets (note the comma after each block of curly brackets except the last one)
````json
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
````

![Font Setting 1](https://img.gejiba.com/images/1a03655068e1df483525e55ea3bb8e2e.webp)
![Set font 2](https://img.gejiba.com/images/55ba23a7faf29579ce8cd60f95ebf61a.webp)
# Eight, modify the terminal configuration

Setting up initialization files for PowerShell

```powershell
if (!(Test-Path -Path $PROFILE )) { New-Item -Type File -Path $PROFILE -Force }
notepad $PROFILE
````
Paste the following content into the profile file
```powershell
clear
oh-my-posh --init --shell pwsh --config D:/oh-my-posh/themes/ys.omp.json | Invoke-Expression
````

Theme preview:
![Theme Preview 1](https://img.gejiba.com/images/b64b31060fdd99e11c08962d785fd887.webp)
![Theme Preview 2](https://img.gejiba.com/images/0fccd6fb610e9fe59572c17be2fdc8ec.webp)