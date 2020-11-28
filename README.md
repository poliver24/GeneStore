# Immunocore Tech Test

As a scientist I want to be able to view, and record genes, and their associated proteins. A gene can be associated with 0 or more proteins, it has a DNA sequence. A protein is always associated to a gene, and it has an aminoacid sequence and a name


Models:
Gene:
  name --> str (the name of the gene)
  sequence -->  str (a sequence of A, T, C or G, those are the 4 nucleotides DNA is made of)

Protein:
  Gene --> The gene that creates this protein
  name --> str (the name of the protein)
  sequence --> str (a sequence of letters, these should be aminoacids which have their own alphabet, but using any letter will suffice)


Django backend, (if you want to use djangorestframework for a fully fledged restful style API that would be a plus https://www.django-rest-framework.org/)


React frontend, a view for a gene (where you can update it), a view for a protein (where you can update it), a view to create new gene, a view to create new proteins

As for the database, whatever works for you as long as it is relational (I mentioned SQLite because it is super easy to use, but we use postgres in house, and don't mind really as long as it is SQL)

For the presentation, if you want to run your own and walk us through it that would be fantastic (there will be technical and non technical people so try to explain for both audiences), also if you can make it available somewhere on github so that we can check the code that would be appreciated.

How you write it is up for you to judge.

Gene examples:

(This is a very good example of a very famous gene https://www.ncbi.nlm.nih.gov/gene/7157)
Gene:
  name --> TP53
 sequence: CCACCTGAAGTCCAAAAAGGGTCAGTCTACCTCCCGCCATAAAAAACTCATGTTCAAGACAGAAGGGCCTGACTCAGACTGACATTCTCCACTTCTTGTTCCCACTGACAGCCTCCCACCCCCATCTCTCCCTCCCCTGCCATTTTGGGTTTTGGGTCTTTGAACCCTTGCTTGCAATAGGTGTGCGTCAGAAGCACCCAGGACTTCCATTTGCTTTCCCGGGGCTCCACTGAACAAGTTGGCCTGCACTGGTGTTTTGTTGTGGGGAGGAGGATGGGGAGTAGGACATACCAGCTTAGATTTTAAGGTTTTTACTGTGAGGGATGTTTGGGAGATGTAAGAAATGTTCTTGCAGTTAAGGGTTAGTTTACAATCAGCCACATTCTAGGTAGGGGCCCACTTCACCGTACTAACCAGGGAAGCTGTCCCTCACTGTTGAATTTTCTCTAACTTCAAGGCCCATATCTGTGAAATGCTGGCATTTGCACCTACCTCACAGAGTGCATTGTGAGGGTTAATGAAATAATGTACATCTGGCCTTGAAACCACCTTTTATTACATGGGGTCTAGAACTTGACCCCCTTGAGGGTGCTTGTTCCCTCTCCCTGTTGGTCGGTGGGTTGGTAGTTTCTACAGTTGGGCAGCTGGTTAGGTAGAGGGAGTTGTCAAGTCTCTGCTGGCCCAGCCAAACCCTGTCTGACAACCTCTTGGTGAACCTTAGTACCTAAAAGGAAATCTCACCCCATCCCACACCCTGGAGGATTTCATCTCTTGTATATGATGATCTGGATCCACCAAGACTTGTTTTATGCTCAGGGTCAATTTCTTTTTTCTTTTTTTTTTTTTTTTTTCTTTTTCTTTGAGACTGGGTCTCGCTTTGTTGCCCAGGCTGGAGTGGAGTGGCGTGATCTTGGCTTACTGCAGCCTTTGCCTCCCCGGCTCGAGCAGTCCTGCCTCAGCCTCCGGAGTAGCTGGGACCACAGGTTCATGCCACCATGGCCACCAACTTTTGCATGTTTTGTAGAGATGGGGTCTCACAGTGTTGCCCAGGCTGGTCTCAAACTCCTGGGCTCAGGCGATCCACCTGTCTCAGCCTCCCAGAGTGCTGGGATTACAATTGTGAGCCACCACGTCCAGCTGGAAGGGTCAACATCTTTTACATTCTGCAAGCACATCTGCATTTTCACCCCACCCTTCCCCTCCTTCTCCCTTTTTATATCCCATTTTTATATCGATCTCTTATTTTACAATAAAACTTTGCTGCCA

Protein:
  Gene: TP53 (pointer to TP53 gene)
  name: isoform G
  sequence: MDDLMLSPDDIEQWFTEDPGPDEAPRMPEAAPPVAPAPAAPTPAAPAPAPSWPLSSSVPSQKTYQGSYGFRLGFLHSGTAKSVTCTYSPALNKMFCQLAKTCPVLWVDSTPPPGTRVRAMAIYKQSQHMTEVVRRCPHHERCSDSDGLAPPQHLIRVEGNLRVEYLDDRNTFRHSVVVPYEPPEVGSDCTTIHYNYMCNSSCMGGMNRRPILTIITLEDSSGNLLGRNSFEVRVCACPGRDRRTEEENLRKKGEPHHELPPGSTKRALPNNTSSSPQPKKKPLDGEYFTLQIRGRERFEMFRELNEALELKDAQAGKEPGGSRAHSSHLKSKGQSTSRHKKLMFKTEGPDSD

A more realistic Entry: https://www.ncbi.nlm.nih.gov/nuccore/NC_000012.12?strand=2&report=genbank&from=55954105&to=55973317
 where the CDS would be "equivalent" to proteins and the ORIGIN at the end would be the DNA sequence

Have a nice weekend.
