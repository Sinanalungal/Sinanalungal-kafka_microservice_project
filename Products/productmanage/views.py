from django.views import View
from django.http import HttpResponse, JsonResponse
from rest_framework.response import Response
from .serializer import ProductsSerializer
from .models import Products
from kafka import KafkaProducer
import json


class ProductsView(View):
    def get(self, request):
        products = Products.objects.all()
        serializer = ProductsSerializer(products, many=True)
        return JsonResponse(serializer.data, safe=False)





