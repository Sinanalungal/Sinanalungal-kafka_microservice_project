from django.db import models

# Create your models here.
class ContactUs(models.Model):
    name=models.CharField(max_length=200, blank=False ,null=False)
    email=models.CharField(max_length=200, blank=False ,null=False)
    place=models.CharField(max_length=200, blank=False,null=False)
    country=models.CharField(max_length=200, blank=False,null=False)
    message=models.TextField()
