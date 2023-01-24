from rest_framework import serializers
from .models import *

class PersonalSerializer(serializers.ModelSerializer):
    created_user = serializers.StringRelatedField()
    # created_user_id = serializers.IntegerField()  #* created_user_id'yi buşekilde yaptığımızda post işleminde login olan create etmiş olmuyor. Bunu sağlamak için create yöntemi ile created_user_id'nin valuesini request yapanın id'si ile değiştiriyoruz.
    days_since_joined = serializers.SerializerMethodField()

    class Meta:
        model = Personal
        fields = ('id', "days_since_joined", 'first_name', 'last_name', 'is_staff', 'title', 'gender', 'salary', 'start_date', 'created_user','department')

    def get_days_since_joined(self, obj):
        import datetime
        current_time = datetime.datetime.now()
        # print(current_time.day)  # 10
        return current_time.day - obj.start_date.day # day January 10, 2023 - 10:11:16 ile gün (10) getiriyoruz.
# Aşağıda modelde tanımlanan GENDERS ve TITLES bulunuyor. Bunların Api'de string şeklinde görüntülenmesi için aşağıda iki yöntem bulunuyor.
    # GENDERS = (
    #     (1, 'Male'),
    #     (2, 'Female'),
    #     (3, 'Other'),
    #     (4, 'Prefer Not Say'),
    # )
    # TITLES = (
    #     ('TL', 'Team Lead'),
    #     ('ML', 'Mid Lead'),
    #     ('JR', 'Junior'),
    # )
# 1. Yöntem:
    # gender = serializers.SerializerMethodField()
    # def get_gender(self, obj):
    #     return obj.get_gender_display()
  
    # title = serializers.SerializerMethodField()
    # def get_title(self, obj):
    #     return obj.get_title_display()
# 2. Yöntem:
    def to_representation(self, instance):
        representation = super().to_representation(instance)
        representation['gender'] = dict(Personal.GENDERS)[representation['gender']]
        representation['title'] = dict(Personal.TITLES)[representation['title']]
        representation['sekune'] = 'abdullah'

        return representation

# Presonel create işlemini, Login olan personelin yaptığını, Api'de göstermek için kullandığımız override ettiğimiz create metodu.
    def create(self, validated_data):
        validated_data["created_user_id"] = self.context["request"].user.id
        return super().create(validated_data)



class DepartmentSerializer(serializers.ModelSerializer):
    personal_count = serializers.SerializerMethodField()
    # personals = PersonalSerializer(many=True, required=True)
    id = serializers.StringRelatedField()

    class Meta:
        model = Department
        fields = ('id', 'name', 'personal_count')
        # fields = ('id', 'name', 'personal_count', 'personals')

    def get_personal_count(self, obj):
        return obj.personals.count()

class DepartmantDinamicSerializer(serializers.ModelSerializer):
    personal_count = serializers.SerializerMethodField()
    personals = PersonalSerializer(many=True, required=True)
    # id = serializers.StringRelatedField()

    class Meta:
        model = Department
        fields = ('id', 'name', 'personal_count', 'personals')

    def get_personal_count(self, obj):
        return obj.personals.count()

