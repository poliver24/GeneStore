from rest_framework import serializers
from .models import Gene, Protein


class GeneSerializer(serializers.ModelSerializer):
    class Meta:
        model = Gene
        fields = ('id','name', 'sequence')

class ProteinSerializer(serializers.ModelSerializer):
    class Meta:
        model = Protein
        fields = ('id', 'gene', 'name', 'sequence')