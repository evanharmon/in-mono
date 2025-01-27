# KUBERNETES ADMISSION CONTROLLER WEBHOOKS

## Resources
- [Kubernetes dynamic admission control](https://kubernetes.io/docs/reference/access-authn-authz/extensible-admission-controllers/)
- [Example prod admission controller webhook server](https://github.com/kubernetes/kubernetes/blob/release-1.21/test/images/agnhost/webhook/main.go)
- [Stackrox admission webhook demo](https://github.com/stackrox/admission-controller-webhook-demo)

## Features
run your own webhook server to handle custom admission controller logic
- supports validating and mutating
- can be written in other languages
- both validating and mutating webhooks come in as `POST` method
- calls come in and should be returned as `POST` method
- `mutating` call must return a `PATCH` object, base64 encoded

## Requirements
- must accept validating and mutating webhook calls
- must respond with `allowed` set to true or false
- must create `MutatingWebhookConfiguration` resource object
- must create `ValidatingWebhookConfiguration` resource object

## Process
- `AdmissionReview` object is sent to webhook server
- `AdmissionReview` response object is sent back to api server

`.response.allowed` is set to true or false