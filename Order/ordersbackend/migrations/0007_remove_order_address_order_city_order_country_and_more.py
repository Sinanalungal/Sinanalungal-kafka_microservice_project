# Generated by Django 5.0.3 on 2024-04-01 10:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ordersbackend', '0006_alter_order_product'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='order',
            name='address',
        ),
        migrations.AddField(
            model_name='order',
            name='city',
            field=models.CharField(default=1, max_length=200),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='order',
            name='country',
            field=models.CharField(default=1, max_length=200),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='order',
            name='fullname',
            field=models.CharField(default='full_name', max_length=200),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='order',
            name='house',
            field=models.CharField(default=12, max_length=200),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='order',
            name='street',
            field=models.CharField(default=1, max_length=200),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='order',
            name='username',
            field=models.CharField(default=1, max_length=200),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='order',
            name='zipcode',
            field=models.CharField(default=1, max_length=200),
            preserve_default=False,
        ),
        migrations.DeleteModel(
            name='OrderAddress',
        ),
    ]
