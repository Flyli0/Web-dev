from django.urls import path
from .views import ProductView, CategoryView, ProductDetailView, CategoryDetailView, CategoryProductView

urlpatterns = [
    path('products/', ProductView.as_view()),
    path('categories/', CategoryView.as_view()),
    path('products/<int:id>/', ProductDetailView.as_view()),
    path('categories/<int:id>/', CategoryDetailView.as_view()),
    path('categories/<int:id>/products/', CategoryProductView.as_view()),
]
