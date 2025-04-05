# hackathons/urls.py
from django.urls import path
from django.contrib import admin
from .views import HackathonsListView
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/hackathons/', HackathonsListView.as_view(), name='hackathons-list'),
        path('', include('hackathons.urls')),  
]
