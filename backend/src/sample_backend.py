from flask import Flask
from flask import request
from flask import jsonify
# for linking frontend-backend
from flask_cors import CORS
# for mongo db
from model_mongodb import User
# for parent nodes
from parent_node import ParentNode

app = Flask(__name__)
# CORS stands for Cross Origin Requests.
# Here we'll allow requests coming from any domain. Not recommended for production environment.
CORS(app)

@app.route('/artist', methods=['GET', 'POST'])
def get_artist():
    if request.method == 'GET':
        artist_name = request.args.get('name')
        if artist_name:
            artist = ParentNode.get_artist_data(artist_name)
        else:
            artist = {"name": "search_field_empty"}
        resp = jsonify(artist), 201
        return resp
    else:
        resp = jsonify("ok"), 201
        return resp