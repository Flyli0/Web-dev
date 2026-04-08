from rest_framework.response import Response
from ..serializers import ProductSerializer
from rest_framework.views import APIView
from ..models import Product

class product_list_cbv(APIView):

    def get(self, request):
        products = Product.objects.all()
        serializer = ProductSerializer(products, many = True)
        return Response(serializer.data, status=200)
    def post(self,request):
        serializer = ProductSerializer(data = request.data)
        serializer.is_valid(raise_exception = True)
        serializer.save()
        return Response(serializer.data)

class product_detail_cbv(APIView):
    def get(self, request, id):
        products = Product.objects.get(id=id)
        serializer = ProductSerializer(instance=products)
        return Response(serializer.data)
    def put(self, request, id):
        products = Product.objects.get(id=id)
        serializer = ProductSerializer(instance = products, data = request.data)
        serializer.is_valid(raise_exception=True)
        return Response(serializer.data)
    def delete(self,request,id):
        products = Product.objects.get(id=id)
        products.delete()
        return Response()