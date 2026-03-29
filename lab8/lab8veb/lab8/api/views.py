from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Product, Category
from .serializers import ProductSerializer, CategorySerializer


# Create your views here.
class ProductView(APIView):
    def get(self, request):
        products = Product.objects.all()
        serializer = ProductSerializer(products,many=True)
        return Response(serializer.data)

    def post(self,request):
        serializer = ProductSerializer(data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status="HTTP_201")
        else: return Response(serializer.errors)

class ProductDetailView(APIView):
    def get(self, request, id:int):
        try:
            product = Product.objects.get(id=id)
        except Product.DoesNotExist:
            return Response({"error: Not Found"}, status="HTTP_404")
        serializer = ProductSerializer(product)
        return Response(serializer.data)




class CategoryView(APIView):
    def get(self, request):
        categories = Category.objects.all()
        serializer = CategorySerializer(categories, many=True)
        return Response(serializer.data)

    def post(self,request):
        serializer = CategorySerializer(data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors)


class CategoryDetailView(APIView):
    def get(self, request, id:int):
        try:
            category = Category.objects.get(id = id)
        except Category.DoesNotExist:
            return Response({"error: Not Found"}, status="HTTP_404")
        serializer = CategorySerializer(category)
        return Response(serializer.data)


class CategoryProductView(APIView):
    def get(self, request, id):
        category = Category.objects.get(id=id)
        products = Product.objects.filter(category=category)
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)
