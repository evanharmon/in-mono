# PYTHON DJANGO MODELS CONNECTIONS

## Features
Uses ORM field types to establish relationships between data entities
- auto creates required db tables

## One-to-one relationships

- each `User` has a `UserProfile`
- `UserProfile` connected to exactly one `User`

```python
# models.py
from django.db import models

class User(models.Model):
    name = models.CharField(max_length=255)
    email = models.EmailField(unique=True)

class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    bio = models.TextField(blank=True)

# views.py
from django.shortcuts import render, redirect
from .models import User, UserProfile

def edit_profile(request):
    if request.method == 'POST':
        profile_bio = request.POST.get('bio')
        try:
            user_profile = UserProfile.objects.get(user=request.user)
            user_profile.bio = profile_bio
            user_profile.save()
            return redirect('profile')
        except UserProfile.DoesNotExist:
            # Handle the case where the user doesn't have a profile yet
            pass

    return render(request, 'edit_profile.html')

# urls.py
from django.urls import path
from . import views

urlpatterns = [
    path('edit-profile/', views.edit_profile, name='edit_profile'),
]
```

## One-to-many relationship

- each `Author` can write multiple `Book`s
- a `Book` connected to exactly one `Author`

```python
# models.py
from django.db import models

class Author(models.Model):
    name = models.CharField(max_length=255)

class Book(models.Model):
    title = models.CharField(max_length=255)
    author = models.ForeignKey(Author, on_delete=models.CASCADE)

# views.py
from django.shortcuts import render
from .models import Author, Book

def author_books(request, author_id):
    try:
        author = Author.objects.get(id=author_id)
        books = author.book_set.all()
        return render(request, 'author_books.html', {'books': books})
    except Author.DoesNotExist:
        # Handle the case where the author doesn't exist
        pass

# urls.py
from django.urls import path
from . import views

urlpatterns = [
    path('author/<int:author_id>/books/', views.author_books, name='author_books'),
]
```

## Many-to-many relationship

- each `Student` can take multiple `Course`s
- each `Course` has multiple associated `Student`s

```python
# models.py
from django.db import models

class Student(models.Model):
    name = models.CharField(max_length=255)

class Course(models.Model):
    title = models.CharField(max_length=255)
    students = models.ManyToManyField(Student)

# views.py
from django.shortcuts import render, redirect
from .models import Student, Course

def enroll_in_course(request, course_id):
    if request.method == 'POST':
        try:
            course = Course.objects.get(id=course_id)
            student_to_enroll = request.user.student  # Assuming a OneToOneField to User
            course.students.add(student_to_enroll)
            return redirect('student_courses')
        except Course.DoesNotExist:
            # Handle the case where the course doesn't exist
            pass

    return render(request, 'enroll_in_course.html')

# urls.py
from django.urls import path
from . import views

urlpatterns = [
    path('course/<int:course_id>/enroll/', views.enroll_in_course, name='enroll_in_course'),
]
```