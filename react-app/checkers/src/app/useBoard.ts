import { useCallback, useEffect, useState } from "react";

export default function useBoard() {
  const whiteTile = {
    isWhite: true,
    hasPiece: false,
    piece: { isWhite: null, isPawn: null },
  };
  const [rows, setRows] = useState([
    [
      {
        isWhite: false,
        hasPiece: true,
        piece: { isWhite: true, isPawn: true },
      },
      { ...whiteTile },
      {
        isWhite: false,
        hasPiece: true,
        piece: { isWhite: true, isPawn: true },
      },
      { ...whiteTile },
      {
        isWhite: false,
        hasPiece: true,
        piece: { isWhite: true, isPawn: true },
      },
      { ...whiteTile },
      {
        isWhite: false,
        hasPiece: true,
        piece: { isWhite: true, isPawn: true },
      },
      { ...whiteTile },
    ],
    [
      whiteTile,
      {
        isWhite: false,
        hasPiece: true,
        piece: { isWhite: true, isPawn: true },
      },
      { ...whiteTile },
      {
        isWhite: false,
        hasPiece: true,
        piece: { isWhite: true, isPawn: true },
      },
      { ...whiteTile },
      {
        isWhite: false,
        hasPiece: true,
        piece: { isWhite: true, isPawn: true },
      },
      { ...whiteTile },
      {
        isWhite: false,
        hasPiece: true,
        piece: { isWhite: true, isPawn: true },
      },
    ],
    [
      {
        isWhite: false,
        hasPiece: true,
        piece: { isWhite: true, isPawn: true },
      },
      { ...whiteTile },
      {
        isWhite: false,
        hasPiece: true,
        piece: { isWhite: true, isPawn: true },
      },
      { ...whiteTile },
      {
        isWhite: false,
        hasPiece: true,
        piece: { isWhite: true, isPawn: true },
      },
      { ...whiteTile },
      {
        isWhite: false,
        hasPiece: true,
        piece: { isWhite: true, isPawn: true },
      },
      { ...whiteTile },
    ],
    [
      { ...whiteTile },
      {
        isWhite: false,
        hasPiece: false,
        piece: { isWhite: null, isPawn: null },
      },
      { ...whiteTile },
      {
        isWhite: false,
        hasPiece: false,
        piece: { isWhite: null, isPawn: null },
      },
      { ...whiteTile },
      {
        isWhite: false,
        hasPiece: false,
        piece: { isWhite: null, isPawn: null },
      },
      { ...whiteTile },
      {
        isWhite: false,
        hasPiece: false,
        piece: { isWhite: null, isPawn: null },
      },
    ],
    [
      {
        isWhite: false,
        hasPiece: false,
        piece: { isWhite: null, isPawn: null },
      },
      { ...whiteTile },
      {
        isWhite: false,
        hasPiece: false,
        piece: { isWhite: null, isPawn: null },
      },
      { ...whiteTile },
      {
        isWhite: false,
        hasPiece: false,
        piece: { isWhite: null, isPawn: null },
      },
      { ...whiteTile },
      {
        isWhite: false,
        hasPiece: false,
        piece: { isWhite: null, isPawn: null },
      },
      { ...whiteTile },
    ],
    [
      { ...whiteTile },
      {
        isWhite: false,
        hasPiece: true,
        piece: { isWhite: false, isPawn: true },
      },
      { ...whiteTile },
      {
        isWhite: false,
        hasPiece: true,
        piece: { isWhite: false, isPawn: true },
      },
      { ...whiteTile },
      {
        isWhite: false,
        hasPiece: true,
        piece: { isWhite: false, isPawn: true },
      },
      { ...whiteTile },
      {
        isWhite: false,
        hasPiece: true,
        piece: { isWhite: false, isPawn: true },
      },
    ],
    [
      {
        isWhite: false,
        hasPiece: true,
        piece: { isWhite: false, isPawn: true },
      },
      { ...whiteTile },
      {
        isWhite: false,
        hasPiece: true,
        piece: { isWhite: false, isPawn: true },
      },
      { ...whiteTile },
      {
        isWhite: false,
        hasPiece: true,
        piece: { isWhite: false, isPawn: true },
      },
      { ...whiteTile },
      {
        isWhite: false,
        hasPiece: true,
        piece: { isWhite: false, isPawn: true },
      },
      { ...whiteTile },
    ],
    [
      { ...whiteTile },
      {
        isWhite: false,
        hasPiece: true,
        piece: { isWhite: false, isPawn: true },
      },
      { ...whiteTile },
      {
        isWhite: false,
        hasPiece: true,
        piece: { isWhite: false, isPawn: true },
      },
      { ...whiteTile },
      {
        isWhite: false,
        hasPiece: true,
        piece: { isWhite: false, isPawn: true },
      },
      { ...whiteTile },
      {
        isWhite: false,
        hasPiece: true,
        piece: { isWhite: false, isPawn: true },
      },
    ],
  ]);

  const [playerWhiteTurn, setPlayerWhiteTurn] = useState(true);
  const [whiteStonesRemoved, setWhiteStonesRemoved] = useState(2);
  const [blackStonesRemoved, setBlackStonesRemoved] = useState(10);
  const [currentMove, setCurrentMove] = useState({
    startIndex: null,
    endIndex: null,
  });

  useEffect(() => {
    setRows((rows) => {
      const newRows = [...rows];

      for (const rowIndex in rows) {
        for (const tileIndex in rows[rowIndex]) {
          newRows[rowIndex][tileIndex].isSelected = false;
          newRows[rowIndex][tileIndex].isHighlighted = false;
        }
      }

      if (currentMove.startIndex != null && playerWhiteTurn) {
        newRows[currentMove.startIndex[0]][
          currentMove.startIndex[1]
        ].isSelected = true;
        newRows[currentMove.startIndex[0] + 1][
          currentMove.startIndex[1] + 1
        ].isHighlighted = true;
        newRows[currentMove.startIndex[0] + 1][
          currentMove.startIndex[1] - 1
        ].isHighlighted = true;
      }
      if (currentMove.startIndex != null && !playerWhiteTurn) {
        newRows[currentMove.startIndex[0]][
          currentMove.startIndex[1]
        ].isSelected = true;
        newRows[currentMove.startIndex[0] - 1][
          currentMove.startIndex[1] + 1
        ].isHighlighted = true;
        newRows[currentMove.startIndex[0] - 1][
          currentMove.startIndex[1] - 1
        ].isHighlighted = true;
      }

      if (
        currentMove.endIndex != null &&
        currentMove.startIndex != null &&
        isMoveLegal()
      ) {
        makeMove();
      }

      return newRows;
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentMove]);

  function onTileClick(tileIndex, tileHasPiece, pieceIsWhite) {
    if (
      currentMove.startIndex == null &&
      tileHasPiece &&
      playerWhiteTurn == pieceIsWhite
    ) {
      setCurrentMove({ startIndex: tileIndex, endIndex: null });
      console.log("1, ", currentMove);
    } else {
      setCurrentMove((oldCurrentMove) => {
        const newCurrentMove = { ...oldCurrentMove };
        newCurrentMove.endIndex = tileIndex;
        return newCurrentMove;
      });
    }
    console.log("2, ", currentMove);
  }

  useEffect(() => {
    console.log("schlaffo");
  }, [rows]);

  const removePieceFromTile = useCallback(
    function (index) {
      console.log("remove piece", index);
      setRows((oldRows) => {
        const newRows = [...oldRows];
        newRows[index[0]][index[1]].hasPiece = false;

        return newRows;
      });
    },
    [setRows]
  );

  const addPieceToTile = useCallback(
    function (index, isWhite, isPawn) {
      setRows((oldRows) => {
        const newRows = [...oldRows];
        newRows[index[0]][index[1]].hasPiece = true;
        newRows[index[0]][index[1]].piece.isWhite = isWhite;
        newRows[index[0]][index[1]].piece.isPawn = isPawn;
        return newRows;
      });
    },
    [setRows]
  );
  // function addPieceToTile(index, isWhite, isPawn) {
  //   rows[index[0]][index[1]].piece.isWhite = isWhite;
  //   rows[index[0]][index[1]].piece.isPawn = isPawn;
  // }

  const makeMove = useCallback(
    function () {
      const startIndex = currentMove.startIndex;
      const endIndex = currentMove.endIndex;
      const pieceIsWhite = playerWhiteTurn;
      const pieceIsPawn = true;
      // console.log(startIndex, "jojo", test);
      removePieceFromTile(startIndex);
      addPieceToTile(endIndex, pieceIsWhite, pieceIsPawn);
      setPlayerWhiteTurn(!playerWhiteTurn);
      setCurrentMove({ startIndex: null, endIndex: null });
    },
    [currentMove, playerWhiteTurn, removePieceFromTile, addPieceToTile]
  );

  function isMoveLegal() {
    const startIndex = currentMove.startIndex;
    const endIndex = currentMove.endIndex;
    const yDif = endIndex[0] - startIndex[0];
    const xDif = endIndex[1] - startIndex[1];

    if (
      rows[startIndex[0]][startIndex[1]].hasPiece &&
      !rows[endIndex[0]][endIndex[1]].hasPiece &&
      isYDifLegal(yDif) &&
      isXDifLegal(xDif)
    ) {
      return true;
    }
    return false;
  }

  function isYDifLegal(yDif) {
    if (playerWhiteTurn && yDif == 1) {
      return true;
    }
    if (!playerWhiteTurn && yDif == -1) {
      return true;
    }
  }
  function isYJumpDifLegal(yDif) {
    if (playerWhiteTurn && yDif == 2) {
      return true;
    }
    if (!playerWhiteTurn && yDif == -2) {
      return true;
    }
  }
  function isXDifLegal(xDif) {
    if (xDif == 1 || xDif == -1) {
      return true;
    }
  }
  function isXJumpDifLegal(xDif) {
    if (xDif == 2 || xDif == -2) {
      return true;
    }
  }

  return {
    rows,
    setRows,
    onTileClick,
    // initializeBoard,
    status: { playerWhiteTurn, whiteStonesRemoved, blackStonesRemoved },
  };
}
