from django.shortcuts import render
from .models import *
from .serializers import *
from rest_framework.viewsets import ModelViewSet, ReadOnlyModelViewSet
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import action

# Create your views here.
class PersonalMVS(ModelViewSet):
    queryset = Personal.objects.all()
    serializer_class = PersonalSerializer
    
class DepartmantGetMVS(ReadOnlyModelViewSet):
    queryset = Department.objects.all()
    serializer_class = DepartmentSerializer

    # @action(detail=True)  # default'u get olduğu için  metod adını yazmadık. detail=True olduğu için path ednPoint'inide göndermek gerekiyor.
    # def personals(self, request, pk=None):
    #     department = self.get_object()
    #     personals = department.personals.all()
    #     return personals
    # Respons içerisinde List Comprehensions kullanıldı.
    # path.students.all() içindeki students model içerisindeki related_name='students'dan geliyor.

class DepartmantDinamicMVS(ReadOnlyModelViewSet):
    queryset = Department.objects.all()
    serializer_class = DepartmantDinamicSerializer
    lookup_field = 'name'  # dinamic field için. 


