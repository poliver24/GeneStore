# Generated by Django 3.1.3 on 2020-11-28 23:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('immunocore_app', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='gene',
            name='sequence',
            field=models.CharField(max_length=10000),
        ),
    ]
