from rest_framework import serializers
from .models import *

class PersonalSerializer(serializers.ModelSerializer):
    # department = serializers.StringRelatedField()
    created_user = serializers.StringRelatedField()
    created_user_id = serializers.IntegerField()


    days_since_joined = serializers.SerializerMethodField()

    class Meta:
        model = Personal
        fields = ('id', "days_since_joined", 'first_name', 'last_name', 'is_staff', 'title', 'gender', 'salary', 'start_date', 'created_user', 'created_user_id','department')

    def get_days_since_joined(self, obj):
        import datetime
        current_time = datetime.datetime.now()
        print(current_time.day)  # 10
        return current_time.day - obj.start_date.day # day January 10, 2023 - 10:11:16 ile gün (10) getiriyoruz.

    def to_representation(self, instance):
        representation = super().to_representation(instance)
        representation['gender'] = dict(Personal.GENDERS)[representation['gender']]
        representation['title'] = dict(Personal.TITLES)[representation['title']]

        return representation

    def create(self, validated_data):
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
    id = serializers.StringRelatedField()

    class Meta:
        model = Department
        fields = ('id', 'name', 'personal_count', 'personals')

    def get_personal_count(self, obj):
        return obj.personals.count()

