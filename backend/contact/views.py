from rest_framework import viewsets, filters
from contact.serializers import ContactSerializer
from contact.models import Contact
from django_filters.rest_framework import DjangoFilterBackend


class ContactsViewSet(viewsets.ModelViewSet):
    """Listing Contacts"""
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer
    filter_backends = [DjangoFilterBackend, filters.OrderingFilter, filters.SearchFilter]
    ordering_fields = ['nome']
    search_fields = ['nome', 'telefone']
