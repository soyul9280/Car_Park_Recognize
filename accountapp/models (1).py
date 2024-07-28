from django.db import models

class MyModel(models.Model):
    id = models.IntegerField(primary_key=True)
    val = models.IntegerField()