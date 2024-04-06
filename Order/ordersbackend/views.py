from rest_framework.views import APIView
from rest_framework.response import Response
from .serializer import OrderAddressSerializer
from kafka import KafkaProducer
import json
from django.core.mail import send_mail

class Order(APIView):
    def post(self, request):
        topic="product_ordered"
        serializer = OrderAddressSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            print(serializer.data)

            #__kafka producer will send messages from here___
            producer=KafkaProducer(bootstrap_servers=["localhost:9092"],value_serializer=lambda x:x)
            producer.send(topic,json.dumps(serializer.data).encode('utf-8'))

            #___order notification send from here___
            subject = 'Ordered Successfully'
            message = f"Your Order is Successfull:\n\n product: {serializer.data['product']['name']} \n price: {serializer.data['product']['price']}\n\n Thank you for ordering ...."
            print(message)
            from_email = 'st9423126@gmail.com'
            recipient_list = [serializer.data["username"]]
            print(recipient_list)
            send_mail(subject, message, from_email, recipient_list, fail_silently=False)

            return Response({"data":serializer.data, "message":"ordered successfully .."})
        else:
            return Response({"data":serializer.errors,"message":"something went wrong"})
