from django.shortcuts import render
from .models import Gebruiker
from django.http import HttpResponse, JsonResponse
from django.forms.models import model_to_dict
from django.views.decorators.csrf import csrf_exempt
import json


# Create your views here.

# je kent onvoldoende de methodes om gegevens uit een databank te halen. 

def all(request):
    gebruikers = Gebruiker.objects.all().values()
    retrunGebruiker = list(gebruikers)
    return JsonResponse(retrunGebruiker, safe=False)

def getOne(request, id):
    gebruikerID = 2#class.object.get(pk = id)

@csrf_exempt
def add(request):
    post_data = json.loads(request.body.decode('utf-8'))
    addedUser = Gebruiker()
    addedUser.login = post_data["login"]
    addedUser.password = post_data["password"]
    addedUser.email = post_data["email"]
    addedUser.role = post_data["role"]
    addedUser.isSuperUser = post_data["isSuperUser"]

    addedUser.save()

    return JsonResponse(model_to_dict(addedUser))

@csrf_exempt
def delete(request, id):
    idToDelete = 2

@csrf_exempt
def change(request, id):
    idToChange = 1