from rest_framework.response import Response
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView

from rest_framework import status
from ..models import Protein
from ..serializers import ProteinSerializer


class ListProteins(ListCreateAPIView):
    """
    View to list all genes & Add new Gene
    """
    queryset = Protein.objects.all()
    serializer_class = ProteinSerializer

class SingleProtein(RetrieveUpdateDestroyAPIView):
    """
    View to Get, Update, & Delete a Single Gene
    """
    queryset = Protein.objects.all()
    serializer_class = ProteinSerializer
