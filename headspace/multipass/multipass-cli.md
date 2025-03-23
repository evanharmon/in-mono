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

### Delete instance and snapshot
`multipass delete node01`
or all instances and snapshots
`multipass delete --all`
or combine and purge immediately
`multipass delete --all --purge`

### Recover deleted instances and snapshots
must not have been purged yet!
`multipass recover node01`
or all instances and snapshots 
`multipass recover --all`

### Purge deleted instances and data
Affects all deleted instances. Deletes all data as well!
`multipass purge`


### List all snapshots
`multipass list --snapshots`

### List all instances
`multipass list`