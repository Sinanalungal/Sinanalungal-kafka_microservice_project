from django.urls import path
from .views import Order 

urlpatterns = [
    path('order/', Order.as_view(), name='home'),
]
