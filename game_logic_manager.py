from board import Board
from move import Move


class GameLogicManager:
    def is_move_legal(self, board: Board, move: Move):
        if board.get_tile(move.start_coords).get_piece().is_pawn:
            # TODO

            return self.is_pawn_jump_move_legal(board, move)

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

    def is_pawn_jump_move_legal(self, board: Board, move: Move):
        x_start = ord(move.start_coords[0].lower()) - 97
        x_end = ord(move.end_coords[0].lower()) - 97
        x_dif = x_start - x_end
        if not self.is_y_jump_dif_legal(board, move):
            print("false 1")
            return False
        if not self.is_x_jump_dif_legal(board, move):
            print("false 2")
            return False
        if board.get_tile(move.end_coords).get_piece() is not None:
            print("false 3")
            return False

        if x_dif == -2:
            y, x = board.get_tile_index(move.start_coords)
            x = x + 1
            y = y + 1

            if board.get_tile_by_index(y, x).get_piece() is None:
                print("false 4")
                return False

            if (
                board.get_tile_by_index(y, x).get_piece().is_white
                == move.get_player_is_white()
            ):
                print("false 5")
                return False

            return True

        if x_dif == 2:
            y, x = board.get_tile_index(move.start_coords)
            x = x - 1
            y = y + 1

            if board.get_tile_by_index(y, x).get_piece() is None:
                print("false 6")
                return False

            if (
                board.get_tile_by_index(y, x).get_piece().is_white
                == move.get_player_is_white()
            ):
                print("false 7")
                return False

            return True
        print("false 8")

        return False

    def is_x_jump_dif_legal(self, board: Board, move: Move):
        x_start = ord(move.start_coords[0].lower()) - 97
        x_end = ord(move.end_coords[0].lower()) - 97
        x_dif = x_start - x_end
        if abs(x_dif) != 2:
            return False
        return True

    def is_y_jump_dif_legal(self, board: Board, move: Move):
        y_start = int(move.start_coords[1])
        y_end = int(move.end_coords[1])
        y_dif = y_start - y_end
        if move.player_is_white and y_dif != -2:
            return False
        if not move.player_is_white and y_dif != 2:
            return False
        return True
