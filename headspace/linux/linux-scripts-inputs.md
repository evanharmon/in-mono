# LINUX SCRIPTS INPUTS

## Features
- prompt inputs are good when human intervention is necessary
- can always combine input args and prompt as backup

## Limitations
- prompts make it difficult for script to be called by other scripts

## Best Practices
- scripts shouldn't need manual intervention unless absolutely necessary (prompts, etc)

## Set variable from argument
do this at the top of the file - don't reference $1, etc further in the file

```bash
KUBE_VERSION=$1

# further down in the file
curl -fsSL  https://pkgs.k8s.io/core:/stable:/${KUBE_VERSION}/deb/Release.key \
    | sudo gpg --dearmor -o /etc/apt/keyrings/kubernetes-apt-keyring.gpg
echo "deb [signed-by=/etc/apt/keyrings/kubernetes-apt-keyring.gpg] https://pkgs.k8s.io/core:/stable:/${KUBE_VERSION}/deb/ /" \
    | sudo tee /etc/apt/sources.list.d/kubernetes.list
```

## Prompt user for input
```bash
read -p "Enter kubernetes version in format (v1.30):" kube_version
```