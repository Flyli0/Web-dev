from rest_framework import views
from rest_framework.decorators import api_view
from rest_framework.response import Response

from ..models import Product
from ..serializers import ProductSerializer


@api_view(["GET","POST"])
def product_list_fbv(request):
    products = Product.objects.all()
    if request.method == "GET":
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)
    elif request.method == "POST":
        serializer = ProductSerializer(data = request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_created)

@api_view(["PUT","DELETE","GET"])
def product_detail_fbv(request,id):
    product = Product.objects.get(id=id)
    if product is None:
        return Response(status=status.HTTP_404_NOT_FOUND)
    if request.method == "GET":
        serializer = ProductSerializer(instance=product)
        return Response(serializer.data)
    elif request.method == "PUT":
        serializer = ProductSerializer(instance=product, data=request.data)
        serializer.is_valid(raise_exception = True)
        serializer.save()
        return Response(serializer.data)
    elif request.method == "DELETE":
        product.delete()
        return Response(status=HTTP_404_NOT_FOUND)
