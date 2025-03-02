from django.http import JsonResponse
from django.shortcuts import render
# from django.http import HttpResponse


# Create your views here.
def home(request):
    # return HttpResponse('Hello, world!')
    return render(request, 'home.html')


# JSON response view
def json_view(_request):
    return JsonResponse({'message': 'Example JSON'})
