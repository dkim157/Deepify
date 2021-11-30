# Deepify

A web app that makes browsing music easier with Spotify's API

## Environment Setup
Setup Backend
 1. Navigate to Deepify/backend/src
 2. run "./start-backend" \n

Setup Frontend 
 1. Navigate to Deepify/frontend/src 
 2. run the following commands: 
  - export SPOTIPY_CLIENT_ID='your-spotify-client-id' 
  - export SPOTIPY_CLIENT_SECRET='your-spotify-client-secret' 
  - npm react-spotify-player 

### Prettier for JavaScript Formatting 
(source: [create-react-app.dev/docs/setting-up-your-editor](https://create-react-app.dev/docs/setting-up-your-editor))
1. go to VSCode extensions and install 'Prettier - Code formatter'
2. alternatively 'npm install --save husky lint-staged prettier' to format code when committed
### PEP8 Style Checker for Python 
(source: [pypi.org/project/pycodestyle](https://pypi.org/project/pycodestyle/))
1. to install, 'pip install pycodestyle'
2. to use, 'pycodestyle --first example.py'


## File Tree

```
.
├── README.md
├── backend
│   ├── src
│   │   ├── __pycache__
│   │   ├── data.json
│   │   ├── model_mongodb.py
│   │   ├── parent_node.py
│   │   ├── sample_backend.py
│   │   ├── test_sample_backend.py
│   │   └── travis.yml
│   └── venv
└── frontend
    ├── src
    │   ├── Form.js
    │   ├── index.css
    │   ├── index.js
    │   ├── MyApp.js
    │   └── Table.js
    ├── node_modules
    ├── public
    ├── package-lock.json
    ├── package.json
    ├── README.md
    └── .gitignore

```
## Diagrams
https://github.com/dkim157/Deepify/wiki/Diagrams-of-Deepify-Web-Application
