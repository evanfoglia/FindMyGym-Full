from django.db import models

class Review(models.Model):
    name = models.CharField(max_length=32)
    rev = models.CharField(max_length=300)
    reviewID = models.IntegerField()