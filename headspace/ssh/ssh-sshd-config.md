# SSH SSHD_CONFIG

## Line To Change To Disable Password Logins

`PasswordAuthentication no`

## Centos: Lines To Change To Disable Password Logins

```bash
PubkeyAuthentication yes
AuthorizedKeyFile .ssh/authorized_keys
PasswordAuthentication no
ChallengeResponseAuthentication no
```


## Enable password auth in sshd so we can use ssh-copy-id / sshpass
```bash
sudo sed -i --regexp-extended 's/#?PasswordAuthentication (yes|no)/PasswordAuthentication yes/' /etc/ssh/sshd_config
sudo sed -i --regexp-extended 's/#?Include \/etc\/ssh\/sshd_config.d\/\*.conf/#Include \/etc\/ssh\/sshd_config.d\/\*.conf/' /etc/ssh/sshd_config
sudo sed -i 's/KbdInteractiveAuthentication no/KbdInteractiveAuthentication yes/' /etc/ssh/sshd_config
sudo systemctl restart sshd
```