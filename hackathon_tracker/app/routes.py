from flask import Blueprint, jsonify
from .mlh_scraper import fetch_hackathons
from app.models import get_db
from flask_cors import CORS

api = Blueprint('api', __name__)
CORS(api)

@api.route('/hackathons', methods=['GET'])
@api.route('/hackathons/', methods=['GET'])

def get_hackathons():
    hackathons = fetch_hackathons()

    db = get_db()
    cursor = db.cursor()
    cursor.execute('DELETE FROM hackathons')
    for h in hackathons:
        cursor.execute('''
            INSERT INTO hackathons (title, organizer, start_date, end_date, url)
            VALUES (?, ?, ?, ?, ?)
        ''', (h['name'], h['mode'], h['date'], h['date'], h['link']))


    db.commit()

    return jsonify(hackathons)
