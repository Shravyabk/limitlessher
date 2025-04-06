import cloudscraper
from bs4 import BeautifulSoup

def fetch_hackathons():
    url = "https://mlh.io/seasons/2025/events"
    
    scraper = cloudscraper.create_scraper()
    print(f"Fetching MLH events from {url}...")

    response = scraper.get(url)
    print(f"Response code: {response.status_code}")
    
    soup = BeautifulSoup(response.text, "html.parser")
    event_cards = soup.select(".event-wrapper")
    print(f"Found {len(event_cards)} event cards.")

    hackathons = []

    for event in event_cards:
        try:
            name = event.select_one(".event-name").text.strip()
            date = event.select_one(".event-date").text.strip()
            city = event.select_one(".event-location span[itemprop='city']").text.strip()
            state = event.select_one(".event-location span[itemprop='state']").text.strip()
            link = event.select_one("a.event-link")["href"]
            mode = event.select_one(".event-hybrid-notes span").text.strip()

            hackathons.append({
                "name": name,
                "date": date,
                "city": city,
                "state": state,
                "link": link,
                "mode": mode
            })
        except Exception as e:
            print(f"Error parsing event: {e}")

    print(f"Returning {len(hackathons)} events.")
    return hackathons
