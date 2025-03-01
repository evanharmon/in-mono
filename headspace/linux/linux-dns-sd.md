# DNS-SD

## Commands

### List all services and devices via MDNS / Bonjour on .local
`dns-sd -B _services._dns-sd._udp local`

### List all hosts available via SSH or similar services
`dns-sd -B _ssh._tcp local`