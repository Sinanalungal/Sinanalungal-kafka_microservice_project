# Generated by Django 5.0.3 on 2024-04-01 05:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ordersbackend', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='products',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to='images/'),
        ),
    ]
