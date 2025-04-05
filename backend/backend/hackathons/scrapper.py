from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from bs4 import BeautifulSoup

def fetch_devpost_hackathons():
    driver = webdriver.Chrome()  # Or use another browser driver like Firefox
    driver.get("https://devpost.com/hackathons")
    
    # Wait for the page to load (you can adjust this as necessary)
    driver.implicitly_wait(10)

    # Get the page source after it loads
    soup = BeautifulSoup(driver.page_source, "html.parser")
    hackathons = []

    # Same logic as above to extract the hackathon data
    for card in soup.find_all("div", class_="hackathon-tile"):
        title = card.find("h3").text.strip() if card.find("h3") else "No title"
        link = card.find("a", class_="tile-anchor")["href"] if card.find("a", class_="tile-anchor") else "No link"
        deadline = card.find("div", class_="submission-period").text.strip() if card.find("div", class_="submission-period") else "No deadline"

        hackathons.append({
            "title": title,
            "link": "https://devpost.com" + link,
            "deadline": deadline
        })
    
    driver.quit()
    return hackathons

if __name__ == "__main__":
    print("Scraping started...")
    hackathons = fetch_devpost_hackathons()
    if hackathons:
        print(f"Found {len(hackathons)} hackathons:")
        for hackathon in hackathons:
            print(f"Title: {hackathon['title']}, Link: {hackathon['link']}, Deadline: {hackathon['deadline']}")
    else:
        print("No hackathons found.")
