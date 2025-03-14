# DOCKER RUN CLI

## Resources

- [Docker run Docs](https://docs.docker.com/engine/reference/commandline/run/)
- [Docker Run Entrypoint Docs](https://docs.docker.com/engine/reference/run/#entrypoint-default-command-to-execute-at-runtime)
- [Docs](https://docs.docker.com/engine/security/seccomp/#significant-syscalls-blocked-by-the-default-profile)

## Run Image

```bash
docker run --name my-container-name -d image_name
# Detached and running
docker run -t -d -p 4984-4985:4984-4985 "couchbase-mobile"
```

## Run privileged container
```bash
# immediately removes / deletes container as well on exit
docker run --rm --privileged -it ubuntu bash
```

## Run Container With Full Color Support

`docker run -it -e "TERM=xterm-256color" image_name bash -l`

## Docker Bind Container To Host Port / Expose Port

`docker run -d -p 80:3000`

## Run Docker Container Without Default Seccomp Profile

Avoids the `could not launch process: fork/exec ...: operation not permitted`
error

```bash
docker run --rm -it --security-opt seccomp=unconfined debian:jessie \
    unshare --map-root-user --user sh -c whoami
```

## Override Entrypoint

`docker run -it --entrypoint="" mysql bash`

## Docker Run Using Env `.env` File

`docker run -it --env-file ./.env myimage`

## Set Hostname at run

`docker run -it -h nvim --name nvim evanharmon/hss-base-nvim:ubuntu zsh`
