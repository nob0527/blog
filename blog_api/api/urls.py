from django.urls import path
from .views import BlogList, BlogDetailsView

urlpatterns = [
    path('', BlogList.as_view()),
    path('posts/<slug>/', BlogDetailsView.as_view()),
]