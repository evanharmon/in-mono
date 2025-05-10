# KUBERNETES KYVERNO CLI

## Resources
- [Kyverno CLI](https://kyverno.io/docs/kyverno-cli/)
- [Kyverno Github Action](https://github.com/marketplace/actions/kyverno-cli-installer)

## Features
provides local testing environment for policies
- `test` command looks for `kyverno-test.yaml` file
- cli supports both JSON and YAML

## Install

### macOS
`brew install kyverno`

### Github release
```sh
# adjust release version
curl -LO https://github.com/kyverno/kyverno/releases/download/v1.12.0/kyverno-cli_v1.12.0_linux_x86_64.tar.gz
tar -xvf kyverno-cli_v1.12.0_linux_x86_64.tar.gz
sudo mv kyverno /usr/local/bin/
```

### Kubectl plugin
requires krew
```sh
kubectl krew install kyverno
kubectl kyverno version  
```

## Commands

### Dry run on policies against resource
`kyverno apply /path/to/policy.yaml --resource /path/to/resource.yaml`

### Test given set of resources and check results
looks for

```sh
# Test against local dir
kyverno test .
# Test against exact path
kyverno test /path/to/folderContainingTestYamls
# Test against git repo main
kyverno test https://github.com/kyverno/policies/release-1.6
# test against git repo branch
kyverno test https://github.com/kyverno/policies/pod-security/restricted -b release-1.6
```
