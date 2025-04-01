# KUBERNETES STATEFULSETS

## Resources
- [Kubernetes statefulsets Docs](https://kubernetes.io/docs/concepts/workloads/controllers/statefulset/)

## Features
use a statefulset for an app using state and requiring:
- stable network identities
- persistent storage
- ordered scaling and updates
- app requires pod identity across restarts

behavior of statefulsets:
- pods get an ordered identity
- pods have an ordered startup / shutdown

## Use cases

### Stable, unique network identity is required
often used for databases!
- each pod will get a unique DNS name `pod-0, pod-1, etc` using a headless service

### Persistent storage is required
useful for databases
- each pod gets a PVC that remains even if pod is rescheduled

### Ordered scaling and updates
pod-0 starts before pod-1, etc
- pods are started, stopped, and updated in a defined order
- helps with leader-election mechanisms in distributed systems

### App requires pod identity across restarts
- pods are NOT randomly assigned a new identity, unlike deployments
