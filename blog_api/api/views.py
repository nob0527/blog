from rest_framework.generics import ListAPIView
from .models import Post
from .serializers import PostListSerializer


class BlogList(ListAPIView):
    queryset = Post.objects.order_by("-created")
    serializer_class = PostListSerializer
