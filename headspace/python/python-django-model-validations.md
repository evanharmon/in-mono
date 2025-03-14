# PYTHON DJANGO MODEL VALIDATIONS

## Features
validates user input.

## Types

- built-in validators
- custom functions
- model-specific constraints

## Example custom validator

```python
from django.core.validators import RegexValidator

class MyRegexValidator(RegexValidator):
    regex = r'^[a-zA-Z]+$'
    message = 'Only letters are allowed.'

from django import forms

class MyForm(forms.Form):
    my_field = forms.CharField(max_length=255, validators=[MaxLengthValidator(100)])

    def clean_my_field(self):
        value = self.cleaned_data['my_field']
        if not re.match(r'^[a-zA-Z]+$', value):
            raise forms.ValidationError('Only letters are allowed.')
        return value

# models.py
class MyModel(models.Model):
    name = models.CharField(max_length=255)

    def clean(self):
        if not re.match(r'^[a-zA-Z]+$', self.name):
            raise ValidationError('Only letters are allowed.')
```

## Example built-in validators

```python
# models.py
from django.db import models

class User(models.Model):
    first_name = models.CharField(max_length=255, validators=[MaxLengthValidator(50)])
    last_name = models.CharField(max_length=255, validators=[MaxLengthValidator(50)])

    def __str__(self):
        return f"{self.first_name} {self.last_name}"
from django import forms
from .models import User

# forms.py
class UserForm(forms.ModelForm):
    class Meta:
        model = User
        fields = ('first_name', 'last_name')

    def clean_first_name(self):
        first_name = self.cleaned_data['first_name']
        if not re.match(r'^[a-zA-Z]+$', first_name):
            raise forms.ValidationError('Only letters are allowed in the first name.')
        return first_name

    def clean_last_name(self):
        last_name = self.cleaned_data['last_name']
        if not re.match(r'^[a-zA-Z]+$', last_name):
            raise forms.ValidationError('Only letters are allowed in the last name.')
        return last_name

# views.py
from django.shortcuts import render, redirect
from .forms import UserForm
from .models import User

def create_user(request):
    if request.method == 'POST':
        form = UserForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('user_list')
    else:
        form = UserForm()

    return render(request, 'create_user.html', {'form': form})

def user_list(request):
    users = User.objects.all()
    return render(request, 'user_list.html', {'users': users})

# urls.py
from django.urls import path
from . import views

urlpatterns = [
    path('create_user/', views.create_user, name='create_user'),
    path('users/', views.user_list, name='user_list'),
]

# templates/create_user.html
<form method="post">
    {% csrf_token %}
    {{ form.as_p }}
    <button type="submit">Create User</button>
</form>
```

## Example validator view

```python
def add_todo(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        new_todo = Todo(task=data['task'])
        try:
            new_todo.full_clean()
            new_todo.save()
            return JsonResponse({'id': new_todo.id, 'task': new_todo.task}, status=201)
        except ValidationError as e:
            return JsonResponse({'message': str(e)}, status=400)
    return JsonResponse({'message': 'Invalid request'}, status=400)
```