# spotify imports
import spotipy
import pprint
from spotipy.oauth2 import SpotifyClientCredentials

class ParentNode():
    #def __init__(self, num_top_tracks):
     #   self.num_top_tracks = num_top_tracks

    def populate_top_tracks(artist_uri, sp):
        top_tracks_json = sp.artist_top_tracks(artist_uri, country='US')
        track_list = []
        for i in range(5):
            title = top_tracks_json['tracks'][i]['name']
            uri = top_tracks_json['tracks'][i]['uri']
            preview_url = top_tracks_json['tracks'][i]['preview_url']
            track_list.append({
                'title': title,
                'uri': uri,
                'preview_url': preview_url
                })
        return track_list

    def get_artist_data(search_value):
        # apotify auth
        auth_manager = SpotifyClientCredentials()
        sp = spotipy.Spotify(auth_manager=auth_manager)

        if (search_value is None) or (search_value == ''):
            print("artist not found")
        else:
            data = {}
            search_result = sp.search(search_value.lower(), limit=1, offset=0, type='artist', market='US')
            data['name'] = search_result['artists']['items'][0]['name']
            data['uri'] = search_result['artists']['items'][0]['uri']
            data['top_tracks'] = ParentNode.populate_top_tracks(data['uri'], sp)
            return data
