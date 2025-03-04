# LINUX BZIP2 BUNZIP2

## Flags
- `--keep`, `-k` to keep the file and don't delete on compress / decompress

## Limitations
- BEWARE the original file is deleted on compression!
- BEWARE the compressed file is deleted on decompression!

## Commands

### Compress file
`bzip2 test.img`

### Decompress file
`bunzip2 test.img.bz2`

## Read file without decompressing
`bzcat test.img.bz2`