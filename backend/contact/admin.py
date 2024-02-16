from django.contrib import admin
from contact.models import Contact
# Register your models here.


class Contacts(admin.ModelAdmin):
    list_display = ('id', 'nome', 'email', 'telefone')
    list_display_links = ('id', 'nome')
    search_fields = ('nome', 'telefone')
    list_per_page = 10
    ordering = ('nome',)


admin.site.register(Contact, Contacts)
