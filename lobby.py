from player import Player
from utils import compare_player_names

class Lobby:

    def __init__(self):
        self.all_players_set = set()
        self.all_games_set = set()
        #invites
        
    
    def add_player(self, new_player):
        self.all_players_set.add(new_player)

    def add_game(self, new_game):
        self.all_players_set.add(new_game)

    def remove_player(self, player_to_remove):
        self.all_players_set.remove(player_to_remove)

    def remove_game(self, game_to_remove):
        self.all_players_set.remove(game_to_remove)
    
    def search_player(self, search, max_results):
        # naive implementation
        return sorted(self.all_players_set, key= lambda s: compare_player_names(search, s)) [0, max_results]


    