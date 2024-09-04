from board import Board
from game_logic_manager import GameLogicManager
from move import Move
from piece import Piece
from player import Player


def test_is_beginning_move_legal():
    b1 = Board()
    glm1 = GameLogicManager()
    p1 = Player("Pax")
    m1 = Move("e3", "d4", p1, True)
    assert glm1.is_move_legal(b1, m1)


def test_is_forward_move_illegal():
    b1 = Board()
    glm1 = GameLogicManager()
    p1 = Player("Pax")
    m1 = Move("e3", "e4", p1, True)
    assert not glm1.is_move_legal(b1, m1)


def test_is_jump_move_legal():
    b1 = Board()
    glm1 = GameLogicManager()
    p1 = Player()
    b1.set_piece_on_tile("b6", None)
    b1.set_piece_on_tile("b4", Piece(False))
    m1 = Move("a3", "c5", p1)
    m2 = Move("c3", "a5", p1)
    assert glm1.is_move_legal(m1)
    assert glm1.is_move_legal(m2)


def test_is_non_jump_move_illegal():
    b1 = Board()
    glm1 = GameLogicManager()
    p1 = Player()
    b1.set_piece_on_tile("b6", None)
    b1.set_piece_on_tile("b4", Piece(False))
    m1 = Move("e3", "f4", p1)
    m2 = Move("g3", "h4", p1)
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
    m1 = Move("e3", "a7", p1)
    m2 = Move("e3", "g5", p1)
    assert glm1.is_move_legal(m1)
    assert glm1.is_move_legal(m2)


def test_is_king_jump_move_legal():
    b1 = Board()
    glm1 = GameLogicManager()
    p1 = Player()
    b1.set_piece_on_tile("a7", None)
    b1.get_tile("e3").get_piece().convert_to_king()
    m1 = Move("e3", "a7", p1)
    assert glm1.is_move_legal(m1)


def test_is_king_non_jump_move_illegal():
    b1 = Board()
    glm1 = GameLogicManager()
    p1 = Player()
    b1.set_piece_on_tile("a7", None)
    b1.get_tile("e3").get_piece().convert_to_king()
    m1 = Move("e3", "g5", p1)
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
