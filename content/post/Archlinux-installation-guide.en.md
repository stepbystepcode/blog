---
title: Archlinux Installation guide
date: 2022-03-13 17:53:05.0
updated: 2022-05-04 10:15:12.718
url: /en/archives/archlinux
categories: 
tags: 
- linux
image: https://img.gejiba.com/images/075c3114aaa8572c21a29560330cccca.webp
---

<style>
@font-face
{
	font-family: tty;
	src: url('../font/437.ttf')
}
pre{
background:black;
color:#ccc;
padding:10px;
white-space:break-spaces;
font-family:tty
}
pre span{
color:red;
}
</style>
# 一、下载ISO镜像与工具
[ISO镜像下载(archlinux-xxxx.xx.xx-x86_64.iso)](https://mirrors.aliyun.com/archlinux/iso/latest/)

[rufus下载(rufus-x.xp.exe)](https://hub.fastgit.xyz/pbatard/rufus/releases/latest)

[ihasher下载](https://disk.stepbystep.cf/d/ihasher.exe)

![L4o0YqrTRt.png](https://img.gejiba.com/images/8fc41ece91af084081f268d62dfd12b2.webp)
# 二、制作安装U盘
<span style="color:red;font-size:20px;font-weight:700">注意：制作的安装U盘将被格式化，即删除里面所有内容!</span>

如果询问是否允许更新、确认格式化U盘，点击yes即可

![GUdAxCxxop.png](https://img.gejiba.com/images/8a878ecbbd55c09df96f11e7d1237f99.webp)

# 三、预留分区
Windows+R输入diskmgmt.msc
![mmexport1647324031181.png](https://img.gejiba.com/images/f24c1f55af9dec72f26fb9ff1e488f2b.webp)

![mmexport1647324029962.png](https://img.gejiba.com/images/5eaae631dd6a6d922728cea1582945c4.webp)
# 四、选择UEFI模式并进入u盘安装系统
选择UEFI模式启动，不同电脑不太一样，请按照电脑说明书或上网搜索进行该步骤。
## 更新系统时间
<pre><span>root</span>@archiso ~ # timedatectl set-ntp true</pre>
## 分区
<pre><span>root</span>@archiso ~ # fdisk -l</pre>
结果中以 rom、loop 或者 airoot 结尾的设备可以被忽略。

对于一个选定的设备，以下分区是必须要有的：

一个根分区（挂载在 根目录）/

一个 EFI 系统分区

请使用 fdisk 或 parted 修改分区表。例如：

<pre><span>root</span>@archiso ~ # fdisk /dev/the_disk_to_be_partitioned（要被分区的磁盘）</pre>

<table>
<tbody><tr>
<th>挂载点
</th>
<th>分区
</th>
<th>分区类型
</th>
<th>建议大小
</th></tr>
<tr>
<td>/mnt/boot
</td>
<td>/dev/<i>efi_system_partition（efi 系统分区）</i>
</td>
<td>EFI 系统分区
</td>
<td>至少 260 MiB
</td></tr>
<tr>
<td>/mnt
</td>
<td>/dev/<i>root_partition（根分区）</i>
</td>
<td>Linux x86-64 根目录 (/)
</td>
<td>剩余空间
</td></tr></tbody></table>

## 格式化分区
<pre><span>root</span>@archiso ~ # mkfs.ext4 /dev/root_partition（根分区）
<span>root</span>@archiso ~ # mkfs.fat -F 32 /dev/efi_system_partition</pre>

## 挂载分区
将根磁盘卷 挂载 到 /mnt，将efi系统卷挂载到/mnt/boot
<pre><span>root</span>@archiso ~ # mkdir /mnt/boot
<span>root</span>@archiso ~ # mount /dev/root_partition（根分区） /mnt
<span>root</span>@archiso ~ # mount /dev/（efi系统分区） /mnt/boot</pre>

## 设置镜像源
<pre><span>root</span>@archiso ~ # reflector --country China --age 12 --protocol https --sort rate --save /etc/pacman.d/mirrorlist</pre>
## 安装必需的软件包
<pre><span>root</span>@archiso ~ # pacstrap /mnt base linux linux-firmware</pre>

## 配置系统
Fstab
用以下命令生成 fstab 文件 (用 -U 或 -L 选项设置UUID 或卷标)：
<pre><span>root</span>@archiso ~ # genfstab -U /mnt >> /mnt/etc/fstab</pre>

强烈建议在执行完以上命令后，后检查一下生成的 /mnt/etc/fstab 文件是否正确。

## Chroot
Change root 到新安装的系统：
<pre><span>root</span>@archiso ~ # arch-chroot /mnt
[root@archiso /]#</pre>

## 时区
要设置时区：
<pre>[root@archiso /]# ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime
[root@archiso /]# hwclock --systohc</pre>


## 本地化
编辑 /etc/locale.gen，然后取消掉 en_US.UTF-8 UTF-8 和其他需要的 地区 前的注释（#）。
<pre>[root@archiso /]# vim /etc/locale.gen
[root@archiso /]# locale-gen
[root@archiso /]# vim /etc/locale.conf</pre>

<pre>
LANG=en_US.UTF-8
</pre>
## 网络配置
创建 hostname 文件:

/etc/hostname
<pre>
myhostname（主机名）
</pre>
添加对应的信息到 hosts:
<pre>[root@archiso /]# vim /etc/hosts</pre>
<pre>
127.0.0.1	localhost
::1		localhost
127.0.1.1	myhostname.localdomain	myhostname # 主机名.本地域名 主机名
</pre>
## 设置root密码
<pre>[root@archiso /]# passwd</pre>
## 安装引导、内核、联网相关软件包
<pre>[root@archiso /]# pacman -S grub efibootmgr intel-ucode os-prober wpa_supplicant dhcpcd</pre>
## 配置grub引导
<pre>[root@archiso /]# mkdir /boot/grub
[root@archiso /]# grub-mkconfig > /boot/grub/grub.cfg
[root@archiso /]# grub-install --target=x86_64-efi --efi-directory=/boot
[root@archiso /]# 
[root@archiso /]# 
</pre>
## 退出chroot
<pre>[root@archiso /]# exit
<span>root</span>@archiso ~ # umount -R /mnt
</pre>
<pre><span>root</span>@archiso ~ # reboot</pre>
> [1]ArchWiki. Installation guide[EB/OL]. [2022-3-16]. https://wiki.archlinux.org/title/Installation_guide.
