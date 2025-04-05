from django.db import models

class Hackathon(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    url = models.URLField()
    deadline = models.DateField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

class Scholarship(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    url = models.URLField()
    deadline = models.DateField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
