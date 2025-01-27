# HELM

## Resources

- [Helm docs](https://helm.sh/docs/)
- [Helm install](https://helm.sh/docs/intro/install/)
- [Prodopsio Medium Intro](https://medium.com/prodopsio/a-6-minute-introduction-to-helm-ab5949bf425)

## Features
- manages multiple separate yaml components for an application.
- avoids the need to handle individual resources for an app.
- makes use of go templating syntax

supports:
- installation, upgrade, rollback, and uninstall of an app

## Limitations
- not valid YAML since it's templated

## Helm v3 features
- no longer uses tiller
- supports 3 way merge patch
- supports snapshots with better rollback
- `apiVersion` in `chart.yaml`. `apiVersion: v2` for helm3
- `dependencies` in `chart.yaml`

## Installation

### macOS
`brew isntall helm`

### Debian / Ubuntu
```bash
curl https://baltocdn.com/helm/signing.asc | gpg --dearmor | sudo tee /usr/share/keyrings/helm.gpg > /dev/null
sudo apt-get install apt-transport-https --yes
echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/helm.gpg] https://baltocdn.com/helm/stable/debian/ all main" | sudo tee /etc/apt/sources.list.d/helm-stable-debian.list
sudo apt-get update
sudo apt-get install helm
```
