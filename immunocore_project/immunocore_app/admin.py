from django.contrib import admin

# Register your models here.
from .models import Gene, Protein

admin.site.register(Gene)
admin.site.register(Protein)