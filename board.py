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
                is_white = (x + y) % 2 == 1
                tile = Tile(is_white)  # black/white
                row.append(tile)
            self.tiles.append(row)

        print(self.get_tile("a5").get_piece(), "oben")
        self.initialize_board()

    def initialize_board(self):
        for y in range(3):
            for x in range(8):
                tile = self.tiles[y][x]
                if not tile.is_white:
                    piece = Piece(True)  # is_white
                    tile.set_piece(piece)
                print(self.get_tile("d1").get_piece(), "mitte", y)
                tile = self.tiles[-(y + 1)][x]
                if not tile.is_white:
                    piece = Piece(False)  # is_white
                    tile.set_piece(piece)
        print(self.get_tile("d1").get_piece(), "unten")

    def get_tile(self, coordinates: str) -> Tile:
        x = ord(coordinates[0].lower()) - 97
        y = int(coordinates[1]) - 1
        return self.tiles[y][x]
