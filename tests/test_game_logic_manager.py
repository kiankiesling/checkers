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
    glm1 = GameLogicManager()
    b1.set_piece_on_tile("b6", None)
    b1.set_piece_on_tile("b4", Piece(False))
    m1 = Move("a3", "c5", True)
    m2 = Move("c3", "a5", True)
    assert glm1.is_move_legal(b1, m1)
    assert glm1.is_move_legal(b1, m2)


def test_is_non_jump_move_illegal():
    b1 = Board()
    glm1 = GameLogicManager()
    p1 = Player()
    b1.set_piece_on_tile("b6", None)
    b1.set_piece_on_tile("b4", Piece(False))
    m1 = Move("e3", "f4", True)
    m2 = Move("g3", "h4", True)
    assert not glm1.is_move_legal(m1)
    assert not glm1.is_move_legal(m2)


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
    assert glm1.is_game_over


def test_get_possible_jump_moves_for_tile():
    glm1 = GameLogicManager()
    b1 = Board()
    t1 = b1.get_tile("a1")
    t2 = b1.get_tile("a3")
    b1.set_piece_on_tile("b4", Piece(False))
    b1.set_piece_on_tile("d4", Piece(False))
    m1 = Move("a3", "c5", True)
    m2 = Move("c3", "a5", True)
    m3 = Move("c3", "e5", True)
    assert glm1.get_possible_jump_moves_for_tile(b1, t1, 0, 0) == []
    assert glm1.get_possible_jump_moves_for_tile(b1, t2, 2, 0) == [m1]
    assert glm1.get_possible_jump_moves_for_tile(b1, t2, 2, 2) == [m2, m3]
