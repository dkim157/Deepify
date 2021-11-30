# Deepify

A web app that utilizes Spotify's API to make browsing music easier. By entering an artist of one's choice, you will be able to see that artist's current top 5 tracks, a list of artists whom they have collabed with, and the song that feature both the artist and the collaborator. Clicking on a collaborator's name will display that artist's top 5 tracks as well as those who they have collabed with. The goal of this web app is to dive deeper into spotify and explore new artists by seeing how they are connected through collaborations.

## Environment Setup
**Setup Backend**
 1. Navigate to Deepify/backend/src
 2. run "./start-backend" \n

**Setup Frontend**
 1. Navigate to Deepify/frontend/src 
 2. run the following commands: 
  - export SPOTIPY_CLIENT_ID='your-spotify-client-id' 
  - export SPOTIPY_CLIENT_SECRET='your-spotify-client-secret' 
  - npm react-spotify-player 

## UI Prototype
(Last Updated October 19, 2021)
https://drive.google.com/file/d/1e2gVWYVGpzmR0QqcR_dSuGEGFb3_McMj/view?usp=sharing

## Formatting
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
https://bit.ly/3xFoKDc
