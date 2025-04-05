# hackathons/views.py
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .scrapper import fetch_devpost_hackathons

class HackathonsListView(APIView):
    def get(self, request, *args, **kwargs):
        # Fetch hackathons data from Devpost using the scraper
        try:
            hackathons = fetch_devpost_hackathons()

            if hackathons:
                print("Hackathons fetched:", hackathons)  # Debug print
                return Response(hackathons, status=status.HTTP_200_OK)
            else:
                print("No hackathons found.")  # Debug print
                return Response({"error": "No hackathons found or unable to fetch data."}, status=status.HTTP_404_NOT_FOUND)

        except Exception as e:
            print(f"Error occurred: {e}")  # Debug print
            # Handle errors that may occur while fetching data
            return Response({"error": f"An error occurred: {str(e)}"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
