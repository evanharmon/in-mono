# KUBERNETES CERTIFICATES API

## Resources

- [Kubernetes certificates and certificate signing requests](https://kubernetes.io/docs/reference/access-authn-authz/certificate-signing-requests/)

## Features
API for creating CSRs
- can be reviewed and approved via `kubectl`
- all certificate steps handled by kube-controller-manager

## Practice

### CertificateSigningRequest for a new user
- user creates their private key
- user generates a CSR in yaml

generate base64 without new lines: `cat evan.csr | base64 -w 0`

```yml
apiVersion: certificates.k8s.io/v1
kind: CertificateSigningRequest
metadata:
  name: jane
spec:
  expirationSeconds: 600
  usage:
    - client auth
    - digital signature
    - key encipherment
    - server auth
  signerName: kubernetes.io/kube-apiserver-client
  request: | # base64 encoded
    LS0tLS1CRUdJTiBDRVJUSUZJQ0FURSBSRVFVRVNULS0tLS0KTUlJQ1p6Q0NBY3dnQ2pBMUEwR0NTcUdTSWIzRFFFQkN3VUFNSUdHQTFVRUF3d05URWNLQ1RBd01RWURWUVFERXpZbgoyQVFEQ3dZRFZRUURFd1J6WVhSaGJHbGhi
```

### Get CSR
`kubectl get csr`

### Approve CSR
`kubectl certificate approve request-name`

### Reject a CSR
`kubectl certificate deny agent-smith`

### Retrieve signed cert after approval
```sh
kubectl get csr example-csr -o jsonpath='{.status.certificate}' \
  | base64 --decode > example-cert.crt
```

### Delete a CSR request
`kubectl delete csr agent-smith`