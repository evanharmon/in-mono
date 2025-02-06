# PYTHON LIST COMPLEXITY

## Examples

### Naive intersection of lists
This solution has O(n^2) time complexity
O(n) space complexity - whichever list is larger

```yaml
def intersect_lists_naive(list1, list2):
    # create empty result list
    intersection_list = []
    # iterate over each element in first list
    for i in list1:
        # check if element exists in second list by using "in" operator which has O(n) complexity
        if i in list2:
          # if yes, then add it to the result list and remove from second list to avoid duplicates
          intersection_list.append(i)
          list2.remove(i)  # this operation also has O(n) complexity
    # finally sort the resulting list to get output in sorted order and return
    return sorted(intersection_list)

# Sample lists
list1 = [3, 1, 2, 7, 5]
list2 = [4, 1, 2, 6, 5]

# Call the function with these lists as arguments
print(intersect_lists_naive(list1, list2))
```