# Generated by Django 3.1.3 on 2020-11-30 13:32

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('immunocore_app', '0003_protein'),
    ]

    operations = [
        migrations.RenameField(
            model_name='protein',
            old_name='gene',
            new_name='related_gene',
        ),
    ]