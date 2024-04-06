from django.urls import path
from .views import Ordered 

urlpatterns = [
    path('ordered_products/', Ordered.as_view(), name='home'),
]
