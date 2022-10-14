# KUBERNETES LABELS SELECTORS

## Resources

- [Kubernetes Labels / Selectors](https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/)
- [Kubernetes commonly used labels](https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#:~:text=commonly%20used%20labels)

## Labels

used to organize objects and group

examples

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: label-demo
  labels:
    environment: production
    app: nginx
```

## Label Selectors

types: equality-based and set-based

examples:

```
environment in (production, qa) # set
tier notin (frontend, backend) # set
partition # equality
!partition # equality
```

## matchExpressions

example

```yaml
selector:
  matchLabels:
    component: redis
  matchExpressions:
    - { key: tier, operator: In, values: [cache] }
    - { key: environment, operator: NotIn, values: [dev] }
```
