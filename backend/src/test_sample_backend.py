import pytest
import sample_backend
from parent_node import ParentNode

def test_get_artist_success():  
   expected = 'Bladee'
   assert ParentNode.get_artist_data('bladee')['name'] == expected

def test_get_artist_fail():  
   expected = []
   assertFalse sample_backend.get_artist("Jeff") == expected
