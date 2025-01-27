# KUBERENTES KUSTOMIZE PATCHES

## Resources
- [Kustomize docs patches](https://kubernetes.io/docs/tasks/manage-kubernetes-objects/kustomization/#customizing)

## Features
Patches are small, self-contained files that can be used to make changes to a manifest.
Better surgical approach when common transformers aren't available.
- pretty straight forward as you can just delete yaml fields not to be touched
- both types of patches can be referenced as separate files `path`
- best for operating on specific fields or small sections of a manifest

## Best practices
- small patches that do one thing are recommended

## Examples

### Strategic merge patch

```bash
# Create a deployment.yaml file
cat <<EOF > deployment.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: my-nginx
spec:
  selector:
    matchLabels:
      run: my-nginx
  replicas: 2
  template:
    metadata:
      labels:
        run: my-nginx
    spec:
      containers:
      - name: my-nginx
        image: nginx
        ports:
        - containerPort: 80
EOF

# Create a patch increase_replicas.yaml
cat <<EOF > increase_replicas.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: my-nginx
spec:
  replicas: 3
EOF

# Create another patch set_memory.yaml
cat <<EOF > set_memory.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: my-nginx
spec:
  template:
    spec:
      containers:
      - name: my-nginx
        resources:
          limits:
            memory: 512Mi
EOF

cat <<EOF >./kustomization.yaml
resources:
- deployment.yaml
patches:
  - path: increase_replicas.yaml
  - path: set_memory.yaml
EOF
```

### Adjust based on patch operations
Json 6902 patch

```bash
# Create a deployment.yaml file
cat <<EOF > deployment.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: my-nginx
spec:
  selector:
    matchLabels:
      run: my-nginx
  replicas: 2
  template:
    metadata:
      labels:
        run: my-nginx
    spec:
      containers:
      - name: my-nginx
        image: nginx
        ports:
        - containerPort: 80
EOF

# Create a json patch
cat <<EOF > patch.yaml
- op: replace
  path: /spec/replicas
  value: 3
EOF

# Create a kustomization.yaml
cat <<EOF >./kustomization.yaml
resources:
- deployment.yaml

patches:
- target:
    group: apps
    version: v1
    kind: Deployment
    name: my-nginx
  path: patch.yaml
# Alternatively - could do the same without the patch.yaml file
# patches:
# - target:
#     group: apps
#     version: v1
#     kind: Deployment
#     name: my-nginx
#   # Inline patch operation
#   patch: |-
#     - op: replace
#       path: /spec/replicas
#       value: 3
EOF
```

### Add an additional env var to a specific container

```yaml
path: spec/template/spec/containers/0/env
op: add
value:
  - NEW_ENV_VAR=123
```

or via strategic method (I didn't test this yet)

deploy-container0-env-patch.yaml
```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: my-nginx
spec:
  template:
    spec:
      containers:
      - name: my-nginx
        image: nginx
        env:
        - name: "new_env_var"
          value: "123"
```

### Remove a label
```yaml
# kustomization.yaml
patches:
- target:
    kind: Deployment
    name: my-deployment
  patch: |-
    - op: remove
      path: /spec/template/metadata/labels/some_label
```

or via strategic merge
```yaml
# label-remove-patch.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: my-deployment
spec:
  template:
    metadata:
      labels:
        some_label: null
```

### Replace a list via patch
```yaml
# kustomization.yaml
patches:
  - target:
      kind: Deployment
      name: my-deployment
    patch: |-
      - op: replace
        path: /spec/template/spec/containers/0
          value:
            name: nginx
            image: nginx
```

or via strategic merge
```yaml
# label-patch.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: my-deployment
spec:
  template:
    spec:
      containers:
        # how kustomize will know which container to patch
        - name: nginx
          image: nginx:1.23.0
```

### Add a list - new container
```yaml
# kustomization.yaml
patches:
  - target:
      kind: Deployment
      name: my-deployment
    patch: |-
      - op: add
        # `-` is end of list, or could add as second container `1`, etc.
        path: /spec/template/spec/containers/-
        value:
          name: nginx
          value: nginx
```

### Delete a container
```yaml
# kustomization.yaml
patches:
  - target:
      kind: Deployment
      name: my-deployment
    patch: |-
      - op: remove
        # remove container at specific index
        path: /spec/template/spec/containers/1
```

via strategic merge patch

```yaml
# container-patch.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: my-deployment
spec:
  template:
    spec:
      containers:
        - $patch: delete
        # tell kustomize which named container to remove
          name: sidecar
```