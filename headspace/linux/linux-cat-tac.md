# LINUX CAT TAC

## Features
- outputs entire file

## View a file
who knew `tac` reversed the output?
`cat myfile.txt`
`tac myfile.txt`

## Add data to a file via redirect
```bash
cat > myfile.txt
<enter data here>
<ctrl+d> to exit out of prompt
```

## Write inline input and cat to file
`<<-EOF` means read all input, ignore leading whitespace.
allows indenting of code and is safer.
```bash
cat > db-load-script.sql <<-EOF
USE ecomdb;
CREATE TABLE IF NOT EXISTS products (id mediumint(8) unsigned NOT NULL auto_increment,Name varchar(255) default NULL,Price varchar(255) default NULL, ImageUrl varchar(255) default NULL,PRIMARY KEY (id)) AUTO_INCREMENT=1;

INSERT INTO products (Name,Price,ImageUrl) VALUES ("Laptop","100","c-1.png"),("Drone","200","c-2.png"),("VR","300","c-3.png"),("Tablet","50","c-5.png"),("Watch","90","c-6.png"),("Phone Covers","20","c-7.png"),("Phone","80","c-8.png"),("Laptop","150","c-4.png");

EOF
```

## Append to end of file
```bash
cat <<EOT >> greetings.txt
line 1
line 2
EOT
```

## Write inline input to a file as root
switch to root user and then `cat > myfile <<-EOF`.
or use `tee`

## Echo a multipline message with cat
```bash
echo
cat <<EOF
Use the following command to do this

  sudo vi /var/db/dhcpd_leases

EOF
```