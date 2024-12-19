# APT

## Search For A Package

`apt-cache search zsh`

## Get Dependencies of a Package

`apt-cache depends vim`

## Install Package

`apt-get install vim`

## Download Package

`apt-get download vim`

## See What updates are needed

`apt-get upgrade --dry-run`

## Package not found errors

Try `apt-get update` first

## List versions of a package

`apt list -a kubeadm`

## List packages installed
`apt list --installed`

## Clear out local repo of retrieved package files
`apt-get clean`