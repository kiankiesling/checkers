from piece import Piece
from tile import Tile


def test_pop_piece():
    t1 = Tile(False)
    p1 = Piece(False)
    t1.set_piece(p1)
    assert t1.get_piece() == p1
    assert t1.pop_piece() == p1
    assert t1.get_piece() is None
