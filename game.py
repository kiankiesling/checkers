from player import Player
from board import Board


class Game:
    def __init__(self, player1: Player, player2: Player):
        self.player_white = player1
        self.player_black = player2
        self.board = Board()
        self.player_white_turn = True
        self.game_logic_manager = GameLogicManager()

    def get_player_white(self):
        return self.player_white

    def get_player_black(self):
        return self.player_black

    def get_player_white_turn(self):
        return self.player_white_turn

    def change_turn(self):
        self.player_white_turn = not self.player_white_turn

    def request_move(self, move: Move):
        if self.game_logic_manager.is_move_legal(self.board, move):
            self.make_move(move)
        else:
            return False

    # def is_game_over(self):

    # def declare_winner(self):
