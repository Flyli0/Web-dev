from django.urls import path, include
from .views import (ProductView, CategoryView, ProductDetailView, CategoryDetailView, CategoryProductView, ProductViewSet,
                    ProductsByCategoryListView, CategoriesViewSet)
from rest_framework.routers import DefaultRouter
from .viewss.fbv import product_detail_fbv, product_list_fbv
from .viewss.cbv import product_detail_cbv, product_list_cbv
from .viewss.mbv import product_list_mixinView, ProductDetailMixinView
from .viewss.gbv import GenericProductListView, GenericProductDetailView, GenericCategoryListView, GenericCategoryDetailView, CategoryProductAPIView

router = DefaultRouter()
router.register(r'products', ProductViewSet, basename="product")
router.register(r'categories', CategoriesViewSet, basename="category")

urlpatterns = [
    #function based views paths
    #path('products/', product_list_fbv),
    #path('products/<int:id>/', product_detail_fbv),

    #class based views
    #path('products/', product_list_cbv.as_view()),
    #path('products/<int:id>/', product_detail_cbv.as_view()),

    #mixins based view
    #path('products/', product_list_mixinView.as_view()),
    #path('products/<int:product_id>/', ProductDetailMixinView.as_view()),

    #Generic based view
    path('products/', GenericProductListView.as_view()),
    path('products/<int:product_id>/', GenericProductDetailView.as_view()),
    path('categories/', GenericCategoryListView.as_view()),
    path('categories/<int:category_id/', GenericCategoryDetailView.as_view()),
    path('categories/<int:category_id>/products/', CategoryProductAPIView.as_view())

    #path('categories/', CategoryView.as_view()),
    #path('categories/<int:id>/', CategoryDetailView.as_view()),


    #path('categories/<int:id>/products/', CategoryProductView.as_view()),
    #path('', include(router.urls)),
]
