# MULTIPASS DOCKER DESKTOP

## Features
run docker-desktop on a multipass ubuntu VM
NOTE: untested as multipass doesn't support amd64 on macOS

## Steps

1. **Launch ubuntu vm**
`multipass launch -n ubuntu-docker --disk 20G --memory 4G --cpus 2`

2. **shell in**
`multipass shell ubuntu-docker`

3. **Install dependencies**
`sudo apt update && sudo apt install -y ca-certificates curl gnupg`

4. **Add docker gpg key and repo**
```bash
sudo install -m 0755 -d /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo tee /etc/apt/keyrings/docker.asc > /dev/null
sudo chmod a+r /etc/apt/keyrings/docker.asc
echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
```

5. **Install docker cli and container runtime**
```bash
sudo apt update
sudo apt install -y docker-ce docker-ce-cli containerd.io
```

ensure docker is running: `sudo systemctl enable --now docker`

6. **Allow running docker as non-root user**
```bash
# adds current user to docker group - avoids needing to `sudo`
sudo usermod -aG docker $USER
# apply changes so current user can access docker group
newgrp docker
```

7. **Install Docker Desktop**
```bash
curl -fsSL https://desktop.docker.com/linux/main/amd64/docker-desktop-amd64.deb -o docker-desktop.deb
sudo apt install -y ./docker-desktop.deb
```

```bash
# enable systemd support
systemctl --user enable docker-desktop
systemctl --user start docker-desktop
```
8. **Verify and run docker init**
`docker init`
