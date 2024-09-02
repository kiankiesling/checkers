from piece import Piece
from tile import Tile


class Board:
    def __init__(self):
        self.width = 8
        self.height = 8
        self.tiles = []

        for y in range(self.height):
            row = []
            for x in range(self.width):
                is_white = x + y % 2 == 1
                tile = Tile(is_white)  # black/white
                row.append(tile)
            self.tiles.append(row)

        self.initialize_board()

    def initialize_board(self):
        for y in range(3):
            for x in range(8):
                tile = self.tiles[y][x]
                if not tile.is_white:
                    piece = Piece(True)  # is_white
                    tile.set_piece(piece)

                tile = self.tiles[-(y + 1)][x]
                if not tile.is_white:
                    piece = Piece(False)  # is_white
                    tile.set_piece(piece)

    def get_tile(self, coordinates: str) -> Tile:
        y = ord(coordinates[0].lower()) - 97
        x = int(coordinates[1]) - 1
        return self.tiles[y][x]
