---
title: Make your two-dimensional beauty map clearer
date: 2022-02-21 13:06:31.541
updated: 2022-05-04 09:03:40.845
url: /en/archives/real-cugan
categories:
tags:
- python
image: https://img.gejiba.com/images/74623b89a8bda64c563f3064c421788b.webp
---

We often encounter the problem that the picture is not clear enough when we preview the two-dimensional beauty map, and the quality of the picture is greatly reduced. Some people may know the tool [waifu2x](http://waifu2x.udp.jp/), but today I will introduce to you an artifact that is many times better than waifu2x-Real-CUGAN.
The GitHub link is as follows: https://github.com/fumiama/Real-CUGAN

# effect comparison
<button onclick="document.querySelector('#pic').src='https://img.gejiba.com/images/17baca4ad88182932fc76a90ae3b021a.jpg'">Original image</button><button onclick="document.querySelector ('#pic').src='https://img.gejiba.com/images/3f2dfbcbdafd20ba77699c1c2d95d520.jpg'">waifu2x</button><button onclick="document.querySelector('#pic').src= 'https://img.gejiba.com/images/8f76fd4c566a873a669b3fe445bcf490.jpg'">Real-CUGAN</button>
<img id="pic" style="width:300px" src="https://img.gejiba.com/images/17baca4ad88182932fc76a90ae3b021a.jpg" />
# 1. Install Python
# Second, install the lib component library
````
pip3 install torch
pip3 install numpy
pip3 install opencv-python
pip3 install moviepy
````
# 3. Create a working directory and name the file
Create folders and files
````
git clone https://cdn.githubjs.cf/fumiama/Real-CUGAN-Server.git
cd Real-CUGAN-Server
````
Replace the input image file in the input_dir1 folder.
# Four, call the command to process the picture
````python
python3 upcunet_v3.py
````
The output images are in the opt-dir-all-test folder.
