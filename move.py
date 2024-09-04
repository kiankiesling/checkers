from player import Player


class Move:
    def __init__(
        self, start_coords: str, end_coords: str, player: Player, is_white: bool
    ):
        self.start_coords = start_coords
        self.end_coords = end_coords
        self.player = player
        self.player_is_white = is_white
