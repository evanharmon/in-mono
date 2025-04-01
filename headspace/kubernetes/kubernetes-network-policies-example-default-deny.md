# KUBERNETES NETWORK POLICIES EXAMPLE DEFAULT DENY

## Features
adds a default deny, confirms the pod traffic is blocked, then adds a policy to allow, and confirms

## Example steps
1. **Create an nginx pod**
```bash
cat <<EOF | kubectl apply -f -
apiVersion: v1
kind: Pod
metadata:
  name: nginx
  labels:
    app: nginx
spec:
  containers:
  - name: nginx
    image: nginx:latest
    ports:
    - containerPort: 80
EOF
```

2. **Create default-deny network policy**
```bash
cat <<EOF | kubectl apply -f -
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: default-deny
  namespace: default
spec:
  podSelector: {}
  policyTypes:
  - Ingress
EOF
```

3. **Create test-pod for ping**
```bash
cat <<EOF | kubectl apply -f -
apiVersion: v1
kind: Pod
metadata:
  name: test-pod
  labels:
    app: test
spec:
  containers:
  - name: busybox
    image: busybox
    command: ['sh', '-c', 'echo Hello Kubernetes! && sleep 3600']
EOF
```

4. **Confirm ping is blocked to nginx pod**
```bash
k get pod nginx -o jsonpath='{.status.podIP}'
# below ping should be BLOCKED - it will hang and then CTRL+C will show 100% packet loss
kubectl exec -it test-pod -- ping <nginx-pod-ip>
```

5. **Add policy to allow traffic to nginx pod**
specifically from any pod with app label `test`
```bash
cat <<EOF | kubectl apply -f -
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: allow-nginx
  namespace: default
spec:
  podSelector:
    matchLabels:
      app: nginx
  ingress:
  - from:
    - podSelector:
        matchLabels:
          app: test
EOF
```

6. **Confirm ping now succeeds**
```bash
k get pod nginx -o jsonpath='{.status.podIP}'
kubectl exec -it test-pod -- ping <nginx-pod-ip>
```
