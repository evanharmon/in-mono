# MULTIPASS

## Resources
- [Multipass docs](https://canonical.com/multipass/docs)

## CLI Commands

### Copy a file over to a host
copy a script file to a host called controlplane
`multipass transfer 01-setup-hosts.sh controlplane:/tmp/`

### Copy file from instance to host as sudo

`multipass exec controlplane -- sudo cat /etc/kubernetes/admin.conf > ~/.kube/multipass.conf`

### Execute a script file on a host
`multipass exec controlplane -- /tmp/01-setup-hosts.sh <any additional args>`

### Get info about a host
`multipass info controlplane`
or in json format:
`multipass info controlplane --format=json`

### Open shell on instance
`multipass shell controlplane`

### Start all instances
`multipass start --all`

### Stop all instances
`multipass stop --all`