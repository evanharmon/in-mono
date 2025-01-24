# LINUX TEE

## Feature
copies STDIN to STDOUT and writes to zero or more files
- `-a` appends to file and shows output

## Basic use
`kubectl get nodes -o yaml| tee nodes.yml`
or
`echo "Hello" | tee greetings.txt`
or
`cat /tmp/hostentries | sudo tee -a /etc/hosts`

## Write inline input to file as root from user
tee will execute as root
```bash
sudo tee /var/www/html/.env <<-EOF
DB_HOST=localhost
DB_USER=appuser
DB_PASSWORD=apppassword
DB_NAME=app
EOF
```