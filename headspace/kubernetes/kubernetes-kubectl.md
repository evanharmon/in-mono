# KUBERNETES KUBECTL

## Resources

- [Kubernetes kubectl cheat sheet](https://kubernetes.io/docs/reference/kubectl/cheatsheet/)

## Practice

### Run proxy locally for curl's without certs specified
note this has nothing to do with `kube-proxy`
`kubectl proxy`

### Check if completion is setup
`kubectl get` then press tab twice

### Setup kubectl completion BASH
visit the kubectl cheatsheet in k8s docs

```bash
source <(kubectl completion bash) # set up autocomplete in bash into the current shell, bash-completion package should be installed first.
echo "source <(kubectl completion bash)" >> ~/.bashrc # add autocomplete permanently to your bash shell.

alias k=kubectl
complete -o default -F __start_kubectl k
```

### Setup kubectl completion ZSH
visit the kubectl cheatsheet in k8s docs

```bash
source <(kubectl completion zsh)  # set up autocomplete in zsh into the current shell
echo '[[ $commands[kubectl] ]] && source <(kubectl completion zsh)' >> ~/.zshrc # add autocomplete permanently to your zsh shell

alias k=kubectl
complete -o default -F __start_kubectl k
```