from django.urls import path, include
from rest_framework import routers

from api.views import CourseViewSet
from api.views import GalleryViewSet

router = routers.DefaultRouter()
router.register(r'courses', CourseViewSet)
router.register(r'gallery', GalleryViewSet)

urlpatterns = [
    path('', include(router.urls))
]