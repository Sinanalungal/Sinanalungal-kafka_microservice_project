from django.db import models


class Products(models.Model):
    name = models.CharField(max_length=255, null=False, blank=False)
    price = models.DecimalField(max_digits=10, decimal_places=2, null=False, blank=False)
    rating = models.DecimalField(max_digits=10, decimal_places=1, null=False, blank=False)
    image=models.ImageField(upload_to='images/',null=True,blank=True)

