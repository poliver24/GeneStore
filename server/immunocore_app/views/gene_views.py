from rest_framework.response import Response
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView

from rest_framework import status
from ..models import Gene
from ..serializers import GeneSerializer


class ListGenes(ListCreateAPIView):
    """
    View to list all genes & Add new Gene
    """
    queryset = Gene.objects.all()
    serializer_class = GeneSerializer

class SingleGene(RetrieveUpdateDestroyAPIView):
    """
    View to Get, Update, & Delete a Single Gene
    """
    queryset = Gene.objects.all()
    serializer_class = GeneSerializer
