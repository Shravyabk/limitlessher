from flask import Flask
from app.models import init_db

def create_app():
    app = Flask(__name__)
    app.config['DATABASE'] = 'instance/hackathons.db'

    init_db(app)

    from app.routes import api
    app.register_blueprint(api, url_prefix='/api')

    return app
