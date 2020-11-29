from django.urls import path
from . import views


urlpatterns = [
    path('api/genes/<int:pk>/', views.get_delete_update_gene, name='get_delete_update_gene'),
    path('api/genes/', views.get_post_genes, name='get_post_genes'),
    path('api/proteins/<int:pk>/', views.get_delete_update_protein, name='get_delete_update_protein'),
    path('api/proteins/', views.get_post_proteins, name='get_post_proteins')
]

# urlpatterns = [
#     url(
#         r'^api/genes/(?P<pk>[0-9]+)$',
#         views.get_delete_update_gene,
#         name='get_delete_update_gene'
#     ),
#     url(
#         r'^api/genes/$',
#         views.get_post_genes,
#         name='get_post_genes'
#     ),
#     url(
#         r'^api/proteins/(?P<pk>[0-9]+)$',
#         views.get_delete_update_protein,
#         name='get_delete_update_protein'
#     ),
#     url(
#         r'^api/proteins/$',
#         views.get_post_proteins,
#         name='get_post_proteins'
#     )
# ]