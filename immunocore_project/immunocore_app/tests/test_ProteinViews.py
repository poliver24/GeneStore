import json
from rest_framework import status
from django.test import TestCase, Client
from django.urls import reverse
from ..models import Protein, Gene
from ..serializers import ProteinSerializer


# initialize the APIClient app
client = Client()

class GetAllProteinsTest(TestCase):
    """ Test module for GET all genes API """

    def setUp(self):

        Gene.objects.create(
            name='TP53', sequence='CCAG')
        Gene.objects.create(
            name='TNF', sequence='CTGA')

        gene_TP53 = Gene.objects.get(name='TP53')
        gene_TNF = Gene.objects.get(name='TNF')

        Protein.objects.create(
            gene=gene_TP53, name='isoform 5', sequence='MDLVLK')
        Protein.objects.create(
            gene=gene_TNF, name='isoform 2', sequence='PGQEA')

    def test_get_all_genes(self):
        # get API response
        response = client.get(reverse('get_post_proteins'))
        # get data from db
        proteins = Protein.objects.all()
        serializer = ProteinSerializer(proteins, many=True)
        self.assertEqual(response.data, serializer.data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

class GetSingleProteinTest(TestCase):
    """ Test module for GET single Protein API """

    def setUp(self):
        Gene.objects.create(
            name='TP53', sequence='CCAG')
        Gene.objects.create(
            name='TNF', sequence='CTGA')

        gene_TP53 = Gene.objects.get(name='TP53')
        gene_TNF = Gene.objects.get(name='TNF')

        self.isoform_5 = Protein.objects.create(gene=gene_TP53, name='isoform 5', sequence='MDLVLK')
        self.isoform_2 = Protein.objects.create(gene=gene_TNF, name='isoform 2', sequence='PGQEA')

    def test_get_valid_single_protein(self):
        response = client.get(
            reverse('get_delete_update_protein', kwargs={'pk': self.isoform_2.pk}))
        protein = Protein.objects.get(pk=self.isoform_2.pk)
        serializer = ProteinSerializer(protein)
        self.assertEqual(response.data, serializer.data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_get_invalid_single_protein(self):
        response = client.get(
            reverse('get_delete_update_protein', kwargs={'pk': 30}))
        self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND)

class CreateNewProteinTest(TestCase):
    """ Test module for inserting a new protein """

    def setUp(self):
        Gene.objects.create(
            name='TP53', sequence='CCAG')

        gene_TP53 = Gene.objects.get(name='TP53')


        self.valid_payload = {
            'gene': gene_TP53.pk,
            'name': 'isoform 5',
            'sequence': 'MDLVLK',
        }
        self.invalid_payload = {
            'geme': '',
            'name': 'isoform 2',
            'sequence': 'PGQEA' 
        }

    def test_create_valid_protein(self):
        response = client.post(
            reverse('get_post_proteins'),
            data=json.dumps(self.valid_payload),
            content_type='application/json'
        )
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

    def test_create_invalid_protein(self):
        response = client.post(
            reverse('get_post_proteins'),
            data=json.dumps(self.invalid_payload),
            content_type='application/json'
        )
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)