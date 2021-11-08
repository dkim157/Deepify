import pytest
import sample_backend

def test_get_artist_success():  
   expected = 'Bladee'
   
   assert sample_backend.User().get_artist("Bladee") == expected

def test_get_artist_fail():  
   expected = []
   assert sample_backend.User().find_by_name("Jeff") == expected