from rest_framework.views import APIView
from rest_framework.response import Response


class BlogList(APIView):
    def get(self, request):
        return Response(
            {"msg": "Thins is the blog endpoint"}
        )
