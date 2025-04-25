# PULUMI ESC CLI

## Resources
- [Pulumi ESC cli docs](https://www.pulumi.com/docs/esc/cli/)

## Install
No need to install if already installed pulumi cli

just use the script `curl -fsSL https://get.pulumi.com/esc/install.sh | sh`
installs to `~/.pulumi/bin`. Add to Path in `.*rc` file

don't install via homebrew, etc. Via script you can choose install path, etc.

## Commands

### Run aws commands with pulumi OIDC
dynamic credentials are good for:
- CI / CD pipelines: use dynamic credentials
- Application testing: run tests against cloud without managing creds
- Secure script execution: exec scripts against AWS without embedding creds
- Team collab: secure scoped access to resources

`esc run <your-org-name>/<your-project-name>/<your-environment-name> aws s3 ls`
