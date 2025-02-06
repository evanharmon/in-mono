# PYTHON STRING ITERATING TECHNIQUES

## find consecutive groupings of equal chars

```python
def find_consecutive_groups(s="aabbccd"):
  """ find consecutive groups
  limited to alphanumeric for this example
  """
  result = []
  # keep track of current group characters and length
  current_grp_chr = None
  current_grp_len = 0
  # iterate through chars
  # limitation: this can leave an unadded group after the last chr has been checked
  for chr in s:
    # limiting to digits or alphab right now
    if chr.isdigit() or chr.isalpha():
      # increment len if current char matches the group char
      if chr == current_grp_chr:
        # increment and keep iterating
        current_grp_len += 1
      else:
        # char wasn't a match, store the current group values if they exist
        if current_grp_chr is not None:
          result.append((current_grp_chr, current_grp_len))
        # new char - so reset current group values
        current_grp_chr = chr
        current_grp_len = 1
  # Handle leftover group if it exists
  if current_grp_chr is not None:
    result.append((current_grp_chr, current_grp_len))
  return result
```