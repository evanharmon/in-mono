# LINUX DIFF

## Features
see diffs between files
- identical lines are hidden
- shows changes lines

## Legend
- `<` means content is from file 1
- `>` means content is from file 2
- `1c1` line 1 from file 1 is changed compared to file 2

## Simple diff
`diff file1 file2`

## Diff with more context
`diff -c file1 file2`
identical lines won't be marked
`!` means difference between lines
`+` means content added
`-` means content removed

## Side by side comparison
`diff -y file1 file2`
or use side by side diff
`sdiff file1 file2`
differences are marked with `|`

## Ignore case differences
`diff -i file1 file2`