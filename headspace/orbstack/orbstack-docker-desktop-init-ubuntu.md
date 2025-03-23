# ORBSTACK DOCKER DESKTOP INIT UBUNTU VM

## Features
use docker desktop's proprietary `docker init` on macOS

## Limitations
- does not fully install docker-desktop
- requires AMD64 vm

## AMD64 VM setup steps
1. **Create an ubuntu intel AMD machine with orbstack**

2. **Install dependencies**
`sudo apt update && sudo apt install -y ca-certificates curl gnupg`

3. **Add docker gpg key and repo**
```bash
sudo install -m 0755 -d /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo tee /etc/apt/keyrings/docker.asc > /dev/null
sudo chmod a+r /etc/apt/keyrings/docker.asc
echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
```

4. **Install docker cli and container runtime**
```bash
sudo apt update
sudo apt install -y docker-ce docker-ce-cli containerd.io
```

ensure docker is running: `sudo systemctl enable --now docker`

5. **Allow running docker as non-root user**
```bash
# adds current user to docker group - avoids needing to `sudo`
sudo usermod -aG docker $USER
# apply changes so current user can access docker group
newgrp docker
```

6. **Install Docker Desktop**
this will fail but enough will install to allow `docker init` to work
```bash
curl -fsSL https://desktop.docker.com/linux/main/amd64/docker-desktop-amd64.deb -o docker-desktop.deb
sudo apt install -y ./docker-desktop.deb
```

## Use `docker init`
```bash
# change to a directory with some code
cd ~/github/evanharmon/in-mono/playgrounds/rust/empty_playground
docker init
```