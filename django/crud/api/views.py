from django.contrib.auth.models import User
from rest_framework import viewsets
from rest_framework import permissions
from crud.api.serializers import ReviewSerializer
from .models import Review


class ReviewViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer