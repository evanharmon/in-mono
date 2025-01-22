# LINUX SCP

## Resources

- [SCP Guide For RaspberryPi](https://www.raspberrypi.org/documentation/remote-access/ssh/scp.md)
- [Identity File use](https://www.techrepublic.com/article/how-to-use-secure-copy-with-ssh-key-authentication/)

## Flags

- `-r` recursive copy
- `-p` preserve modification times

## Commands

### Copy Folder
`scp -pr /home/evan/media node01:/home/evan`

### Use Identify File With SCP

`scp -i ~/.ssh/id_rsa.pub FILENAME USER@SERVER:/home/USER`

### Copy Multiple Files

`scp myfile1.txt myfile2.txt pi@raspberrypi.local:`
