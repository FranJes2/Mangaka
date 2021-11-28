from django.db import models

# Create your models here.

class Course(models.Model):
    name = models.TextField()
    description = models.TextField()
    price = models.TextField()

class Gallery(models.Model):
    name = models.TextField()
    year = models.TextField()



