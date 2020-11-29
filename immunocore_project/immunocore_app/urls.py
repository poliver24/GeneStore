from django.conf.urls import url
from . import views


urlpatterns = [
    url(
        r'^api/v1/genes/(?P<pk>[0-9]+)$',
        views.get_delete_update_gene,
        name='get_delete_update_gene'
    ),
    url(
        r'^api/v1/genes/$',
        views.get_post_genes,
        name='get_post_genes'
    ),
    url(
        r'^api/v1/proteins/(?P<pk>[0-9]+)$',
        views.get_delete_update_protein,
        name='get_delete_update_protein'
    ),
    url(
        r'^api/v1/proteins/$',
        views.get_post_proteins,
        name='get_post_proteins'
    )
]