# Generated by Django 4.1.5 on 2023-01-10 05:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('personal', '0002_alter_personal_start_date'),
    ]

    operations = [
        migrations.AlterField(
            model_name='personal',
            name='start_date',
            field=models.DateTimeField(),
        ),
    ]
