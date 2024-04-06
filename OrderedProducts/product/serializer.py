from rest_framework import serializers
from .models import OrderedProducts

class OrderAddressSerializer(serializers.ModelSerializer):
    class Meta:
        model = OrderedProducts
        fields = [ 'orderdetails']


