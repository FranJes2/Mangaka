# Generated by Django 3.2.9 on 2021-11-12 21:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_auto_20211107_1330'),
    ]

    operations = [
        migrations.CreateModel(
            name='Alumnos',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.TextField()),
                ('level', models.TextField()),
            ],
        ),
        migrations.AddField(
            model_name='course',
            name='price',
            field=models.TextField(default=''),
            preserve_default=False,
        ),
    ]