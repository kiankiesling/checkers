from board import Board
from game_logic_manager import GameLogicManager
from move import Move
from piece import Piece
from player import Player


def test_is_beginning_move_legal():
    b1 = Board()
    glm1 = GameLogicManager()
    p1 = Player("Pax")
    m1 = Move("e3", "d4", True)
    assert glm1.is_move_legal(b1, m1)


def test_is_forward_move_illegal():
    b1 = Board()
    glm1 = GameLogicManager()
    m1 = Move("e3", "e4", True)
    assert not glm1.is_move_legal(b1, m1)


def test_is_diagonal_backward_move_illegal():
    b1 = Board()
    glm1 = GameLogicManager()
    p1 = Player("Pax")
    b1.set_piece_on_tile("d2", None)
    m1 = Move("e3", "d2", True)
    assert not glm1.is_move_legal(b1, m1)


def test_is_out_of_bounds_move_illegal():
    b1 = Board()
    glm1 = GameLogicManager()
    p1 = Player("Pax")
    b1.set_piece_on_tile("b8", Piece(True))
    try:
        m1 = Move("b8", "a9", True)

    except Exception:
        assert 1 == 1
        return

    assert 1 == 2


def test_is_jump_move_legal():
    b1 = Board()
    b2 = Board()
    glm1 = GameLogicManager()
    b1.set_piece_on_tile("b6", None)
    b1.set_piece_on_tile("b4", Piece(False))
    b2.set_piece_on_tile("g5", Piece(True))
    b2.set_piece_on_tile("e5", Piece(True))
    m1 = Move("a3", "c5", True)
    m2 = Move("c3", "a5", True)
    m3 = Move("f6", "h4", False)
    m4 = Move("h6", "f4", False)

    assert glm1.is_move_legal(b1, m1)
    assert glm1.is_move_legal(b1, m2)
    assert glm1.is_move_legal(b2, m3)
    assert glm1.is_move_legal(b2, m4)


def test_is_non_jump_move_illegal():
    b1 = Board()
    glm1 = GameLogicManager()
    b1.set_piece_on_tile("b6", None)
    b1.set_piece_on_tile("b4", Piece(False))
    m1 = Move("e3", "f4", True)
    m2 = Move("g3", "h4", True)
    assert not glm1.is_move_legal(b1, m1)
    assert not glm1.is_move_legal(b1, m2)


def test_becomes_king():
    b1 = Board()
    glm1 = GameLogicManager()
    pie1 = Piece(True)
    pie2 = Piece(False)
    b1.set_piece_on_tile("b8", None)
    b1.set_piece_on_tile("b8", pie1)
    b1.set_piece_on_tile("b1", None)
    b1.set_piece_on_tile("b1", pie2)
    assert not pie1.is_pawn
    assert not pie2.is_pawn


def test_is_king_move_legal():
    b1 = Board()
    glm1 = GameLogicManager()
    p1 = Player()
    b1.set_piece_on_tile("b6", None)
    b1.set_piece_on_tile("a7", None)
    b1.get_tile("e3").get_piece().convert_to_king()
    m1 = Move("e3", "a7", True)
    m2 = Move("e3", "g5", True)
    assert glm1.is_move_legal(m1)
    assert glm1.is_move_legal(m2)


def test_is_king_jump_move_legal():
    b1 = Board()
    glm1 = GameLogicManager()
    b1.set_piece_on_tile("a7", None)
    b1.get_tile("e3").get_piece().convert_to_king()
    m1 = Move("e3", "a7", True)
    assert glm1.is_move_legal(m1)


def test_is_king_non_jump_move_illegal():
    b1 = Board()
    glm1 = GameLogicManager()
    p1 = Player()
    b1.set_piece_on_tile("a7", None)
    b1.get_tile("e3").get_piece().convert_to_king()
    m1 = Move("e3", "g5", True)
    assert not glm1.is_move_legal(m1)


# noch nach bewegungsunfähigkeit testen


def test_is_game_over():
    b1 = Board()
    b2 = Board()
    glm1 = GameLogicManager()
    b1.set_piece_on_tile("a7", None)
    b1.set_piece_on_tile("b6", None)
    b1.set_piece_on_tile("b8", None)
    b1.set_piece_on_tile("c7", None)
    b1.set_piece_on_tile("d6", None)
    b1.set_piece_on_tile("d8", None)
    b1.set_piece_on_tile("e7", None)
    b1.set_piece_on_tile("f6", None)
    b1.set_piece_on_tile("f8", None)
    b1.set_piece_on_tile("g7", None)
    b1.set_piece_on_tile("h6", None)
    b1.set_piece_on_tile("h8", None)
    b2.set_piece_on_tile("a7", None)
    b2.set_piece_on_tile("b6", None)
    b2.set_piece_on_tile("b8", None)
    b2.set_piece_on_tile("c7", None)
    b2.set_piece_on_tile("d6", None)
    b2.set_piece_on_tile("d8", None)
    b2.set_piece_on_tile("e7", None)
    b2.set_piece_on_tile("f6", None)
    b2.set_piece_on_tile("f8", None)
    b2.set_piece_on_tile("g7", None)
    b2.set_piece_on_tile("h6", None)
    b2.set_piece_on_tile("h8", None)
    b2.set_piece_on_tile("b4", Piece(False))
    assert glm1.is_game_over(b1, False)
    assert not glm1.is_game_over(b1, True)
    assert glm1.is_game_over(b2, False)
    assert not glm1.is_game_over(b2, True)


def test_get_possible_jump_moves_for_tile():
    glm1 = GameLogicManager()
    b1 = Board()
    b2 = Board()
    t1 = b1.get_tile("a1")
    t2 = b1.get_tile("a3")
    t3 = b2.get_tile("f6")
    b1.set_piece_on_tile("b4", Piece(False))
    b1.set_piece_on_tile("d4", Piece(False))
    b2.set_piece_on_tile("g5", Piece(True))
    b2.set_piece_on_tile("e5", Piece(True))
    m1 = Move("a3", "c5", True)
    m2 = Move("c3", "a5", True)
    m3 = Move("c3", "e5", True)
    m4 = Move("f6", "h4", False)
    m5 = Move("f6", "d4", False)
    assert glm1.get_possible_jump_moves_for_tile(b1, t1, 0, 0) == set()
    assert glm1.get_possible_jump_moves_for_tile(b1, t2, 2, 0) == set({m1})
    assert glm1.get_possible_jump_moves_for_tile(b1, t2, 2, 2) == set({m2, m3})
    assert glm1.get_possible_jump_moves_for_tile(b1, t2, 2, 2) == set({m2, m3})
    assert glm1.get_possible_jump_moves_for_tile(b2, t3, 5, 5) == set({m4, m5})


def test_find_jump_moves():
    wm1 = Move("a1", "b2", True)
    bm1 = Move("h8", "g7", False)
    m2 = Move("a3", "c5", True)
    m3 = Move("c3", "a5", True)
    m4 = Move("c3", "e5", True)
    m5 = Move("e3", "c5", True)
    m6 = Move("h6", "f4", False)
    m7 = Move("f6", "h4", False)
    m8 = Move("f6", "d4", False)
    m9 = Move("d6", "f4", False)
    b1 = Board()
    b2 = Board()
    b3 = Board()
    glm1 = GameLogicManager()
    b2.set_piece_on_tile("b4", Piece(False))
    b2.set_piece_on_tile("d4", Piece(False))
    b3.set_piece_on_tile("g5", Piece(True))
    b3.set_piece_on_tile("e5", Piece(True))
    assert glm1.find_jump_moves(b1, wm1) == set()
    assert glm1.find_jump_moves(b2, wm1) == set({m2, m3, m4, m5})
    assert glm1.find_jump_moves(b3, bm1) == set({m6, m7, m8, m9})


def test_get_possible_non_jump_moves_for_tile():
    glm1 = GameLogicManager()
    b1 = Board()
    t1 = b1.get_tile("a1")
    t2 = b1.get_tile("g3")
    t3 = b1.get_tile("a3")
    t4 = b1.get_tile("f6")
    t5 = b1.get_tile("h6")
    m1 = Move("g3", "h4", True)
    m2 = Move("g3", "f4", True)
    m3 = Move("a3", "b4", True)
    m4 = Move("f6", "e5", False)
    m5 = Move("f6", "g5", False)
    m6 = Move("h6", "g5", False)
    assert glm1.get_possible_non_jump_moves_for_tile(b1, t1, 0, 0) == set()
    assert glm1.get_possible_non_jump_moves_for_tile(b1, t2, 2, 6) == set({m1, m2})
    assert glm1.get_possible_non_jump_moves_for_tile(b1, t3, 2, 0) == set({m3})
    assert glm1.get_possible_non_jump_moves_for_tile(b1, t4, 5, 5) == set({m4, m5})
    assert glm1.get_possible_non_jump_moves_for_tile(b1, t5, 5, 7) == set({m6})


def test_find_all_moves():
    wm1 = Move("a3", "b4", True)
    wm2 = Move("c3", "b4", True)
    wm3 = Move("c3", "d4", True)
    wm4 = Move("e3", "d4", True)
    wm5 = Move("e3", "f4", True)
    wm6 = Move("g3", "f4", True)
    wm7 = Move("g3", "h4", True)
    wjm1 = Move("c3", "e5", True)
    wjm2 = Move("e3", "c5", True)
    bm1 = Move("b6", "a5", False)
    bm2 = Move("b6", "c5", False)
    bm3 = Move("d6", "c5", False)
    bm4 = Move("d6", "e5", False)
    bm5 = Move("f6", "e5", False)
    bm6 = Move("f6", "g5", False)
    bm7 = Move("h6", "g5", False)
    b1 = Board()
    b2 = Board()
    b2.set_piece_on_tile("d4", Piece(False))
    glm1 = GameLogicManager()
    assert glm1.find_all_moves(b1, True) == set({wm1, wm2, wm3, wm4, wm5, wm6, wm7})
    assert glm1.find_all_moves(b1, False) == set({bm1, bm2, bm3, bm4, bm5, bm6, bm7})
    assert glm1.find_all_moves(b2, True) == set({wm1, wm2, wjm1, wjm2, wm5, wm6, wm7})
