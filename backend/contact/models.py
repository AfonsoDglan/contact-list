from django.db import models

# Create your models here.


class Contact(models.Model):
    nome = models.CharField(max_length=255, blank=False, null=False)
    telefone = models.CharField(max_length=15, blank=False, null=False, unique=True)
    email = models.EmailField(max_length=255, blank=False, null=False)
    foto = models.ImageField()

    def __str__(self) -> str:
        return self.nome
