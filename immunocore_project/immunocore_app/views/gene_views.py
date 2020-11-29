from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from ..models import Gene
from ..serializers import GeneSerializer


@api_view(['GET', 'DELETE', 'PUT'])
def get_delete_update_gene(request, pk):
    try:
        gene = Gene.objects.get(pk=pk)
    except Gene.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    # get details of a single gene
    if request.method == 'GET':
        serializer = GeneSerializer(gene)
        return Response(serializer.data)
    # delete a single gene
    elif request.method == 'DELETE':
        return Response({})
    # update details of a single gene
    elif request.method == 'PUT':
        return Response({})


@api_view(['GET', 'POST'])
def get_post_genes(request):
    # get all genes
    if request.method == 'GET':
        genes = Gene.objects.all()
        serializer = GeneSerializer(genes, many=True)
        return Response(serializer.data)
    # insert a new record for a gene
    elif request.method == 'POST':
        return Response({})