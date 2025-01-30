# KUBERNETES ENDPOINTS

## Resources
- [Kubernetes endpoints docs](https://kubernetes.io/docs/reference/kubernetes-api/service-resources/endpoints-v1/)

## Examples

### Add node endpoint 
Allow all pods on the node to talk to this external service
```bash
# Get node's IP addr
export IP_ADDR=$(ifconfig eth0 | grep inet | head -n1 | awk '{print $2}')

kubectl --context cluster3 apply -f - <<EOF
apiVersion: v1
kind: Endpoints
metadata:
  # be sure to match service name
  name: external-webserver
subsets:
  - addresses:
      - ip: $IP_ADDR
    ports:
      - port: 8888
EOF
```