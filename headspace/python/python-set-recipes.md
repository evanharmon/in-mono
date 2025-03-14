# PYTHON SET RECIPES

## Recipes

### Simple example

```python
some_list = ['a', 'b', 'c', 'b', 'd', 'm', 'n', 'n']
duplicates = set([x for x in some_list if some_list.count(x) > 1])
print(duplicates)
# Output: set(['b', 'n'])
```

### Intersection of lists
```python
def intersect_lists(list1, list2):
  # convert to sets
  set1 = set(list1)
  set2 = set(list2)
  # use intersection to find elements in common
  intersection_set = set1 & set2 # or set1.intersection(set2)
  # convert back to a list and sort
  return sorted(list(intersection_set))


# Sample lists
list1 = [3, 1, 2, 7, 5]
list2 = [4, 1, 2, 6, 5]

# Call the function with these lists as arguments
print(intersect_lists(list1, list2))  # Output
```

### Find unique elements in a list
```python
def unique_elements(input_list):
    # Initialize two empty sets.
    # 'found' will keep track of all elements we have encountered so far, and 'duplicates' will contain any element that has been found more than once.
    found, duplicates = set(), set()

    # Loop through each element in the input list.
    for element in input_list:
        # If this is an element we have already encountered (it's in 'found'), add it to 'duplicates'.
        if element in found:
            duplicates.add(element)
        # If this is a new element, add it to 'found'.
        else:
            found.add(element)

    # Return a list containing only the unique elements (those in 'found' but not in 'duplicates').
    return list(found - duplicates)
 

sample_data = [1, 2, 3, 4, 5, 1, 2, 6, 7, 8]
print(unique_elements(sample_data))
```

### Find elements that do not repeat
```python
def non_repeating_elements(input_list):
   # Initialize two empty sets.
   # 'found' will keep track of all elements we have encountered so far, and 'repeated' will contain any element that has been found more than once.
   found, repeated = set(), set()

   # Loop through each element in the input list.
   for element in input_list:
       # If this is an element we have already encountered (it's in 'found'), add it to 'repeated'.
       if element in found:
           repeated.add(element)
       # If this is a new element, add it to 'found'.
       else:
           found.add(element)

   # Return a list containing only the non-repeating elements (those in 'found' but not in 'repeated').
   return list(found - repeated)

sample_data = [1, 2, 3, 4, 5, 1, 2, 6, 7, 8]
print(non_repeating_elements(sample_data))
```

### Find anagrams

```python
def find_anagrams(list1, list2):
    # Convert each word in each list to a sorted tuple
    # sorting is important so each word can be compared no matter the order of chars
    # tuples_list1 = tuple(sorted(word) for word in list1)
    tuples_list1 = [tuple(sorted(word)) for word in list1]
    # tuples_list2 = tuple(sorted(word) for word in list2)
    tuples_list2 = [tuple(sorted(word)) for word in list2]
    
    # Use intersection of sets to find the common tuples (i.e., anagrams)
    common_tuples = set(tuples_list1) & set(tuples_list2)
    
    # Convert the set of anagram tuples back to a list of words
    anagram_words = []
    for t in common_tuples:
        for word in list1:
            if tuple(sorted(word)) == t:
                anagram_words.append(word)
        for word in list2:
            if tuple(sorted(word)) == t:
                anagram_words.append(word)
    
    return anagram_words


list1 = ['act', 'cat', 'dog']
list2 = ['tac', 'atc', 'god']

print(find_anagrams(list1, list2))  # Output: ['act', 'cat', 'tac']
```

### Find unique referrals
```python
def find_unique_referrals(referrals):
    # so the order doesn't actually matter - reminiscent of anagrams
    # Use the trick of a sorting as a tuple and adding to a set
    uniq_refs = set()
    for ref in referrals:
        # sort each referral so the order doesn't matter - this way we know uniq ones
        sorted_ref = tuple(sorted(ref))
        print(sorted_ref)
        uniq_refs.add(sorted_ref)
    return uniq_refs

referrals = [[1,2], [2,3], [2,1]]
print(find_unique_referrals(referrals))  # Output: [1, 2]
```