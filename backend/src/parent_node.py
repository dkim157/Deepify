# spotify imports
import random
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

    # data is the parent node
    def populate_child_nodes(data, sp):
        seen = {} # names already come across
        lim = 50
        collabs = []
        # populate collaboration dict
        json = sp.artist_albums(data['uri'], album_type='album', country='US', limit=lim, offset=0)
        for album in json['items']:
            tracks = sp.album_tracks(album['id'], limit=lim, offset=0, market='US')
            for track in tracks['items']:
                for artist in track['artists']:
                    if (artist['name'] != data['name']) and not (artist['name'] in seen): # prevent collaboration with self, remove duplicates
                        collabs.append({'name': str(artist['name']), "track": track['uri']})
                        seen[artist['name']] = 1

        # trim collabs to 3
        while len(collabs) > 3:
            i = random.randrange(len(collabs)) # get random index
            collabs[i], collabs[-1] = collabs[-1], collabs[i]    # swap with the last element
            collabs.pop() 
        return collabs

    def get_artist_data(search_value):
        # apotify auth
        auth_manager = SpotifyClientCredentials()
        sp = spotipy.Spotify(auth_manager=auth_manager)

        if (search_value is None) or (search_value == ''):
            return None
        else:
            data = {}
            search_result = sp.search(search_value.lower(), limit=1, offset=0, type='artist', market='US')
            data['name'] = search_result['artists']['items'][0]['name']
            data['uri'] = search_result['artists']['items'][0]['uri']
            data['top_tracks'] = ParentNode.populate_top_tracks(data['uri'], sp)
            data['collabs'] = ParentNode.populate_child_nodes(data, sp)
            return data
