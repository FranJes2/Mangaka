from django.shortcuts import render
# Create your views here.
from rest_framework import viewsets, generics
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from api.models import Course, Gallery
from api.serializers import CourseSerializer, GallerySerializer, LoginSerializer, MeSerializer, RegisterSerializer


class CourseViewSet(viewsets.ModelViewSet):
    serializer_class = CourseSerializer
    queryset = Course.objects.all()

class RegisterView(generics.CreateAPIView):
    serializer_class = RegisterSerializer

class GalleryViewSet(viewsets.ModelViewSet):
    serializer_class = GallerySerializer
    queryset = Gallery.objects.all()

class LoginView(generics.CreateAPIView):
    serializer_class = LoginSerializer

@api_view(["GET"])
@permission_classes([IsAuthenticated])
def me(request):
    return Response(MeSerializer(request.user).data, 200)










