from django.conf.urls import url
from . import views


urlpatterns = [
    url(
        r'^api/genes/(?P<pk>[0-9]+)$',
        views.get_delete_update_gene,
        name='get_delete_update_gene'
    ),
    url(
        r'^api/genes/$',
        views.get_post_genes,
        name='get_post_genes'
    ),
    url(
        r'^api/proteins/(?P<pk>[0-9]+)$',
        views.get_delete_update_protein,
        name='get_delete_update_protein'
    ),
    url(
        r'^api/proteins/$',
        views.get_post_proteins,
        name='get_post_proteins'
    )
]