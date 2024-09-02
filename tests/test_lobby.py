from lobby import Lobby
from player import Player


def test_add_player():
    l1 = Lobby()
    p1 = Player("Pax")
    l1.add_player(p1)
    assert p1 in l1.all_players_set


# def test_add_game():
#     l1 = Lobby()
#     g1 = Game()
#     l1.add_game()
#     assert g1 in l1.all_games_set


def test_remove_player():
    l1 = Lobby()
    p1 = Player("Pax")
    l1.add_player(p1)
    l1.remove_player(p1)
    assert p1 not in l1.all_players_set


# def test_remove_game():
#     l1 = Lobby()
#     g1 = Game()
#     l1.add_game(g1)
#     l1.remove_game(g1)
#     assert g1 not in l1.all_players_set


def test_search_player_order():
    l1 = Lobby()
    p1 = Player("Pax")
    p2 = Player("Max")
    p3 = Player("Karim")
    p4 = Player("Marvin")
    p5 = Player("Dosengeburt")
    l1.add_player(p1)
    l1.add_player(p2)
    l1.add_player(p3)
    l1.add_player(p4)
    l1.add_player(p5)
    results = l1.search_player("Pa", 5)
    assert isinstance(results, list)
    assert results[0] == p1
    assert results[-1] == p5
    assert len(results) == 5


def test_search_player_max_results():
    l1 = Lobby()
    p1 = Player("Pax")
    p2 = Player("Max")
    p3 = Player("Korim")
    p4 = Player("Marvin")
    p5 = Player("Dosengeburt")
    l1.add_player(p1)
    l1.add_player(p2)
    l1.add_player(p3)
    l1.add_player(p4)
    l1.add_player(p5)
    results = l1.search_player("Ma", 3)
    assert isinstance(results, list)
    assert len(results) == 3
