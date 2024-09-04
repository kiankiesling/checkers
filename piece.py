class Piece:
    def __init__(self, is_white):
        self.is_white = is_white
        self.is_pawn = True

    def convert_to_king(self):
        self.is_pawn = False
