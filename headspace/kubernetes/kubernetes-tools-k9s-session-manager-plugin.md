# K9S SESSION MANAGER PLUGIN

## Resources
used CHATGPT

## Create script to get node instance ID 
macOS specific right now

```bash
mkdir "/Users/$(whoami)/Library/Application Support/k9s/scripts"
touch "/Users/$(whoami)/Library/Application Support/k9s/scripts/ssm-start-session.sh"
chmod +x "/Users/$(whoami)/Library/Application Support/k9s/scripts/ssm-start-session.sh"
touch "/Users/$(whoami)/Library/Application Support/k9s/plugins.yaml"
```

`code "/Users/$(whoami)/Library/Application Support/k9s/scripts/ssm-start-session.sh"`
```bash
#!/usr/bin/env bash

set -euo pipefail

NODE_DNS="$1"

# Get EC2 instance id from the private IP
INSTANCE_ID=$(aws ec2 describe-instances \
  --filters "Name=private-dns-name,Values=$NODE_DNS" \
  --query "Reservations[*].Instances[*].InstanceId" \
  --output text
)

if [ -z "$INSTANCE_ID" ]; then
  echo "❌ Could not find instance ID for DNS name: $NODE_DNS"
  sleep 3
  exit 1
fi

echo "✅ Starting SSM session with $INSTANCE_ID (from DNS: $NODE_DNS)..."
aws ssm start-session --target "$INSTANCE_ID" --reason "debugging via k9s"
```

## Add plugin calling script
necessary since by default node names in EKS are IPs

`code "/Users/$(whoami)/Library/Application Support/k9s/plugins.yaml"`
```yaml
---
plugins:
  ssm:
    shortCut: Shift-S
    confirm: true
    description: SSM session
    scopes:
      - node
    command: bash
    args:
      - -c
      - "'/Users/<username>/Library/Application Support/k9s/scripts/ssm-start-session.sh' $NAME"
```
