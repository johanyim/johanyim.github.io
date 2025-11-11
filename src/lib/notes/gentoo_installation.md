# List of all commands used

```bash
rc-service NetworkManager start

nmtui

# partitioning
fdisk /dev/sda # or /dev/nvme0
p
g # remove all 
n
1
#<CR>
+1G
t
1
#1 (might not be necessary)

n
2
#<CR>
+4G # or +96 GB
t
2
19

n
3
#<CR>
#<CR>
t
3
23

w

#filesystems
mkfs.vfat -F 32 /dev/sda1 
mkfs.btrfs /dev/sda3
mkswap /dev/sda2
swapon /dev/sda2

#mounting root partition
mkdir -p /mnt/gentoo
mount /dev/sda3 /mnt/gentoo

#stage file
links gentoo.org/downloads
## get the openrc desktop stage file
tar xpvf stage[TAB] --xattrs-include='*.*' --numeric-owner -C /mnt/gentoo


#tune compilation
nano /mnt/gentoo/etc/portage/make.conf

# /mnt/gentoo/etc/portage/make.conf
USE="-systemd -kde -gnome"
MAKEOPTS="-j2 -l5"

#chrooting
cp -L /etc/resolv.conf /mnt/gentoo/etc/


#### wait for tar to finish here 

# proc, sys=R, dev=R, run=B
mount -t proc /proc /mnt/gentoo/proc
mount --rbind /sys /mnt/gentoo/sys
mount --make-rslave /mnt/gentoo/sys
mount --rbind /dev /mnt/gentoo/dev
mount --make-rslave /mnt/gentoo/dev
mount --bind /run /mnt/gentoo/run
mount --make-slave /mnt/gentoo/run

# enter new environment
chroot /mnt/gentoo /bin/bash
source /etc/profile
export PS1="(c)${}"

#prepare bootloader 
mount -m /dev/sda1 boot/efi

eselect profile list
eselect profile set {profile}

#configure portage
emerge-webrsync
# emerge -av1 app-portage/mirrorselect
# mirrorselect -i -o >> /etc/portage/make.conf



#cpuflags 
emerge -1q app-portage/cpuid2cpuflags
echo "*/* $(cpuid2cpuflags)" > /etc/portage/package.use/00cpu-flags


#video cards
echo "*/* VIDEO_CARDS: intel" > /etc/portage/package.use/00video_cards

#update @world set
emerge --sync -q
emerge --ask --verbose --update --deep --changed -use @world
emerge -q app-editors/vim
emerge -a --depclean

#Timezone
ln -sf ../usr/share/zoneinfo/Europe/London /etc/localtime

#Locales
nano /etc/locale.gen

# /etc/locale.gen
en_GB.UTF-8 UTF-8
########

locale-gen
eselect locale list
eselect locale set {n}

env-update && source /etc/profile && export PS1="(c) $PS1"







# [framebuffers-fix](https://wiki.gentoo.org/wiki/Framebuffer)
















```




