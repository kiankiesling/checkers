from player import Player


class Move:
    def __init__(self, start_coords: str, end_coords: str, player: Player):
        self.start_coords = start_coords
        self.end_coords = end_coords
        self.player = player
