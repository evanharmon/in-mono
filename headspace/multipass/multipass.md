# MULTIPASS

## Resources
- [Multipass docs](https://canonical.com/multipass/docs)

## Limitations
- macOS multipass can only run aarch64 not amd

## Common issues

### Cannot connect to socket on macOS
close multipass GUI

```bash
sudo launchctl unload /Library/LaunchDaemons/com.canonical.multipassd.plist
sudo launchctl load /Library/LaunchDaemons/com.canonical.multipassd.plist
```