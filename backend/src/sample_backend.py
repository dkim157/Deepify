from flask import Flask
from flask import request
from flask import jsonify
import json
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

users = {
    'users_list': []
}

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

@app.route('/')
def hello_world():
    return 'Hello, World!'

@app.route('/users', methods=['GET', 'POST'])
def get_users():
    if request.method == 'GET':
        search_username = request.args.get('name')
        search_job = request.args.get('job')
        if search_username and search_job:
            users = User().find_by_name_and_job(search_username, search_job)
        elif search_username:  # updated for db_access
            users = User().find_by_name(search_username)
        elif search_job:
            users = User().find_by_job(search_job)
        else:  # updated for db_access
            users = User().find_all()
        return {"users_list": users}
    elif request.method == 'POST':
        userToAdd = request.get_json()
        # updated for db_access
        # make DB request to add user
        newUser = User(userToAdd)
        newUser.save()
        resp = jsonify(newUser), 201
        return resp

@app.route('/users/<id>', methods=['GET', 'DELETE'])
def get_user(id):
    if request.method == 'GET':
       # update for db access
        user = User({"_id": id})
        if user.reload():
            return user
        else:
            return jsonify({"error": "User not found"}), 404
    elif request.method == 'DELETE':
        user = User({"_id": id})
        resp = user.remove()
        if resp['n'] == 1:
            resp = jsonify({}), 204
            return resp
        else:
            return jsonify({"error": "User not found"}), 404


def find_users_by_name_job(name, job):
    subdict = {'users_list': []}
    for user in users['users_list']:
        if user['name'] == name and user['job'] == job:
            subdict['users_list'].append(user)
    return subdict


def find_users_by_job(job):
    subdict = {'users_list': []}
    for user in users['users_list']:
        if user['job'] == job:
            subdict['users_list'].append(user)
    return subdict