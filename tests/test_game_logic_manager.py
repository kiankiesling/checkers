from board import Board
from game import Game
from move import Move
from piece import Piece
from player import Player


def test_is_beginning_move_legal():
    b1 = Board()
    glm1 = GameLogicManager()
    p1 = Player()
    m1 = Move("e3", "d4", p1)
    assert glm1.is_move_legal(m1)


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
