from django.db import models
from django.core.validators import RegexValidator

gene_sequence = RegexValidator(r'^[ATCG]*$', 'Gene sequence can only contain characters A, T, C, or G')

protein_sequence = RegexValidator(r'^[A-Z]*$', 'Protein sequence can only contain letters A-Z')

# Create your models here.
class Gene(models.Model):
    """
    Gene Model
    Defines the attributes of a Gene
    """

    name = models.CharField(max_length=255, unique=True)
    sequence = models.CharField(max_length=10000, validators=[gene_sequence])


    # Method added for basic model testing
    def get_sequence(self):
        return self.name + ' has sequence ' + self.sequence + '.'

    # def __repr__(self):
    #     return self.name + ' has been added.'

    def __str__(self):
        return self.name

class Protein(models.Model):
    """
    Protein Model
    Defines the attributes of a Protein
    """

    name = models.CharField(max_length=255, unique=True)
    sequence = models.CharField(max_length=10000, unique=True, validators=[protein_sequence])
    related_gene = models.ForeignKey(Gene, on_delete=models.CASCADE)

    def get_sequence(self):
        return self.name + ' has sequence ' + self.sequence + '.'

    def __repr__(self):
        return self.name + ' has been added.'

    def __str__(self):
        return self.name

