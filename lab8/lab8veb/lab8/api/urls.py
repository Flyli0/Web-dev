from django.urls import path, include
from .views import (ProductView, CategoryView, ProductDetailView, CategoryDetailView, CategoryProductView, ProductViewSet,
                    ProductsByCategoryListView, CategoriesViewSet)
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'products', ProductViewSet, basename="product")
router.register(r'categories', CategoriesViewSet, basename="category")

urlpatterns = [
    #path('products/', ProductView.as_view()),
    #path('categories/', CategoryView.as_view()),
    #path('products/<int:id>/', ProductDetailView.as_view()),
    #path('categories/<int:id>/', CategoryDetailView.as_view()),
    #path('categories/<int:id>/products/', CategoryProductView.as_view()),
    path('', include(router.urls)),
]
