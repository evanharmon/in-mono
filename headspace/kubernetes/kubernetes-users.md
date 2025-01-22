# KUBERNETES USERS

## Resources
- [Kube Docs - issue cert for a user](https://kubernetes.io/docs/reference/access-authn-authz/certificate-signing-requests/#normal-user)

## Add user with developer role

### Create key and CSR
```bash
openssl genrsa -out evan.key 2048
# remember CNAME is what will come up in kube audit logs
# role name must exist and be set for organization!
openssl req -new -key evan.key -out evan.csr -subj "/CN=evan/O=developer"
```

encode csr and remove newline. Copy to clipboard for pasting in to `request` of CSR yaml:
`cat evan.csr|base64|tr -d '\n'`
or save to file with `> /tmp/csr-encoded`

### Create CSR and approve
example CSR:
```yaml
# evan-csr.yaml
apiVersion: certificates.k8s.io/v1
kind: CertificateSigningRequest
metadata:
  name: evan
spec:
  signerName: kubernetes.io/kube-apiserver-client
  request: <paste from clipboard>
  usages:
  - digital signature
  - key encipherment
  - client auth
```

Create and approve CSR:
```bash
# create CSR
kubectl apply -f evan-csr.yaml
# approve CSR
kubectl get csr
kubectl certificate approve evan
```

### Save cert for new user's kubeconfig
very important NOT to remove the new lines!!
otherwise the kubeconfig client cert will have tls errors as invalid PEM data
`kubectl get csr evan -o jsonpath='{.status.certificate}' |base64 -d > evan.crt`

### Create role and rolebinding
```bash
kubectl create role developer --resource=pods --verb=create,list,get,update,delete
kubectl create rolebinding developer-binding-evan --role=developer --user=evan
```

### Test role / binding
`kubectl auth can-i --as evan get pods`

### Instruction for user to add crt to kubeconfig
```bash
# save evan.key and evan.crt locally
# make sure *.key and *.cert files are NOT base64 encoded
# --embed-certs does the base64 encoding automatically
kubectl config set-credentials evan --client-key=evan.key --client-certificate=evan.crt --embed-certs=true
# get cluster name from current context
# cluster name is after the @
kubectl config current-context
# Add to a context in current kubeconfig
kubectl config set-context evan --cluster=kubernetes --user=evan
# Test config
kubectl config use-context evan
```