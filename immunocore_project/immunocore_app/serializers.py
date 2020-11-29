from rest_framework import serializers
from .models import Gene, Protein


class GeneSerializer(serializers.ModelSerializer):
    class Meta:
        model = Gene
        fields = ('name', 'sequence')

class ProteinSerializer(serializers.ModelSerializer):
    class Meta:
        model = Protein
        fields = ('gene', 'name', 'sequence')