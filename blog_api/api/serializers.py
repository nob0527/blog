from rest_framework import serializers
from django.contrib.auth import get_user_model
from .models import Post


class AuthorSerializer(serializers.ModelSerializer):
    class Meta:
        model = get_user_model()
        fields = [
            "first_name",
            "last_name",
            "username",
            "email"
        ]


class PostListSerializer(serializers.ModelSerializer):
    created = serializers.DateTimeField(format="%Y %b. %d %H:%M", read_only=True)
    author = AuthorSerializer()

    class Meta:
        model = Post
        fields = [
            "id",
            "title",
            "card_body",
            "author",
            "created"
        ]
