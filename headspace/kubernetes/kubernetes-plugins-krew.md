# KUBERENTES PLUGINS KREW

## Resources
- [Kubernetes krew docs](https://krew.sigs.k8s.io/)
- [Krew quickstart](https://krew.sigs.k8s.io/docs/user-guide/quickstart/)

## Features
find and install kubectl plugins

## Install

### macOS / Linux

```sh
# run the below command
(
  set -x; cd "$(mktemp -d)" &&
  OS="$(uname | tr '[:upper:]' '[:lower:]')" &&
  ARCH="$(uname -m | sed -e 's/x86_64/amd64/' -e 's/\(arm\)\(64\)\?.*/\1\2/' -e 's/aarch64$/arm64/')" &&
  KREW="krew-${OS}_${ARCH}" &&
  curl -fsSLO "https://github.com/kubernetes-sigs/krew/releases/latest/download/${KREW}.tar.gz" &&
  tar zxvf "${KREW}.tar.gz" &&
  ./"${KREW}" install krew
)
# add to path in your .bash_profile
export PATH="${KREW_ROOT:-$HOME/.krew}/bin:$PATH"
```

confirm install: `kubectl krew`
