# TERRAFORM

## Resources

- [Terraform Getting Started](https://www.terraform.io/intro/getting-started/install.html)
- [Terraform Automation](https://learn.hashicorp.com/terraform/development/running-terraform-in-automation)
- [Terraform Version Manager](https://warrensbox.github.io/terraform-switcher/)
- [Terraform AWS Provider](https://www.terraform.io/docs/providers/aws/index.html)

## Features
IaC to deploy to multiple clouds or on-prem
- stores state in files
- compares infrastructure resources against state files
- follows an immutable infrastructure approach - recreates resources to avoid drift

## Install

### Mac install
```bash
brew tap hashicorp/tap
brew install hashicorp/tap/terraform
```

### Debian install
with keyring / sources
```bash
wget -O - https://apt.releases.hashicorp.com/gpg | sudo gpg --dearmor -o /usr/share/keyrings/hashicorp-archive-keyring.gpg
echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/hashicorp-archive-keyring.gpg] https://apt.releases.hashicorp.com $(lsb_release -cs) main" | sudo tee /etc/apt/sources.list.d/hashicorp.list
sudo apt update && sudo apt install terraform
```

### Linux manual install
```bash
sudo apt install unzip
wget https://releases.hashicorp.com/terraform/1.11.3/terraform_1.11.3_linux_amd64.zip
unzip terraform_1.11.3_linux_amd64.zip
sudo install terraform /usr/local/bin/
rm -rf terraform*.zip terraform
```

### Install Terraform Version Manager

`brew install warrensbox/tap/tfswitch`

## Functions

### cidrsubnet

- [Terraform CIDR Subnet Article](http://blog.itsjustcode.net/blog/2017/11/18/terraform-cidrsubnet-deconstructed/)

### Route Table Associations

- [Terraform Count](https://stackoverflow.com/questions/51739482/terraform-how-to-associate-multiple-subnet-to-route-table)
