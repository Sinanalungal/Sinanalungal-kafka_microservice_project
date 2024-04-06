from django.db import models

class Order(models.Model):
    username = models.CharField(max_length=200,null=False,blank=False)
    fullname = models.CharField(max_length=200,null=False,blank=False)
    house = models.CharField(max_length=200,null=False,blank=False)
    street = models.CharField(max_length=200,null=False,blank=False)
    city = models.CharField(max_length=200,null=False,blank=False)
    zipcode = models.CharField(max_length=200,null=False,blank=False)
    country = models.CharField(max_length=200,null=False,blank=False)
    product = models.JSONField(null=False,blank=False)


