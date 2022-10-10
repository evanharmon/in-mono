# DOCKERFILE

## Resources

- [Dockerfile Add Docs](https://docs.docker.com/engine/reference/builder/#add)
- [Dockerfile Copy Docs](https://docs.docker.com/engine/reference/builder/#copy)

## Copy a file/directory

Trailing slash is considered a directory

```dockerfile
COPY hss-cfg/ .hss-cfg/
```

## Add vs Copy

Note: If you build using STDIN (docker build - < somefile), there is no build context, so COPY can’t be used

## Leveraging Build Cache / COPY

- [Dockerfile Leverage Build Cache / Copy](https://docs.docker.com/develop/develop-images/dockerfile_best-practices/#leverage-build-cache)

```
For the ADD and COPY instructions, the contents of the file(s) in the image are
examined and a checksum is calculated for each file. The last-modified and
last-accessed times of the file(s) are not considered in these checksums. During
the cache lookup, the checksum is compared against the checksum in the existing
images. If anything has changed in the file(s), such as the contents and
metadata, then the cache is invalidated.
```
