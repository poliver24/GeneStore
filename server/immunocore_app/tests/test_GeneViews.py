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

class CreateNewGeneTest(TestCase):
    """ Test module for inserting a new gene`S """

    def setUp(self):
        self.valid_payload = {
            'name': 'TP53',
            'sequence': 'CCAG',
        }
        self.empty_name = {
            'name': '',
            'sequence': 'CTGA' 
        }
        self.empty_sequence = {
            'name': 'TP55',
            'sequence': '' 
        }
        self.duplicate_name = {
            'name': 'TP53',
            'sequence': 'CTGA' 
        }
        self.duplicate_sequence = {
            'name': 'TP56',
            'sequence': 'CCAG' 
        }
        self.invalid_sequence = {
            'name': 'TP57',
            'sequence': 'POPPIN' 
        }

    def test_create_valid_gene(self):
        response = client.post(
            reverse('get_post_genes'),
            data=json.dumps(self.valid_payload),
            content_type='application/json'
        )
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

    def test_create_gene_empty_name(self):
        response = client.post(
            reverse('get_post_genes'),
            data=json.dumps(self.empty_name),
            content_type='application/json'
        )
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

    def test_create_gene_empty_sequence(self):
        response = client.post(
            reverse('get_post_genes'),
            data=json.dumps(self.empty_sequence),
            content_type='application/json'
        )
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
    
    def test_create_gene_duplicate_name(self):
        client.post(
            reverse('get_post_genes'),
            data=json.dumps(self.valid_payload),
            content_type='application/json'
        )
        response = client.post(
            reverse('get_post_genes'),
            data=json.dumps(self.duplicate_name),
            content_type='application/json'
        )
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

    def test_create_gene_duplicate_sequence(self):
        client.post(
            reverse('get_post_genes'),
            data=json.dumps(self.valid_payload),
            content_type='application/json'
        )
        response = client.post(
            reverse('get_post_genes'),
            data=json.dumps(self.duplicate_sequence),
            content_type='application/json'
        )
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
    
    def test_create_gene_invalid_sequence(self):
        response = client.post(
            reverse('get_post_genes'),
            data=json.dumps(self.invalid_sequence),
            content_type='application/json'
        )
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)


class UpdateSingleGeneTest(TestCase):
    """ Test module for updating an existing gene record """

    def setUp(self):
        self.TP53 = Gene.objects.create(
            name='TP53', sequence='CCAG')
        self.TNF = Gene.objects.create(
            name='TNF', sequence='CTGA')
        self.valid_payload = {
            'name': 'EGFR',
            'sequence': 'CCGG',
        }
        self.invalid_payload = {
            'name': '',
            'sequence': 'TTGA',
        }

    def test_valid_update_gene(self):
        response = client.put(
            reverse('get_delete_update_gene', kwargs={'pk': self.TP53.pk}),
            data=json.dumps(self.valid_payload),
            content_type='application/json'
        )
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_invalid_update_gene(self):
        response = client.put(
            reverse('get_delete_update_gene', kwargs={'pk': self.TP53.pk}),
            data=json.dumps(self.invalid_payload),
            content_type='application/json')
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)


class DeleteSingleGeneTest(TestCase):
    """ Test module for deleting an existing gene record """

    def setUp(self):
        self.TP53 = Gene.objects.create(
            name='TP53', sequence='CCAG')
        self.TNF = Gene.objects.create(
            name='TNF', sequence='CTGA')

    def test_valid_delete_gene(self):
        response = client.delete(
            reverse('get_delete_update_gene', kwargs={'pk': self.TNF.pk}))
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)

    def test_invalid_delete_gene(self):
        response = client.delete(
            reverse('get_delete_update_gene', kwargs={'pk': 30}))
        self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND)