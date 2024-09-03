class Tile:
    def __init__(self, is_white: bool):
        self.is_white = is_white
        self.piece = None

    def set_piece(self, piece):
        self.piece = piece

    def get_piece(self):
        return self.piece
