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
        x = ord(coordinates[0].lower()) - 97
        y = int(coordinates[1]) - 1
        if x > 7 or x < 0 or y > 7 or y < 0:
            raise Exception("Tile Out of Bounds")
        return self.tiles[y][x]

    def set_piece_on_tile(self, coordinates: str, piece: Piece):
        tile = self.get_tile(coordinates)
        tile.set_piece(piece)

    def get_tile_index(self, coordinates: str):
        x = ord(coordinates[0].lower()) - 97
        y = int(coordinates[1]) - 1
        return y, x

    def get_tile_by_index(self, y: int, x: int) -> Tile:
        if x > 7 or x < 0 or y > 7 or y < 0:
            raise Exception("Tile Out of Bounds")
        return self.tiles[y][x]

    def get_tile_coords_by_index(self, y: int, x: int) -> str:
        y_coords = y + 1
        x_coords = chr(x + 97)

        return x_coords + str(y_coords)

    def get_tiles(self):
        return self.tiles
