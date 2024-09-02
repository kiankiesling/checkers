from player import Player
from board import Board


class Game:
    def __init__(self, player1: Player, player2: Player):
        self.player1 = player1
        self.player2 = player2
        # self.board = Board()
        self.player1_turn = True
        self.game_logic_manager = GameLogicManager()

    def get_player1(self):
        return self.player1

    def get_player2(self):
        return self.player2

    def get_player1_turn(self):
        return self.player1_turn

    def change_turn(self):
        self.player1_turn = not self.player1_turn

    def request_move(self, move: Move):
        if self.game_logic_manager.is_move_legal(self.board, move):
            self.make_move(move)
        else:
            return False

    # def is_game_over(self):

    # def declare_winner(self):
