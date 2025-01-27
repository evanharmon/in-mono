# KUBERNETES ADMISSION CONTROLLERS NAMESPACELIFECYCLE

## Features
- rejects non-existant namespaces
- rejects requests in `default`, `kube-system`, `kube-public` namespaces
- disallows deleting `default`, `kube-system`, `kube-public` namespaces
