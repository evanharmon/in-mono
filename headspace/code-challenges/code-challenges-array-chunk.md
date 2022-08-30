# CODE CHALLENGES ARRAY CHUNK

## Strategy focusing on last of chunked array

adds to chunk group on every iteration
focuses more on tracking new chunk array (chunked) instead of original array
tracks the length of the `new group array` instead maintaining a group counter

- create empty chunked array to hold chunks
- iterate over original array
- pop off last chunk in chunked array
- if last chunk of chunked does not exist OR if last chunk length equal to chunk size
  - push new chunk in to chunked with array containing current element
- else add current element to chunk

## Strategy using slice

improvement as iteration goes by desired size of new chunk.
incrementing the index by itself + size is the magic.
Size is NOT zero based so gives the +1 needed for end argument of slice.

- create empty chunked array
- create index starting at 0
- while index is less than array.length
  - push a slice of length 'size' from original array into 'chunked'
  - add 'size' to 'index'

alternative: use a for loop and have incrementor be `i = i + size`
