# Generated by Django 3.1.3 on 2020-11-30 18:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('immunocore_app', '0004_auto_20201130_1332'),
    ]

    operations = [
        migrations.AlterField(
            model_name='gene',
            name='name',
            field=models.CharField(max_length=255, unique=True),
        ),
        migrations.AlterField(
            model_name='protein',
            name='name',
            field=models.CharField(max_length=255, unique=True),
        ),
        migrations.AlterField(
            model_name='protein',
            name='sequence',
            field=models.CharField(max_length=10000, unique=True),
        ),
    ]
