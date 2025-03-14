# PYTHON DJANGO SQLITE3 QUERY

## Simple example

```python
from django.http import HttpResponse
import sqlite3

def get_books(request):
    # Create a new SQLite connection for each request
    connection = sqlite3.connect('db.sqlite3')
    books = []
    try:
        # Retrieve items from the database
        raw_query = 'SELECT * FROM books'
        items = connection.execute(raw_query).fetchall()
    finally:
        # Close the connection to ensure it is not reused
        connection.close()

    return HttpResponse(books)
```

## ORM Example

```python
# models.py
from django.db import models

class Book(models.Model):
    title = models.CharField(max_length=200)
    author = models.CharField(max_length=100)

    def __str__(self):
        return self.title

# views.py
from django.shortcuts import render
from .models import Book

def book_list(request):
    try:
        books = Book.objects.all()
        return render(request, 'book_list.html', {'books': books})
    except Exception as e:
        print(f"An error occurred: {e}")
    finally:
        # No need to call close() since SQLite doesn't support transactions
        pass
```