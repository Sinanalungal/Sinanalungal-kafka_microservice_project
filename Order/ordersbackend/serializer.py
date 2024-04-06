from rest_framework import serializers
from .models import Order

class OrderAddressSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = ['username', 'fullname', 'house', 'street', 'city', 'zipcode', 'country','product']


