# LINUX CP

## Copy file and preserve special attributes
good for context, links, xattr, etc. `all` is default

```bash
cp --preserve ~/special_file.txt ~/other_dir/
# preserve symlink
cp -P /usr/local/bin/docker /usr/local/bin/orb-docker
```

## Copy Range Of Numbered Files

```bash
cp P10802{75..83}.JPG ~/Images
```
