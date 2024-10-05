import { useCallback, useEffect, useState } from "react";

export default function () {
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
      whiteTile,
      {
        isWhite: false,
        hasPiece: true,
        piece: { isWhite: true, isPawn: true },
      },
      whiteTile,
      {
        isWhite: false,
        hasPiece: true,
        piece: { isWhite: true, isPawn: true },
      },
      whiteTile,
    ],
    [
      whiteTile,
      {
        isWhite: false,
        hasPiece: true,
        piece: { isWhite: true, isPawn: true },
      },
      whiteTile,
      {
        isWhite: false,
        hasPiece: true,
        piece: { isWhite: true, isPawn: true },
      },
      whiteTile,
      {
        isWhite: false,
        hasPiece: true,
        piece: { isWhite: true, isPawn: true },
      },
      whiteTile,
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
      whiteTile,
      {
        isWhite: false,
        hasPiece: true,
        piece: { isWhite: true, isPawn: true },
      },
      whiteTile,
      {
        isWhite: false,
        hasPiece: true,
        piece: { isWhite: true, isPawn: true },
      },
      whiteTile,
      {
        isWhite: false,
        hasPiece: true,
        piece: { isWhite: true, isPawn: true },
      },
      whiteTile,
    ],
    [
      whiteTile,
      {
        isWhite: false,
        hasPiece: false,
        piece: { isWhite: null, isPawn: null },
      },
      whiteTile,
      {
        isWhite: false,
        hasPiece: false,
        piece: { isWhite: null, isPawn: null },
      },
      whiteTile,
      {
        isWhite: false,
        hasPiece: false,
        piece: { isWhite: null, isPawn: null },
      },
      whiteTile,
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
      whiteTile,
      {
        isWhite: false,
        hasPiece: false,
        piece: { isWhite: null, isPawn: null },
      },
      whiteTile,
      {
        isWhite: false,
        hasPiece: false,
        piece: { isWhite: null, isPawn: null },
      },
      whiteTile,
      {
        isWhite: false,
        hasPiece: false,
        piece: { isWhite: null, isPawn: null },
      },
      whiteTile,
    ],
    [
      whiteTile,
      {
        isWhite: false,
        hasPiece: true,
        piece: { isWhite: false, isPawn: true },
      },
      whiteTile,
      {
        isWhite: false,
        hasPiece: true,
        piece: { isWhite: false, isPawn: true },
      },
      whiteTile,
      {
        isWhite: false,
        hasPiece: true,
        piece: { isWhite: false, isPawn: true },
      },
      whiteTile,
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
      whiteTile,
      {
        isWhite: false,
        hasPiece: true,
        piece: { isWhite: false, isPawn: true },
      },
      whiteTile,
      {
        isWhite: false,
        hasPiece: true,
        piece: { isWhite: false, isPawn: true },
      },
      whiteTile,
      {
        isWhite: false,
        hasPiece: true,
        piece: { isWhite: false, isPawn: true },
      },
      whiteTile,
    ],
    [
      whiteTile,
      {
        isWhite: false,
        hasPiece: true,
        piece: { isWhite: false, isPawn: true },
      },
      whiteTile,
      {
        isWhite: false,
        hasPiece: true,
        piece: { isWhite: false, isPawn: true },
      },
      whiteTile,
      {
        isWhite: false,
        hasPiece: true,
        piece: { isWhite: false, isPawn: true },
      },
      whiteTile,
      {
        isWhite: false,
        hasPiece: true,
        piece: { isWhite: false, isPawn: true },
      },
    ],
  ]);

  let [playerWhiteTurn, setPlayerWhiteTurn] = useState(true);
  let [whiteStonesRemoved, setWhiteStonesRemoved] = useState(2);
  let [blackStonesRemoved, setBlackStonesRemoved] = useState(10);
  let [currentMove, setCurrentMove] = useState({
    startIndex: null,
    endIndex: null,
  });

  useEffect(() => {
    setRows((rows) => {
      const newRows = [...rows];

      for (let rowIndex in rows) {
        for (let tileIndex in rows[rowIndex]) {
          newRows[rowIndex][tileIndex].isSelected = false;
        }
      }

      if (currentMove.startIndex != null) {
        newRows[currentMove.startIndex[0]][
          currentMove.startIndex[1]
        ].isSelected = true;
      }

      if (currentMove.endIndex != null) {
        newRows[currentMove.endIndex[0]][currentMove.endIndex[1]].isSelected =
          true;
      }

      return newRows;
    });
  }, [currentMove]);

  function onTileClick(tileIndex, tileHasPiece) {
    if (currentMove.startIndex == null) {
      setCurrentMove({ startIndex: tileIndex, endIndex: null });
      console.log("1, ", currentMove);
    } else if (!tileHasPiece) {
      setCurrentMove((oldCurrentMove) => {
        const newCurrentMove = { ...oldCurrentMove };
        newCurrentMove.endIndex = tileIndex;
        return newCurrentMove;
      });
    } else {
      setCurrentMove({ startIndex: tileIndex, endIndex: null });
    }
    console.log("2, ", currentMove);
  }

  useEffect(() => {
    console.log("schlaffo");
  }, [rows]);

  const removePieceFromTile = useCallback(function (index) {
    console.log("remove piece", rows);
    setRows((oldRows) => {
      const newRows = [...oldRows];
      newRows[index[0]][index[1]].hasPiece = false;

      return newRows;
    });
  }, []);

  const addPieceToTile = useCallback(function (index, isWhite, isPawn) {
    setRows((oldRows) => {
      const newRows = [...oldRows];
      newRows[index[0]][index[1]].hasPiece = true;
      newRows[index[0]][index[1]].piece.isWhite = true;
      newRows[index[0]][index[1]].piece.isPawn = true;
      return newRows;
    });
  }, []);
  // function addPieceToTile(index, isWhite, isPawn) {
  //   rows[index[0]][index[1]].piece.isWhite = isWhite;
  //   rows[index[0]][index[1]].piece.isPawn = isPawn;
  // }

  const makeMove = useCallback(function (
    startIndex,
    endIndex,
    pieceIsWhite,
    pieceIsPawn
  ) {
    removePieceFromTile(startIndex);
    addPieceToTile(endIndex, pieceIsWhite, pieceIsPawn);
  },
  []);

  function isMoveLegal(startIndex, endIndex) {
    if (rows[startIndex[0]][startIndex[1]].hasPiece)
      rows[startIndex[0]][startIndex[1]].piece.isWhite;
  }

  return {
    rows,
    setRows,
    removePieceFromTile,
    addPieceToTile,
    makeMove,
    onTileClick,
    // initializeBoard,
    status: { playerWhiteTurn, whiteStonesRemoved, blackStonesRemoved },
  };
}
