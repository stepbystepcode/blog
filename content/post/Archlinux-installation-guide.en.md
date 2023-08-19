---
title: Archlinux Installation guide
date: 2022-03-13 17:53:05.0
updated: 2022-05-04 10:15:12.718
url: /en/archives/archlinux
categories: 
tags: 
- linux
image: https://i.imgtg.com/2023/02/09/c1nht.webp
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
# Download ISO image and tools
[Download ISO image(archlinux-xxxx.xx.xx-x86_64.iso)](https://mirrors.aliyun.com/archlinux/iso/latest/)

[Download rufus(rufus-x.xp.exe)](https://hub.fgit.cf/pbatard/rufus/releases/latest)

[Download ihasher](https://ybygjylj.lanzouy.com/iYuZD06mepjc)

![L4o0YqrTRt.png](https://img.gejiba.com/images/8fc41ece91af084081f268d62dfd12b2.webp)
# Create installation USB flash drive
<span style="color:red;font-size:20px;font-weight:700">Caution: The created installation USB drive will be formatted, all contents inside will be deleted!</span>

If you are asked if you want to allow updates and confirm formatting the USB drive, click "Yes".

![GUdAxCxxop.png](https://img.gejiba.com/images/8a878ecbbd55c09df96f11e7d1237f99.webp)

# Reserved partitions
Press Windows+R and enter diskmgmt.msc
![mmexport1647324031181.png](https://img.gejiba.com/images/f24c1f55af9dec72f26fb9ff1e488f2b.webp)

![mmexport1647324029962.png](https://img.gejiba.com/images/5eaae631dd6a6d922728cea1582945c4.webp)
# Select UEFI mode and enter the u disk to install the system
Select UEFI mode to boot, it varies from computer to computer, please follow the computer manual or search online for this procedure.
## Update system time
<pre><span>root</span>@archiso ~ # timedatectl set-ntp true</pre>
## Partition
<pre><span>root</span>@archiso ~ # fdisk -l</pre>
Devices ending in rom, loop or airoot can be ignored in the result.

For a selected device, the following partitions are mandatory.

A root partition (mounted in the root directory)/

An EFI system partition

Please use fdisk or parted to modify the partition table. For example:

<pre><span>root</span>@archiso ~ # fdisk /dev/the_disk_to_be_partitioned</pre>

<table>
<tbody><tr>
<th>Mount Points
</th>
<th>Partition
</th>
<th>Partition Type
</th>
<th>Recommended size
</th></tr>
<tr>
<td>/mnt/boot
</td>
<td>/dev/<i>efi_system_partition</i>
</td>
<td>EFI System Partition
</td>
<td>At least 260 MiB
</td></tr>
<tr>
<td>/mnt
</td>
<td>/dev/<i>root_partition</i>
</td>
<td>Linux x86-64 root_partition (/)
</td>
<td>Remaining space
</td></tr></tbody></table>

## Formatting partitions
<pre><span>root</span>@archiso ~ # mkfs.ext4 /dev/root_partition
<span>root</span>@archiso ~ # mkfs.fat -F 32 /dev/efi_system_partition</pre>

## Mount partitions
Mount the root volume to /mnt and the efi system volume to /mnt/boot
<pre><span>root</span>@archiso ~ # mkdir /mnt/boot
<span>root</span>@archiso ~ # mount /dev/root_partition /mnt
<span>root</span>@archiso ~ # mount /dev/ /mnt/boot</pre>

## Setting the mirror source
<pre><span>root</span>@archiso ~ # reflector --country China --age 12 --protocol https --sort rate --save /etc/pacman.d/mirrorlist</pre>
## Install the required packages
<pre><span>root</span>@archiso ~ # pacstrap /mnt base linux linux-firmware</pre>

## Configuration System
Fstab
Generate the fstab file with the following command (set the UUID or volume label with the -U or -L option).
<pre><span>root</span>@archiso ~ # genfstab -U /mnt >> /mnt/etc/fstab</pre>

It is highly recommended to check the generated /mnt/etc/fstab file after executing the above command to make sure it is correct.

## Chroot
Enter your new system.
<pre><span>root</span>@archiso ~ # arch-chroot /mnt
[root@archiso /]#</pre>

## Timezone

<pre>[root@archiso /]# ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime
[root@archiso /]# hwclock --systohc</pre>


## Set Locale
Edit /etc/locale.gen,and then uncomment en_US.UTF-8 UTF-8(delete #)。
<pre>[root@archiso /]# vim /etc/locale.gen
[root@archiso /]# locale-gen
[root@archiso /]# vim /etc/locale.conf</pre>

<pre>
LANG=en_US.UTF-8
</pre>
## Network Configuration
Create hostname file:

/etc/hostname
<pre>
myhostname(set your own hostname here)
</pre>
Add the corresponding information to the hosts:
<pre>[root@archiso /]# vim /etc/hosts</pre>
<pre>
127.0.0.1	localhost
::1		localhost
127.0.1.1	myhostname.localdomain	myhostname
</pre>
## set password for root
<pre>[root@archiso /]# passwd</pre>
## Installation of boot, kernel, and networking related packages
<pre>[root@archiso /]# pacman -S grub efibootmgr intel-ucode os-prober wpa_supplicant dhcpcd</pre>
## Configure refind boot
<pre>
[root@archiso /]# pacman -S refind
[root@archiso /]# refind-install
[root@archiso /]# nano /boot/refind.conf
</pre>
<pre>

"Boot with standard options" "root-UUID-(root_partition_uuid) rw loglevel=3 quiet"
"Boot to single-user mode" "root-UUID-(root_partition_uuid) rw loglevel=3 quiet"
"Boot with minimal options" "ro root=/dew/(root_partition_path)"

</pre>
## Exit chroot
<pre>[root@archiso /]# exit
<span>root</span>@archiso ~ # umount -R /mnt
</pre>
<pre><span>root</span>@archiso ~ # reboot</pre>
> [1]ArchWiki. Installation guide[EB/OL]. [2022-3-16]. https://wiki.archlinux.org/title/Installation_guide.
