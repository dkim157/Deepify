# spotify imports
import spotipy
import pprint
from spotipy.oauth2 import SpotifyClientCredentials

MAX_TOP_TRACKS = 5

auth_manager = SpotifyClientCredentials()
sp = spotipy.Spotify(auth_manager=auth_manager)

class Track():
    def __init__(self, title, uri, preview_url):
        self.title = title
        self.uri = uri
        self.preview_url = preview_url

class ParentNode():
    def __init__(self, name, uri, top_tracks):
        self.name = name
        self.uri = uri
        self.top_tracks = top_tracks

def populate_top_tracks(artist_uri):
    top_tracks_json = sp.artist_top_tracks(artist_uri, country='US')
    track_list = []
    for i in range(MAX_TOP_TRACKS):
        title = top_tracks_json['tracks'][i]['name']
        uri = top_tracks_json['tracks'][i]['uri']
        preview_url = top_tracks_json['tracks'][i]['preview_url']
        track_list.append(Track(title, uri, preview_url))
    return track_list

def create_parent_node(search_value):
    if (search_value is None) or (search_value == ''):
        print("not valid")
    else:
        search_result = sp.search(search_value.lower(), limit=1, offset=0, type='artist', market='US')

        name = search_result['artists']['items'][0]['name']
        uri = search_result['artists']['items'][0]['uri']
        top_tracks = populate_top_tracks(uri)
        return ParentNode(name, uri, top_tracks)

if __name__ == '__main__':
    node = create_parent_node('h.e.r')
    print(node.top_tracks[0].preview_url)
