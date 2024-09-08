from player import Player


class Move:
    def __init__(self, start_coords: str, end_coords: str, is_white: bool):
        x = ord(start_coords[0].lower()) - 97
        y = int(start_coords[1]) - 1

        if x > 7 or x < 0 or y > 7 or y < 0:
            raise Exception("Tile Out of Bounds")

        x = ord(end_coords[0].lower()) - 97
        y = int(end_coords[1]) - 1

        if x > 7 or x < 0 or y > 7 or y < 0:
            raise Exception("Tile Out of Bounds")

        self.start_coords = start_coords
        self.end_coords = end_coords
        self.player_is_white = is_white

    def get_player_is_white(self):
        return self.player_is_white

    def __eq__(self, move) -> bool:
        return (
            self.start_coords == move.start_coords
            and self.end_coords == move.end_coords
            and self.player_is_white == move.player_is_white
        )
