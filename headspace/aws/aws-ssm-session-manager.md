# AWS SSM SESSION MANAGER

## Resources

- [AWS SSM Session Manager setup](https://docs.aws.amazon.com/systems-manager/latest/userguide/session-manager-getting-started.html)
- [AWS SSM Session Manager IAM Role](https://docs.aws.amazon.com/systems-manager/latest/userguide/session-manager-getting-started-instance-profile.html)
- [AWS SSM AWS Blog Session Manager](https://aws.amazon.com/blogs/mt/vr-beneficios-session-manager/)
- [AWS ssm session manager plugin install](https://docs.aws.amazon.com/systems-manager/latest/userguide/session-manager-working-with-install-plugin.html)

## Permissions

add the 'AmazonSSMManagedInstanceCore` policy to IAM Role

## Install

### macOS signed installer
non-bundle
```bash
curl "https://s3.amazonaws.com/session-manager-downloads/plugin/latest/mac_arm64/session-manager-plugin.pkg" -o "session-manager-plugin.pkg"
sudo installer -pkg session-manager-plugin.pkg -target /
sudo ln -s /usr/local/sessionmanagerplugin/bin/session-manager-plugin /usr/local/bin/session-manager-plugin
```

## Commands

### Start a session
`aws ssm start-session --target i-00000000000000000 --reason 'debugging'`
