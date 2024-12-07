# KUBERNETES KUBECTL EXEC

## Resources

- []()

## Practice

### curl a service
uses a pod like `byrnedo/alpine-curl:latest` with a pod spec like

```yml
apiVersion: v1
kind: Pod
metadata:
  name: curl
spec:
  containers:
  - command:
    - sleep
    - "5000"
    image: byrnedo/alpine-curl:latest
    name: alpine-curl
    volumeMounts:
    - mountPath: /var/run/secrets/kubernetes.io/serviceaccount
      name: kube-api-access-m7ljw
      readOnly: true
  dnsPolicy: ClusterFirst
  enableServiceLinks: true
  volumes:
  - name: kube-api-access-m7ljw
    projected:
      defaultMode: 420
      sources:
      - serviceAccountToken:
          expirationSeconds: 3607
          path: token
      - configMap:
          items:
          - key: ca.crt
            path: ca.crt
          name: kube-root-ca.crt
      - downwardAPI:
          items:
          - fieldRef:
              apiVersion: v1
              fieldPath: metadata.namespace
            path: namespace
```

```sh
kubectl exec curl -- sh -c 'test=`wget -qO- -T 2  http://myapp-service.default.svc.cluster.local:8080/ 2>&1` && echo "$test OK" || echo "Failed"';
```