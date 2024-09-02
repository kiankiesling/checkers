from board import Board


def test_tiles_array():
    b1 = Board()
    b1.tiles[0][0].is_white == False


def test_get_tile():
    b1 = Board()
    assert b1.tiles[0][0] == b1.get_tile("a1")
