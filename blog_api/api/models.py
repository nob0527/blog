from django.db import models
from django.contrib.auth import get_user_model


class Post(models.Model):
    author = models.ForeignKey(get_user_model(), on_delete=models.CASCADE)

    title = models.CharField(max_length=200)
    card_body = models.TextField(max_length=1000)
    body = models.TextField(max_length=10000)
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
