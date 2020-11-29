from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Protein
from .serializers import ProteinSerializer


@api_view(['GET', 'DELETE', 'PUT'])
def get_delete_update_protein(request, pk):
    try:
        protein = Protein.objects.get(pk=pk)
    except Protein.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    # get details of a single protein
    if request.method == 'GET':
        return Response({})
    # delete a single protein
    elif request.method == 'DELETE':
        return Response({})
    # update details of a single protein
    elif request.method == 'PUT':
        return Response({})


@api_view(['GET', 'POST'])
def get_post_proteins(request):
    # get all proteins
    if request.method == 'GET':
        return Response({})
    # insert a new record for a protein
    elif request.method == 'POST':
        return Response({})