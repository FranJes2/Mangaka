# Generated by Django 3.2.9 on 2021-11-13 20:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0005_auto_20211112_1854'),
    ]

    operations = [
        migrations.AddField(
            model_name='course',
            name='hours',
            field=models.IntegerField(default=''),
            preserve_default=False,
        ),
    ]