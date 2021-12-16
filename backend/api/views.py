from django.shortcuts import render
# Create your views here.
from rest_framework import viewsets, generics
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from api.models import Course, Gallery
from api.serializers import CourseSerializer, GallerySerializer, MeSerializer, RegisterSerializer


class CourseViewSet(viewsets.ModelViewSet):
    serializer_class = CourseSerializer
    queryset = Course.objects.all()


    def get_queryset(self):
        queryset = self.queryset
        course_topprice = self.request.query_params.get('topprice')
        if course_topprice is not None:
            queryset = queryset.filter(price__lte=course_topprice)
        return queryset



class RegisterView(generics.CreateAPIView):
    serializer_class = RegisterSerializer

class GalleryViewSet(viewsets.ModelViewSet):
    serializer_class = GallerySerializer
    queryset = Gallery.objects.all()

@api_view(["GET"])
@permission_classes([IsAuthenticated])
def me(request):
    return Response(MeSerializer(request.user).data, 200)










