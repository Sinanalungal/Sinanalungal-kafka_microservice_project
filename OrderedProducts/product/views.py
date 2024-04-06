from rest_framework.views import APIView
from rest_framework.response import Response
from .models import OrderedProducts
from .serializer import OrderAddressSerializer

class Ordered(APIView):
    def post(self, request):
        orderedproducts = OrderedProducts.objects.filter(username=request.data["email"]).all()
        serializer = OrderAddressSerializer(orderedproducts, many=True)
        serialized_data = serializer.data
        print(serialized_data)
        return Response(serialized_data)
