from django.shortcuts import render

# Create your views here.
from django.http import JsonResponse

def homepage(request):
    return JsonResponse({"message": "Welcome to the Homepage API!"})
