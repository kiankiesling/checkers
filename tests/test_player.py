from player import Player 
import pytest

def test_player_getID():
    p1 = Player("1")
    assert p1.id == "1"

def test_player_getName():
    p1 = Player("1")
    assert p1.name == "1"

def test_player_getInGame():
    p1 = Player("1")
    assert p1.inGame == False

def test_player_changeName():
    p1 = Player("1")
    p1.changeName("Pax")
    assert p1.getName() == "Pax"

