from django.urls import path
from . import views


urlpatterns = [
    path('api/genes/<int:pk>/', views.SingleGene.as_view(), name='get_delete_update_gene'),
    path('api/genes/', views.ListGenes.as_view(), name='get_post_genes'),
    path('api/proteins/<int:pk>/', views.SingleProtein.as_view(), name='get_delete_update_protein'),
    path('api/proteins/', views.ListProteins.as_view(), name='get_post_proteins')
]