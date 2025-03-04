# LINUX GZIP GUNZIP

## Features
for gzip'd files NOT archives

## Flags
- `--keep`, `-k` to keep the file and don't delete on compress / decompress

## Limitations
- can only create compressed archive with a single file inside
- BEWARE the original file is deleted on compression!
- BEWARE the compressed file is deleted on decompression!

## Commands

### Compress file
`gzip test.img`

### Decompress file
`gunzp test.img.gz`

## Read file without decompressing
`zcat test.img.gz`