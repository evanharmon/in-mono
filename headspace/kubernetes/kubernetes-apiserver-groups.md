# KUBERNETES APISERVER GROUPS

## Resources
- [Kubernetes apiserver groups](https://kubernetes.io/docs/reference/using-api/#api-groups)

## Features

verbs available are:
- list
- get
- create
- delete
- update
- watch

## Core groups
also known as the legacy groups - path is `/api`

all yaml `apiVersion` will simply be `v1`

examples: /pods, /namespaces/, /rc, /events, /nodes, etc.

## Named groups
note the path is `apis` for multiple named apis
found at rest path: `/apis/$GROUP_NAME/$VERSION`
use `apiVersion: $GROUP_NAME/$VERSION` or `apiVersion: $GROUP_NAME/$VERSION/$RESOURCE
this is what will be used for new features going forward

examples: /batch/v1, /networking.k8s.io/v1/networkpolicies