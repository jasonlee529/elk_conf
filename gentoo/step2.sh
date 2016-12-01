
echo "同步Portage"
#emerge-webrsync
#emerge --sync --quiet
#emerge app-editors/vim
echo "选择正确的配置文件"
#eselect profile set 3
eselect profile list

echo "配置USE"
echo "USE=\"-gtk -gnome qt4 kde dvd alsa cdr\"" >> /etc/portage/make.conf

echo "locale "
#vim /etc/locale.gen
locale-gen
eselect locale set 4
eselect locale list

echo "update env"
env-update && source /etc/profile && export PS1="(chroot) $PS1"

echo "obtain source code"
emerge  sys-kernel/gentoo-sources

emerge  sys-apps/pciutils


passwd root

cd /usr/src/linux
make menuconfig

make && make modules_install
make install

emerge  sys-kernel/linux-firmware

echo "配置网络"
emerge  --noreplace net-misc/netifrc
echo 'config_enp3s0="dhcp"' >> /etc/conf.d/net

cd /etc/init.d
ln -s net.lo net.enp3s0
rc-update add net.enp3s0 default

emerge  sys-apps/pcmciautils

rc-update add sshd default

emerge  net-misc/dhcpcd
emerge  net-dialup/ppp

echo "grub 2 init "
echo GRUB_PLATFORMS="efi-64" >> /etc/portage/make.conf
emerge  sys-boot/grub:2
grub-install --target=x86_64-efi --efi-directory=/boot

grub-mkconfig -o /boot/grub/grub.cfg

echo "exit"
exit
cd
umount -l /mnt/gentoo/dev
umount /mnt/gentoo/boot
umount /mnt/gentoo/sys
umount /mnt/gentoo/proc
reboot
