from rest_framework.generics import ListAPIView
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Post
from .serializers import PostListSerializer, PostDetailsSerializer


class BlogList(ListAPIView):
    queryset = Post.objects.order_by("-created")
    serializer_class = PostListSerializer


class BlogDetailsView(APIView):
    def get(self, request, slug):
        post = Post.objects.get(slug=slug)
        serializer = PostDetailsSerializer(post)
        return Response(serializer.data)
