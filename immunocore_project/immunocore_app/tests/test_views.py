import json
from rest_framework import status
from django.test import TestCase, Client
from django.urls import reverse
from ..models import Gene, Protein
from ..serializers import GeneSerializer, ProteinSerializer


# initialize the APIClient app
client = Client()

class GetAllGenesTest(TestCase):
    """ Test module for GET all genes API """

    def setUp(self):
        Gene.objects.create(
            name='TP53', sequence='CCAG')
        Gene.objects.create(
            name='TNF', sequence='CTGA')
        Gene.objects.create(
            name='EGFR', sequence='CCGG')
        Gene.objects.create(
            name='VEGFA', sequence='TTGA')

    def test_get_all_genes(self):
        # get API response
        response = client.get(reverse('get_post_genes'))
        # get data from db
        genes = Gene.objects.all()
        serializer = GeneSerializer(genes, many=True)
        self.assertEqual(response.data, serializer.data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)