# KUBERNETES UTILITY IMAGES

## Features
various images for achieving tasks quickly in kubernetes

## DNS UTILS
`kubectl run dns-utils --image registry.k8s.io/e2e-test-images/jessie-dnsutils:1.3`

## Curl
`kubectl run curl --image alpine/curl`

continuously curl in a sidecar container
```yaml
    Command:
      /bin/sh
      -c
      while true; do timeout 3 curl -s http://mysvc || echo Not able to connect to the nginx app on http://mysvc; sleep 3; done
```

## Stackrox Admission webhook
`stackrox/admission-controller-webhook-demo:latest`