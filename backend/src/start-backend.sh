#!/bin/bash  
echo "starting backend  ( ⓛ ω ⓛ *) "

export FLASK_APP=sample_backend.py
export FLASK_ENV=development
export SPOTIPY_CLIENT_ID='7720e8ccde1b4727876ef582ea2ea1f4'
export SPOTIPY_CLIENT_SECRET='bbca19a9803b493aa2452852c6be6ade'
export SPOTIPY_REDIRECT_URI='your-app-redirect-url'

flask run


