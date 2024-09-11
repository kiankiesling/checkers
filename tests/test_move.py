from move import Move


def test_hash():
    move1 = Move("a1", "b2", True)
    print("test")
    print(move1.__hash__())
    assert 1 == 1
