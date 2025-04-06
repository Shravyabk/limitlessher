from rest_framework import generics
from .models import Hackathon, Scholarship
from .serializers import HackathonSerializer, ScholarshipSerializer

class HackathonListCreateView(generics.ListCreateAPIView):
    queryset = Hackathon.objects.all()
    serializer_class = HackathonSerializer

class ScholarshipListCreateView(generics.ListCreateAPIView):
    queryset = Scholarship.objects.all()
    serializer_class = ScholarshipSerializer
