from django.db import models

# Create your models here.
class OrderedProducts(models.Model):
    username = models.CharField(max_length=200,null=False,blank=False)
    orderdetails = models.JSONField(null=False,blank=False)