# hackathons/management/commands/fetch_hackathons.py
from django.core.management.base import BaseCommand
from hackathons.scrapper import fetch_devpost_hackathons

class Command(BaseCommand):
    help = 'Fetch hackathons from DevPost'

    def handle(self, *args, **kwargs):
        hackathons = fetch_devpost_hackathons()
        for hackathon in hackathons:
            self.stdout.write(self.style.SUCCESS(f"Title: {hackathon['title']}, Deadline: {hackathon['deadline']}"))
