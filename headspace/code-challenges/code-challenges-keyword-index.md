# CODE CHALLENGES KEYWORD INDEX

Creating a keyword index is a fundamental problem in computer science and information retrieval. A keyword index, also known as an inverted index, is a data structure that allows for fast querying of documents based on their content. Here's a step-by-step explanation of the algorithm:

**Problem Statement:**
Given a collection of text documents, create an index that maps each unique word (or keyword) to a list of documents where it appears.

**Algorithm:**

1. **Tokenization**: Split each document into individual words or tokens. This can be done using natural language processing techniques such as tokenization libraries like NLTK or spaCy.
2. **Stopword removal**: Remove common words like "the", "and", "a", etc., that do not carry much meaning in the context of the documents. This is because these words are unlikely to distinguish between different documents.
3. **Stemming or Lemmatization**: Reduce each word to its base form (stem) or its dictionary-defined form (lemma). For example, "running" and "runs" both stem to "run". This helps to reduce the dimensionality of the vocabulary.
4. **Index creation**: Create an empty map (e.g., a hash table or a trie) that will store the keyword-document pairs.

**Insertion Step:**

1. Iterate through each document in the collection.
2. For each word in the document, perform the following steps:
	* Check if the word is already present in the index. If it is, add the current document to the list of documents associated with that word.
	* If the word is not present in the index, create a new entry in the map and initialize the list of documents with the current document.

**Querying Step:**

1. Given a query keyword, look up its corresponding list of documents in the index.
2. Return the list of documents where the keyword appears.

**Data Structures Used:**
A hash table (e.g., `HashMap` in Java or `dict` in Python) is typically used to store the keyword-document pairs. Each entry in the map corresponds to a unique word and contains a list of documents that contain that word.

**Time Complexity:**

* Insertion step: O(1) amortized time complexity per document, since looking up a word in the index and updating its associated documents takes constant time.
* Querying step: O(1) time complexity, since looking up a keyword in the index and returning its associated documents also takes constant time.

**Space Complexity:** The space complexity depends on the size of the vocabulary (number of unique words) and the number of documents. In general, it's O(v \* d), where v is the size of the vocabulary and d is the number of documents.

The keyword index algorithm has many applications in information retrieval systems, such as search engines, document management systems, and text classification algorithms.