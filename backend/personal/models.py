from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Department(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name

    # GLOBAL OLMASI İÇİN GENDERS VE TITLES'I class dışına alabilirsin.
class Personal(models.Model):
    GENDERS = (
        (1, 'Male'),
        (2, 'Female'),
        (3, 'Other'),
        (4, 'Prefer Not Say'),
    )
    TITLES = (
        ('TL', 'Team Lead'),
        ('ML', 'Mid Lead'),
        ('JR', 'Junior'),
    )
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    is_staff = models.BooleanField(default=False)
    title = models.CharField(max_length=2, choices=TITLES)
    gender = models.SmallIntegerField(choices=GENDERS)
    salary = models.SmallIntegerField(default=1250)
    department = models.ForeignKey(Department, on_delete=models.SET_NULL, null=True, related_name='personals')
    start_date = models.DateTimeField(auto_now_add=True)
    created_user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)

    def __str__(self):
        return self.get_gender_display()


