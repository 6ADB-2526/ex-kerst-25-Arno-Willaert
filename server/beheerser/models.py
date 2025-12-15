from django.db import models

# Create your models here.

class Gebruiker(models.Model):
    login = models.CharField(max_length=25)
    password = models.CharField(max_length=25)
    # maak gebruik van een email field
    email = models.CharField(max_length=25)
    role = models.CharField(max_length=25)
    isSuperUser = models.BooleanField(default=False)