from django.db import models

# Create your models here.

class Course(models.Model):
    name = models.TextField()
    description = models.TextField()
    price = models.TextField()

class Gallery(models.Model):
    name = models.TextField()
    year = models.TextField()

class Register(models.Model):
    usuario = models.TextField()
    password = models.TextField()
    name = models.TextField()
    fechadenac = models.TextField()
    telephone = models.TextField()
    pgweb = models.TextField()
    country = models.TextField()
    city = models.TextField()
    trabajos = models.TextField()

