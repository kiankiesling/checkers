from board import Board
from move import Move


class GameLogicManager:
    def is_move_legal(self, board: Board, move: Move):
        if board.get_tile(move.start_coords).get_piece().is_pawn:
            return self.is_pawn_move_legal(board, move)
        else:
            return self.is_king_move_legal(board, move)

    def is_pawn_move_legal(self, board: Board, move: Move):
        if not self.is_y_dif_legal(board, move):
            return False
        if not self.is_x_dif_legal(board, move):
            return False
        return True

    def is_y_dif_legal(self, board: Board, move: Move):
        y_start = int(move.start_coords[1])
        y_end = int(move.end_coords[1])
        y_dif = y_start - y_end
        if move.player_is_white and y_dif != -1:
            return False
        if not move.player_is_white and y_dif != 1:
            return False
        return True

    def is_x_dif_legal(self, board: Board, move: Move):
        x_start = ord(move.start_coords[0].lower()) - 97
        x_end = ord(move.end_coords[0].lower()) - 97
        x_dif = x_start - x_end
        if abs(x_dif) != 1:
            return False
        return True
