from django.urls import path
from .views import HackathonListCreateView, ScholarshipListCreateView

urlpatterns = [
    path('hackathons/', HackathonListCreateView.as_view(), name='hackathon-list-create'),
    path('scholarships/', ScholarshipListCreateView.as_view(), name='scholarship-list-create'),
]
