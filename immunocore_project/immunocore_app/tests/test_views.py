import json
from rest_framework import status
from django.test import TestCase, Client
from django.urls import reverse
from ..models import Gene, Protein
from ..serializers import GeneSerializer, ProteinSerializer


# initialize the APIClient app
client = Client()