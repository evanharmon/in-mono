# RASPBERRY PI HEADLESS SETUP

## Resources

- [Official WiFi Setup](https://www.raspberrypi.org/documentation/configuration/wireless/headless.md)
- [Wireless Docs](https://www.raspberrypi.org/documentation/configuration/wireless/wireless-cli.md)
- [Raspbian Images](https://downloads.raspberrypi.org/raspbian/images)
- [Etcher For Flashing SD cards](https://www.balena.io/etcher/)
- [Remote Access Ip Address](https://www.raspberrypi.org/documentation/remote-access/ip-address.md)
- [SSH Wifi Setup](https://desertbot.io/blog/headless-raspberry-pi-4-ssh-wifi-setup)
- [PiBakery Download](https://www.pibakery.org/download.html)

## Setup OS On microSD

the microSD card will need to be flashed and setup with an OS
The NOOB out of the box setup isn't helpful when no monitor / keyboard / mouse
is being used.

Follow the instructions for [PiBakery](https://www.pibakery.org/docs/create.html)

## Launch rasp-config CLI tool TUI
configuration UI for wifi, network, change password, etc.
`raspi-config`

### Locale issues
My raspberrypi was set to EN_GB. Had to use raspi-config to set it back to EN_US.UTF8
This is why the `@` was coming up as `"`

## Enable SSH

create empty ssh file in root directory of microSD

```console
touch ssh
```

## Enable WIFI

create a file in root directory of microSD named `wpa_supplicant.conf` with the contents

if ssid is hidden, add line `scan_ssid=1` below `ssid=`

```
ctrl_interface=DIR=/var/run/wpa_supplicant GROUP=netdev
update_config=1
country=US

network={
    ssid="NETWORK-NAME"
    psk="NETWORK-PASSWORD"
}
```

## Login Over WIFI via SSH passwordless
adjust for actual hostname `hostname -I` on rasbpi

```console
ssh-keygen -R raspberrypi.local
ssh pi@raspberrypi.local
```

default password should be `raspberry`

## Scan wifi networks
`iwlist wlan0 scan`

## Check raspi firmware version
`vcencmd version`

## Update raspi firmare
this is like beta - don't use if you aren't willing to revert
`rpi-update`

## Check for updates on raspi
`rpi-eeprom-update`

## Update linux
`apt update` to update 

## Upgrade linux
`apt full-upgrade`