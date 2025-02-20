# DOCKERFILE BEST PRACTICES

## Resources

- [Dockerfile Best Practices](https://docs.docker.com/develop/develop-images/dockerfile_best-practices/)
- [Sysdig top 20 dockerfile best practices](https://sysdig.com/learn-cloud-native/dockerfile-best-practices/)

## User
- don't use the root user UID 0
- create a user instead
- don't specify uid / guid, not always compatible with openshift, etc

```dockerfile
# Create non-root user
RUN useradd -ms /bin/bash myapp
# set the user
USER myapp
# Run the binary
CMD ["myapp"]
```

## Files and permissions
- most apps don't need write access - just execute permissions
- prefer `COPY` for explicitness
- use `ADD` for only url's, tar's, etc and consider `RUN` instead
- try and avoid wildcards `.`. and `*` where possible

try to avoid:
```dockerfile
WORKDIR $APP_HOME
COPY --chown=app:app app-files/ /app
```

## Executables
- should be owned by root and not writeable

avoid the below: (some lines left out for build)
```dockerfile
WORKDIR /app
COPY . .
RUN go build -o /app/main
RUN chown -R app:app /app
USER app
CMD ["/app/main"]
```

prefer placing in `/usr/src/`
```dockerfile
WORKDIR /usr/src/app/myapp
COPY --from=builder /usr/src/app/myapp/target/release/myapp /usr/local/bin/
```

## Use .dockerignore
use a `.dockerignore` file - the `docker build -t myimage .` is common and is the entire directory
- consider using a sub-directory to limit the build context so it's not the root of a repo, etc..
- remember a large build-context can slow down builds - even if not copied to container

## Run commands
- attempt to combine multiple commands in to a single `RUN` for a clean layer