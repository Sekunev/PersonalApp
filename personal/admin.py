from django.contrib import admin
from .models import Personal, Department

# Register your models here.
admin.site.register(Department)
admin.site.register(Personal)