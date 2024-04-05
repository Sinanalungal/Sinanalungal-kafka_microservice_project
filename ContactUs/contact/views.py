from rest_framework.views import APIView
from rest_framework.response import Response
from .serializer import ContactUsSerializer
import json
from django.core.mail import send_mail

class ContactUsView(APIView):
    def post(self, request):
        serializer = ContactUsSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            print(serializer.data)
            return Response({ "message":"Message Send Successfully .."})
        else:
            return Response({"data":serializer.errors,"message":"something went wrong"})
