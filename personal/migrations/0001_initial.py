# Generated by Django 4.1.5 on 2023-01-10 05:18

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Department',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='Personal',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.CharField(max_length=50)),
                ('last_name', models.CharField(max_length=50)),
                ('is_staff', models.BooleanField(default=False)),
                ('title', models.CharField(choices=[('TL', 'Team Lead'), ('ML', 'Mid Lead'), ('JR', 'Junior')], max_length=2)),
                ('gender', models.SmallIntegerField(choices=[(1, 'Male'), (2, 'Female'), (2, 'Other'), (2, 'Prefer Not Say')])),
                ('salary', models.SmallIntegerField()),
                ('start_date', models.DateTimeField()),
                ('created_user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
                ('department', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='personals', to='personal.department')),
            ],
        ),
    ]
