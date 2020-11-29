import json
from rest_framework import status
from django.test import TestCase, Client
from django.urls import reverse
from ..models import Gene
from ..serializers import GeneSerializer


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


class GetSingleGeneTest(TestCase):
    """ Test module for GET single Gene API """

    def setUp(self):
        self.TP53 = Gene.objects.create(name='TP53', sequence='CCAG')
        self.TNF = Gene.objects.create(name='TNF', sequence='CTGA')

    def test_get_valid_single_gene(self):
        response = client.get(
            reverse('get_delete_update_gene', kwargs={'pk': self.TNF.pk}))
        gene = Gene.objects.get(pk=self.TNF.pk)
        serializer = GeneSerializer(gene)
        self.assertEqual(response.data, serializer.data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_get_invalid_single_gene(self):
        response = client.get(
            reverse('get_delete_update_gene', kwargs={'pk': 30}))
        self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND)

class CreateNewProteinTest(TestCase):
    """ Test module for inserting a new gene`S """

    def setUp(self):
        self.valid_payload = {
            'name': 'TP53',
            'sequence': 'CCAG',
        }
        self.invalid_payload = {
            'name': '',
            'sequence': 'CTGA' 
        }

    def test_create_valid_gene(self):
        response = client.post(
            reverse('get_post_genes'),
            data=json.dumps(self.valid_payload),
            content_type='application/json'
        )
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

    def test_create_invalid_gene(self):
        response = client.post(
            reverse('get_post_genes'),
            data=json.dumps(self.invalid_payload),
            content_type='application/json'
        )
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)