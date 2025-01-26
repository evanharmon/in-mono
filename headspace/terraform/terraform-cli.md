# TERRAFORM CLI

## Resources
- [Terraform Download](https://www.terraform.io/downloads.html)
- [Terraform CLI](https://developer.hashicorp.com/terraform/cli/commands)
- [Terraform GH Releases](https://github.com/hashicorp/terraform/releases)

## Installation

### Mac install
```bash
brew tap hashicorp/tap
brew install hashicorp/tap/terraform
```

### Debian install
```bash
wget -O - https://apt.releases.hashicorp.com/gpg | sudo gpg --dearmor -o /usr/share/keyrings/hashicorp-archive-keyring.gpg
echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/hashicorp-archive-keyring.gpg] https://apt.releases.hashicorp.com $(lsb_release -cs) main" | sudo tee /etc/apt/sources.list.d/hashicorp.list
sudo apt update && sudo apt install terraform
```

### Manual install
```bash
wget https://releases.hashicorp.com/terraform/1.10.5/terraform_1.10.5_linux_arm64.zip
# or
wget https://releases.hashicorp.com/terraform/1.10.5/terraform_1.10.5_linux_amd64.zip
unzip terraform_1.10.5_linux_amd64.zip
mv terraform /usr/local/bin
```

## Install Terraform Version Manager

`brew install warrensbox/tap/tfswitch`

## Getting started

```bash
# create a terraform file with provider / resources
vi main.tf
cat > main.tf <<-EOF
resource "local_file" "config_data" {
  filename = "test.txt"
  content = "this is some config"
}
EOF
# Init project
terraform init
# Run plan
terraform plan -out tfplan
# Run apply
terraform apply tfplan
# Run destroy
terraform destroy
```


## Common issues

### Clear Cache

`find . -type d -name ".terraform" -prune -exec rm -rf {} \;`