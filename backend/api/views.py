from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets

from api.models import Course, Gallery
from api.serializers import CourseSerializer, GallerySerializer


class CourseViewSet(viewsets.ModelViewSet):
    serializer_class = CourseSerializer
    queryset = Course.objects.all()

class GalleryViewSet(viewsets.ModelViewSet):
    serializer_class = GallerySerializer
    queryset = Gallery.objects.all()










