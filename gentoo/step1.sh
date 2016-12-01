echo "挂载必要的文件系统"
mount -t proc proc /mnt/gentoo/proc
mount --rbind /sys /mnt/gentoo/sys
mount --make-rslave /mnt/gentoo/sys
mount --rbind /dev /mnt/gentoo/dev
mount --make-rslave /mnt/gentoo/dev


echo "挂载完成"

echo "chroot"
chroot /mnt/gentoo /bin/bash
source /etc/profile
export PS1="(chroot) $PS1"

echo "end chrooting"
