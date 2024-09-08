from board import Board


def test_get_tile():
    b1 = Board()
    assert b1.tiles[0][0] == b1.get_tile("a1")
    assert b1.tiles[3][1] == b1.get_tile("b4")
    assert b1.tiles[2][7] == b1.get_tile("h3")
    assert b1.tiles[7][3] == b1.get_tile("d8")
    assert b1.tiles[4][0] == b1.get_tile("a5")


def test_tiles_array():
    b1 = Board()
    assert not b1.get_tile("a1").is_white
    assert b1.get_tile("b1").is_white
    assert b1.get_tile("a2").is_white
    assert not b1.get_tile("h8").is_white
    assert b1.get_tile("d1").is_white


def test_initialize_board():
    b1 = Board()
    assert b1.get_tile("a1").get_piece() is not None
    assert b1.get_tile("a1").get_piece().is_white
    assert b1.get_tile("a5").get_piece() is None
    assert b1.get_tile("b8").get_piece() is not None
    assert not b1.get_tile("b8").get_piece().is_white
    assert b1.get_tile("d1").get_piece() is None


def test_get_tile_coords_by_index():
    b1 = Board()
    assert b1.get_tile_coords_by_index(0, 0) == "a1"
    assert b1.get_tile_coords_by_index(5, 3) == "d6"
    assert b1.get_tile_coords_by_index(6, 7) == "h7"
    assert b1.get_tile_coords_by_index(4, 2) == "c5"
