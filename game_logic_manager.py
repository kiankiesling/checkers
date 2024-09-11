from board import Board
from move import Move
from tile import Tile


class GameLogicManager:
    def is_move_legal(self, board: Board, move: Move):
        jump_moves = self.find_jump_moves(board, move)
        if not jump_moves == set():
            return move in jump_moves

        # if board.get_tile(move.start_coords).get_piece().is_pawn:
        # TODO
        # else:
        # return self.is_king_move_legal(board, move)

        return self.is_pawn_move_legal(board, move) or self.is_pawn_jump_move_legal(
            board, move
        )

    def is_pawn_move_legal(self, board: Board, move: Move):
        if not self.is_y_dif_legal(board, move):
            return False
        if not self.is_x_dif_legal(board, move):
            return False
        if board.get_tile(move.end_coords).get_piece() is not None:
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
        print("jump_move_legal", move.start_coords, move.end_coords)
        x_start = ord(move.start_coords[0].lower()) - 97
        x_end = ord(move.end_coords[0].lower()) - 97
        x_dif = x_start - x_end
        player_is_white = move.get_player_is_white()
        if not self.is_y_jump_dif_legal(board, move):
            print("false 1")
            return False
        if not self.is_x_jump_dif_legal(board, move):
            print("false 2")
            return False
        if board.get_tile(move.end_coords).get_piece() is not None:
            print("false 3" + move.end_coords + move.start_coords)
            return False

        # TODO add black jump direction

        if x_dif == -2:
            if player_is_white:
                y, x = Board.get_tile_index_by_coords(move.start_coords)
                x = x + 1
                y = y + 1

            if not player_is_white:
                y, x = Board.get_tile_index_by_coords(move.start_coords)
                x = x + 1
                y = y - 1

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
            if player_is_white:
                y, x = Board.get_tile_index_by_coords(move.start_coords)
                x = x - 1
                y = y + 1
            if not player_is_white:
                y, x = Board.get_tile_index_by_coords(move.start_coords)
                x = x - 1
                y = y - 1

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
        y_dif = y_end - y_start
        if move.player_is_white and y_dif != 2:
            return False
        if not move.player_is_white and y_dif != -2:
            return False
        return True

    def find_jump_moves(self, board: Board, move: Move):
        # TODO nur schwarze felder prüfen
        jump_moves = set()
        tiles = board.get_tiles()
        for y, row in enumerate(tiles):
            for x, tile in enumerate(row):
                piece = tile.get_piece()
                if not tile.get_is_white() and piece is not None:
                    if piece.get_is_white() == move.get_player_is_white():
                        jump_moves_for_tile = self.get_possible_jump_moves_for_tile(
                            board, tile, y, x
                        )
                        if len(jump_moves_for_tile) != 0:
                            jump_moves = jump_moves.union(jump_moves_for_tile)
        print(jump_moves)
        return jump_moves

    def get_possible_jump_moves_for_tile(
        self, board: Board, tile: Tile, y: int, x: int
    ):
        possible_jump_moves_for_tile = set()
        player_is_white = tile.get_piece().get_is_white()
        start_coords = Board.get_tile_coords_by_index(y, x)
        print(start_coords)
        if player_is_white:
            target_index_left = [y + 2, x - 2]
            target_index_right = [y + 2, x + 2]
        if not player_is_white:
            target_index_left = [y - 2, x - 2]
            target_index_right = [y - 2, x + 2]
        if not (
            target_index_left[0] > 7
            or target_index_left[0] < 0
            or target_index_left[1] > 7
            or target_index_left[1] < 0
        ):
            target_coords_left = Board.get_tile_coords_by_index(
                target_index_left[0], target_index_left[1]
            )
            left_move = Move(start_coords, target_coords_left, player_is_white)
            if self.is_pawn_jump_move_legal(board, left_move):
                possible_jump_moves_for_tile.add(left_move)
        if not (
            target_index_right[0] > 7
            or target_index_right[0] < 0
            or target_index_right[1] > 7
            or target_index_right[1] < 0
        ):
            target_coords_right = Board.get_tile_coords_by_index(
                target_index_right[0], target_index_right[1]
            )
            right_move = Move(start_coords, target_coords_right, player_is_white)
            if self.is_pawn_jump_move_legal(board, right_move):
                possible_jump_moves_for_tile.add(right_move)
        return possible_jump_moves_for_tile
