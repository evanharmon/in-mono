# LINUX XZ UNXZ

## Flags
- `--keep`, `-k` to keep the file and don't delete on compress / decompress

## Limitations
- BEWARE the original file is deleted on compression!
- BEWARE the compressed file is deleted on decompression!

## Commands

### Compress file
`xz test.img`

### Decompress file
`unxz test.img.xz`

## Read file without decompressing
`xzcat test.img.xz`