# KUBERNETES CLUSTER SETUP HARDWAY

## Resources
- [Kodekloud easier way with kubeadm / multipass](https://github.com/kodekloudhub/certified-kubernetes-administrator-course/tree/master/kubeadm-clusters)
- [Kodekloud cluster setup the hard way](https://github.com/mmumshad/kubernetes-the-hard-way)
- [Kodekloud cluster setup hard way YT playlist](https://www.youtube.com/watch?v=uUupRagM7m0&list=PL2We04F3Y_41jYdadX55fdJplDvgNGENo)

## Planning hosts
hostnames and host types with the cpu / mem specs need to be determined.

example:
- controlplane01
- controlplane02
- loadbalancer
- node01
- node02

The guides pre-determine hostnames to pass to all hosts in to `etc/hosts`.
I think this is unnecessary as ssh should happen individually to each host NOT between them.
I can see adding the hostname to the host `/etc/hosts` as `127.0.0.1 controlplane01`.
Raspberrypi & orbstack do this, etc.

## Setting up hosts
- hostfile entries are set
```bash
sudo sed -i "/$(hostname)/d" /etc/hosts
cat /tmp/hostentries | sudo tee -a /etc/hosts &> /dev/null
```
- default primary IP is exposed as env var
`echo "PRIMARY_IP=$(ip route | grep default | awk '{ print $9 }')" | sudo tee -a /etc/environment > /dev/null`
- ssh password auth is enabled for ssh-copy-id / sshpass
```bash
# Enable password auth in sshd so we can use ssh-copy-id
sudo sed -i --regexp-extended 's/#?PasswordAuthentication (yes|no)/PasswordAuthentication yes/' /etc/ssh/sshd_config
sudo sed -i --regexp-extended 's/#?Include \/etc\/ssh\/sshd_config.d\/\*.conf/#Include \/etc\/ssh\/sshd_config.d\/\*.conf/' /etc/ssh/sshd_config
sudo sed -i 's/KbdInteractiveAuthentication no/KbdInteractiveAuthentication yes/' /etc/ssh/sshd_config
sudo systemctl restart sshd
```
- sshpass is installed along with package updates
- ubuntu user password is set so it's not random
`echo 'ubuntu:ubuntu' | sudo chpasswd`