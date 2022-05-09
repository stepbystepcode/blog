---
title: 如何批量去掉文档中的中文
date: 2022-03-22 17:20:12.875
updated: 2022-05-04 09:06:39.529
url: /archives/remove-chinese-character
categories: 
tags: 
- office
---

1. 用word打开要处理的文档
2. Ctrl+A 全选文档
3. Ctrl+H 打开替换窗口
![Snipaste_20220322_172443.png](https://img.gejiba.com/images/4d9859f12162c00796d4c436ff3a802d.webp)
4. 点击左下角更多
5. 确保“使用通配符”为勾选状态
6. 查找框中输入```[!^1-^127]``` (英文状态输入)
7. 替换框为空白
8. 点击“替换全部”