# DOCKER RUN CLI

## Resources

- [Docker run Docs](https://docs.docker.com/engine/reference/commandline/run/)
- [Docker Run Entrypoint Docs](https://docs.docker.com/engine/reference/run/#entrypoint-default-command-to-execute-at-runtime)

## Run Image

```console
docker run --name my-container-name -d image_name
```

## Start Image and Leave Running

```console
docker run -t -d -p 4984-4985:4984-4985 "couchbase-mobile"
```

## Run Container With Full Color Support

```console
docker run -it -e "TERM=xterm-256color" image_name bash -l
```

## Docker Bind Container To Host Port / Expose Port

```console
docker run -d -p 80:3000
```

## Run Docker Container Without Default Seccomp Profile

Avoids the `could not launch process: fork/exec ...: operation not permitted`
error

- [Docs](https://docs.docker.com/engine/security/seccomp/#significant-syscalls-blocked-by-the-default-profile)

```console
docker run --rm -it --security-opt seccomp=unconfined debian:jessie \
    unshare --map-root-user --user sh -c whoami
```

## Override Entrypoint

```console
docker run -it --entrypoint="" mysql bash
```

## Docker Run Using Env `.env` File

```console
docker run -it --env-file ./.env myimage
```

## Set Hostname at run

```console
docker run -it -h nvim --name nvim evanharmon/hss-base-nvim:ubuntu zsh
```
