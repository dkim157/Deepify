import pytest
import sample_backend

def test_get_artist_success():  
   expected = 'Bladee'
   
   assert sample_backend.get_artist("Bladee")['name'] == expected

def test_get_artist_fail():  
   expected = []
   assert sample_backend.get_artist("Jeff") == expected