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
        gene.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
       
    # update details of a single gene
    elif request.method == 'PUT':
        serializer = GeneSerializer(gene, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_204_NO_CONTENT)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'POST'])
def get_post_genes(request):
    # get all genes
    if request.method == 'GET':
        genes = Gene.objects.all()
        serializer = GeneSerializer(genes, many=True)
        return Response(serializer.data)
    # insert a new record for a gene
    elif request.method == 'POST':
        data = {
            'name': request.data.get('name'),
            'sequence': request.data.get('sequence')
        }
        serializer = GeneSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)