# Generated by Django 2.2.4 on 2023-09-28 05:09

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='MyModel',
            fields=[
                ('id', models.IntegerField(primary_key=True, serialize=False)),
                ('val', models.IntegerField()),
            ],
        ),
    ]
