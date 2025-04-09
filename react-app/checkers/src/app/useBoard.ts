import { useCallback, useEffect, useState } from "react";
import { calcMoves } from "./utils/calcMoves";

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

        highlightPossibleMoves(currentMove.startIndex, true, newRows)

        //TODO abhängig von anderen pieces machen
        // if (isTileIndexInBounds(currentMove.startIndex[0] + 1, currentMove.startIndex[1] + 1)) {
        //   newRows[currentMove.startIndex[0] + 1][
        //     currentMove.startIndex[1] + 1
        //   ].isHighlighted = true;
        // }
        // if (isTileIndexInBounds(currentMove.startIndex[0] + 1, currentMove.startIndex[1] - 1)) {
        //   newRows[currentMove.startIndex[0] + 1][
        //     currentMove.startIndex[1] - 1
        //   ].isHighlighted = true;
        // }
      }
      if (currentMove.startIndex != null && !playerWhiteTurn) {
        newRows[currentMove.startIndex[0]][
          currentMove.startIndex[1]
        ].isSelected = true;

        highlightPossibleMoves(currentMove.startIndex, false, newRows)

        // if (isTileIndexInBounds(currentMove.startIndex[0] - 1, currentMove.startIndex[1] + 1)) {
        //   newRows[currentMove.startIndex[0] - 1][
        //     currentMove.startIndex[1] + 1
        //   ].isHighlighted = true;
        // }
        // if (isTileIndexInBounds(currentMove.startIndex[0] - 1, currentMove.startIndex[1] - 1)) {
        //   newRows[currentMove.startIndex[0] - 1][
        //     currentMove.startIndex[1] - 1
        //   ].isHighlighted = true;
        // }
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


  //TODO Tiles abwählbar machen (endindex wird auch belegt wenn er es nicht soll)
  function onTileClick(tileIndex, tileHasPiece, pieceIsWhite) {
    if (
      // currentMove.startIndex == null &&
      tileHasPiece &&
      playerWhiteTurn == pieceIsWhite
    ) {
      setCurrentMove({ startIndex: tileIndex, endIndex: null });
      console.log("1, ", currentMove);
    }
    else {
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
      setRows(
        (oldRows) => {
          const newRows = [...oldRows];
          newRows[index[0]][index[1]].hasPiece = true;
          newRows[index[0]][index[1]].piece.isWhite = isWhite;
          newRows[index[0]][index[1]].piece.isPawn = isPawn;
          return newRows;
        });
    },
    []
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


    //standard move

    if (
      rows[startIndex[0]][startIndex[1]].hasPiece &&
      !rows[endIndex[0]][endIndex[1]].hasPiece &&
      isYDifLegal(yDif) &&
      isXDifLegal(xDif)) {
      return true;
    }

    //jump move weiß
    else if (playerWhiteTurn && rows[startIndex[0]][startIndex[1]].hasPiece &&
      !rows[endIndex[0]][endIndex[1]].hasPiece && isYJumpDifLegal(yDif) && isXJumpDifLegal(xDif)) {
      if (xDif == 2 && rows[startIndex[0] + 1][startIndex[1] + 1].hasPiece && !rows[startIndex[0] + 1][startIndex[1] + 1].piece.isWhite)
        return true
      if (xDif == -2 && rows[startIndex[0] + 1][startIndex[1] - 1].hasPiece && !rows[startIndex[0] + 1][startIndex[1] - 1].piece.isWhite) {
        return true
      }
    }
    //jump move schwarz
    else if (!playerWhiteTurn && rows[startIndex[0]][startIndex[1]].hasPiece &&
      !rows[endIndex[0]][endIndex[1]].hasPiece && isYJumpDifLegal(yDif) && isXJumpDifLegal(xDif)) {
      if (xDif == 2 && rows[startIndex[0] - 1][startIndex[1] + 1].hasPiece && rows[startIndex[0] - 1][startIndex[1] + 1].piece.isWhite)
        return true
      if (xDif == -2 && rows[startIndex[0] - 1][startIndex[1] - 1].hasPiece && rows[startIndex[0] - 1][startIndex[1] - 1].piece.isWhite) {
        return true
      }
    }

    return false;
  }

  function isJumpMoveLegal() {
    const startIndex = currentMove.startIndex;
    const endIndex = currentMove.endIndex;
    const yDif = endIndex[0] - startIndex[0];
    const xDif = endIndex[1] - startIndex[1];

    if (
      rows[startIndex[0]][startIndex[1]].hasPiece &&
      !rows[endIndex[0]][endIndex[1]].hasPiece &&
      isYJumpDifLegal(yDif) &&
      isXJumpDifLegal(xDif)
    ) {
      return true;
    }
    return false;
  }

  // ausgelagerter Check für useEffect abhängig von currentMove
  function highlightPossibleMoves(startIndex, playerWhiteTurn, rows) {
    if (playerWhiteTurn) {
      if (isTileIndexInBounds(startIndex[0] + 1, startIndex[1] + 1) && !rows[startIndex[0] + 1][startIndex[1] + 1].hasPiece) {
        rows[startIndex[0] + 1][
          startIndex[1] + 1
        ].isHighlighted = true;
      }
      else if (isTileIndexInBounds(startIndex[0] + 2, startIndex[1] + 2) && !rows[startIndex[0] + 2][startIndex[1] + 2].hasPiece) {
        rows[startIndex[0] + 2][
          startIndex[1] + 2
        ].isHighlighted = true;
      }
      if (isTileIndexInBounds(startIndex[0] + 1, startIndex[1] - 1) && !rows[startIndex[0] + 1][startIndex[1] - 1].hasPiece) {
        rows[startIndex[0] + 1][
          startIndex[1] - 1
        ].isHighlighted = true;
      }
      else if (isTileIndexInBounds(startIndex[0] + 2, startIndex[1] - 2) && !rows[startIndex[0] + 2][startIndex[1] - 2].hasPiece) {
        rows[startIndex[0] + 2][
          startIndex[1] - 2
        ].isHighlighted = true;
      }
    }
    if (!playerWhiteTurn) {
      if (isTileIndexInBounds(startIndex[0] - 1, startIndex[1] + 1) && !rows[startIndex[0] - 1][startIndex[1] + 1].hasPiece) {
        rows[startIndex[0] - 1][
          startIndex[1] + 1
        ].isHighlighted = true;
      }
      else if (isTileIndexInBounds(startIndex[0] - 2, startIndex[1] + 2) && !rows[startIndex[0] - 2][startIndex[1] + 2].hasPiece) {
        rows[startIndex[0] - 2][
          startIndex[1] + 2
        ].isHighlighted = true;
      }
      if (isTileIndexInBounds(startIndex[0] - 1, startIndex[1] - 1) && !rows[startIndex[0] - 1][startIndex[1] - 1].hasPiece) {
        rows[startIndex[0] - 1][
          startIndex[1] - 1
        ].isHighlighted = true;
      }
      else if (isTileIndexInBounds(startIndex[0] - 2, startIndex[1] - 2) && !rows[startIndex[0] - 2][startIndex[1] - 2].hasPiece) {
        rows[startIndex[0] - 2][
          startIndex[1] - 2
        ].isHighlighted = true;
      }
    }

  }

  function isTileIndexInBounds(rowIndex, tileIndex) {
    return (rowIndex < 8 && tileIndex < 8 && rowIndex >= 0 && tileIndex >= 0);
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
