from rest_framework import viewsets, filters
from contact.serializers import ContactSerializer
from contact.models import Contact
from django_filters.rest_framework import DjangoFilterBackend


class ContactsViewSet(viewsets.ModelViewSet):
    """Listing Contacts"""
    serializer_class = ContactSerializer
    filter_backends = [DjangoFilterBackend, filters.OrderingFilter, filters.SearchFilter]
    ordering_fields = ['nome']
    search_fields = ['nome', 'telefone']

    def get_queryset(self):
        queryset = Contact.objects.all()
        return queryset
    