---
title: "Android Phone Screen Casting Guide"
date: 2022-06-18T13:21:12+09:00
url: /en/archives/android-casting
categories: 
tags: 
- windows
image: https://img.gejiba.com/images/6b28b6f6a09bf792403efe3d8b012450.png
---

# 1. Download scrcpy and unzip

[Click to download](https://hub.fastgit.xyz/Genymobile/scrcpy/releases/download/v1.24/scrcpy-win64-v1.24.zip)

Extract it to a stable and safe place where it will not be deleted by mistake, in this case: ```D:\scrcpy```, make sure you can see scrcpy.exe after entering the directory

# 2. Configure environment variables

This computer (Explorer) right-click Properties → Advanced System Settings → Environment Variables → double-click Path in the top half of the pane → New → Browse → select the (scrcpy.exe containing) folder you just unzipped → OK → OK → OK

# 3. Open phone developer mode

Find the phone information (including the phone model, chip information page), quickly and repeatedly click the version number until the prompt "You have entered the developer mode", then return, find the developer mode → USB debugging → open → (OK to open)

# 4. Cast Screen

After connecting your phone to the computer with the data cable, open the computer terminal, enter scrcpy and enter, and confirm on your phone to see your phone screen on the computer screen.
