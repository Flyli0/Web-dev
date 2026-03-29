from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Product, Category
from .serializers import ProductSerializer, CategorySerializer


# Create your views here.
class ProductView(APIView):
    def get(self, request):
        products = Product.field.all()
        serializer = ProductSerializer(products,many=True)
        return Response(serializer.data)


