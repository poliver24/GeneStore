from django.db import models

# Create your models here.
class Gene(models.Model):
    """
    Gene Model
    Defines the attributes of a Gene
    """

    name = models.CharField(max_length=255)
    sequence = models.CharField(max_length=10000)


    # Method added for basic model testing
    def get_sequence(self):
        return self.name + ' has sequence ' + self.sequence + '.'

    def __repr__(self):
        return self.name + ' has been added.'

class Protein(models.Model):
    """
    Protein Model
    Defines the attributes of a Protein
    """

    gene = models.ForeignKey(Gene, on_delete=models.CASCADE)
    name = models.CharField(max_length=255)
    sequence = models.CharField(max_length=10000)

    def get_sequence(self):
        return self.name + ' has sequence ' + self.sequence + '.'

    def __repr__(self):
        return self.name + ' has been added.'