from rest_framework import serializers
from .models import Gene, Protein


class GeneSerializer(serializers.ModelSerializer):
    class Meta:
        model = Gene
        fields = ('id','name', 'sequence')

class ProteinSerializer(serializers.ModelSerializer):
    related_gene = serializers.SerializerMethodField(read_only=True)
    gene = serializers.CharField(write_only=True)
    class Meta:
        model = Protein
        fields = ('id', 'name', 'sequence', 'related_gene', 'gene')
        # read_only_fields = ('gene')

    def get_related_gene(self, obj):
        return GeneSerializer(obj.related_gene).data

    def create(self, validated_data):
        print(validated_data)
        gene_name = validated_data.pop('gene')
        gene = Gene.objects.get(name=gene_name)
        protein = Protein.objects.create(related_gene=gene, **validated_data)
        return protein