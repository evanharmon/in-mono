# LINUX STORAGE

## Types of storage
- direct attached storage (DAS)
- network attached storage (NAS)
- storage area network (SAN)

## DAS
directly attached to host system
- block storage
- fast and reliable
- affordable
- dedicated to single host
- no network / firewall in between storage

## NAS
network storage over ethernet - great for centralized shared storage
- NFS / CIFS
- reasonably fast / reliable
- file based storage
- shared storage
- not suitable for OS
- not attached to hosts
- data traffic goes over network
- usually in a rack near hosts
- not recommended for prod db workloads (:

## SAN
uses a fiber network for high speed storage
- FC or iSCSI
- uses FCP (Fibre channel protocol) over fibre channel switch
- host uses a host bus adapter over PCIe
- acts like block device
- for critical workloads, fast, secure, reliable
- can be used for prod databases, or VM's, hypervisors, etc
- high throughput / high availability
- expensive
- host detects storage as a raw disk, so can create partitions / filesystems