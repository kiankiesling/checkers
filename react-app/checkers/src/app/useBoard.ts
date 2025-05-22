import { useCallback, useEffect, useState } from "react";
import { calcMoves } from "./utils/calcMoves";
import { arrayEquals } from "./utils/utils";
import useGameLogic from "./useGameLogic";
import { start } from "repl";

export default function useBoard() {
  const { isMoveLegal, checkForJumpMoves, isTileIndexInBounds } =
    useGameLogic();

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
  const [whiteStonesRemoved, setWhiteStonesRemoved] = useState(0);
  const [blackStonesRemoved, setBlackStonesRemoved] = useState(0);
  const [currentMove, setCurrentMove] = useState({
    startIndex: null,
    endIndex: null,
  });

  const highlightPossibleQueenMoves = useCallback(function (
    startIndex,
    playerWhiteTurn,
    rows
  ) {
    let xIndex = startIndex[1] + 1;
    let yIndex = startIndex[0] + 1;
    //console.log("x: ", xIndex, "y: ", yIndex);
    while (
      isTileIndexInBounds(yIndex, xIndex) &&
      !rows[yIndex][xIndex].hasPiece
    ) {
      highlightTile([yIndex, xIndex], rows);
      xIndex = xIndex + 1;
      yIndex = yIndex + 1;
    }
    xIndex = startIndex[1] - 1;
    yIndex = startIndex[0] - 1;
    while (
      isTileIndexInBounds(yIndex, xIndex) &&
      !rows[yIndex][xIndex].hasPiece
    ) {
      highlightTile([yIndex, xIndex], rows);
      xIndex = xIndex - 1;
      yIndex = yIndex - 1;
    }
    xIndex = startIndex[1] + 1;
    yIndex = startIndex[0] - 1;
    while (
      isTileIndexInBounds(yIndex, xIndex) &&
      !rows[yIndex][xIndex].hasPiece
    ) {
      highlightTile([yIndex, xIndex], rows);
      xIndex = xIndex + 1;
      yIndex = yIndex - 1;
    }
    xIndex = startIndex[1] - 1;
    yIndex = startIndex[0] + 1;
    while (
      isTileIndexInBounds(yIndex, xIndex) &&
      !rows[yIndex][xIndex].hasPiece
    ) {
      highlightTile([yIndex, xIndex], rows);
      xIndex = xIndex - 1;
      yIndex = yIndex + 1;
    }
  },
  []);

  // TODO DeHighlighting auslagern
  const handleCurrentMove = useCallback(
    function ({ startIndex, endIndex }) {
      setRows((rows) => {
        const newRows = [...rows];

        for (const rowIndex in rows) {
          for (const tileIndex in rows[rowIndex]) {
            newRows[rowIndex][tileIndex].isSelected = false;
            newRows[rowIndex][tileIndex].isHighlighted = false;
          }
        }

        if (startIndex != null && playerWhiteTurn && endIndex == null) {
          newRows[startIndex[0]][startIndex[1]].isSelected = true;

          highlightPossibleMoves(startIndex, true, newRows);
        }
        if (startIndex != null && !playerWhiteTurn && endIndex == null) {
          newRows[startIndex[0]][startIndex[1]].isSelected = true;

          highlightPossibleMoves(startIndex, false, newRows);
        }
        if (
          endIndex != null &&
          startIndex != null &&
          isMoveLegal(newRows, startIndex, endIndex, playerWhiteTurn)
        ) {
          makeMove({ startIndex, endIndex, rows });
        }

        return newRows;
      });
    },
    [currentMove]
  );

  //TODO: checkForMoves nach checkForJumpMoves Vorbild, nur Jump Moves Highlighten
  function highlightPossibleMoves(startIndex, playerWhiteTurn, rows) {
    highlightPossibleQueenMoves(startIndex, playerWhiteTurn, rows);
    const jumpMoves = checkForJumpMoves(startIndex, playerWhiteTurn, rows);
    if (jumpMoves.length > 0) {
      for (let jumpMove of jumpMoves) {
        if (arrayEquals(startIndex, jumpMove[0])) {
          console.log("start", startIndex);
          console.log("jump", jumpMove[0]);
          //TODO
          highlightTile(jumpMove[1], rows);
        }
      }
      return;
    }
    console.log("jump moves", jumpMoves);
    //weiß;
    if (playerWhiteTurn) {
      if (
        isTileIndexInBounds(startIndex[0] + 1, startIndex[1] + 1) &&
        !rows[startIndex[0] + 1][startIndex[1] + 1].hasPiece
      ) {
        highlightTile([startIndex[0] + 1, startIndex[1] + 1], rows);
      }

      if (
        isTileIndexInBounds(startIndex[0] + 1, startIndex[1] - 1) &&
        !rows[startIndex[0] + 1][startIndex[1] - 1].hasPiece
      ) {
        highlightTile([startIndex[0] + 1, startIndex[1] - 1], rows);
      }
    }
    //schwarz
    if (!playerWhiteTurn) {
      if (
        isTileIndexInBounds(startIndex[0] - 1, startIndex[1] + 1) &&
        !rows[startIndex[0] - 1][startIndex[1] + 1].hasPiece
      ) {
        highlightTile([startIndex[0] - 1, startIndex[1] + 1], rows);
      }

      if (
        isTileIndexInBounds(startIndex[0] - 1, startIndex[1] - 1) &&
        !rows[startIndex[0] - 1][startIndex[1] - 1].hasPiece
      ) {
        highlightTile([startIndex[0] - 1, startIndex[1] - 1], rows);
      }
    }
  }

  const highlightTile = useCallback(function (index, rows) {
    rows[index[0]][index[1]].isHighlighted = true;
  });

  const increaseStonesRemoved = useCallback(function (playerWhiteTurn) {
    if (playerWhiteTurn) {
      setBlackStonesRemoved((oldBlackStonesRemoved) => {
        return oldBlackStonesRemoved + 1;
      });
    } else {
      setWhiteStonesRemoved((oldWhiteStonesRemoved) => {
        return oldWhiteStonesRemoved + 1;
      });
    }
  });

  function onTileClick(tileIndex, tileHasPiece, pieceIsWhite) {
    if (
      currentMove.startIndex != null &&
      arrayEquals(currentMove.startIndex, tileIndex)
    ) {
      setCurrentMove({ startIndex: null, endIndex: null });
      handleCurrentMove({ startIndex: null, endIndex: null });
    } else {
      if (
        // currentMove.startIndex == null &&
        tileHasPiece &&
        playerWhiteTurn == pieceIsWhite
      ) {
        setCurrentMove({ startIndex: tileIndex, endIndex: null });
        handleCurrentMove({ startIndex: tileIndex, endIndex: null });
      } else {
        setCurrentMove((oldCurrentMove) => {
          const newCurrentMove = { ...oldCurrentMove };
          newCurrentMove.endIndex = tileIndex;
          return newCurrentMove;
        });
        handleCurrentMove({
          startIndex: currentMove.startIndex,
          endIndex: tileIndex,
        });
      }
    }
  }

  const removePieceFromTile = useCallback(
    function (index, rows) {
      rows[index[0]][index[1]].hasPiece = false;

      return rows;
    },
    [setRows]
  );

  const addPieceToTile = useCallback(function (index, isWhite, isPawn, rows) {
    rows[index[0]][index[1]].hasPiece = true;
    rows[index[0]][index[1]].piece.isWhite = isWhite;
    rows[index[0]][index[1]].piece.isPawn = isPawn;
    return rows;
  }, []);

  const makeMove = useCallback(
    function ({ startIndex, endIndex, rows }) {
      const pieceIsWhite = playerWhiteTurn;
      const pieceIsPawn = true;
      removePieceFromTile(startIndex, rows);
      addPieceToTile(endIndex, pieceIsWhite, pieceIsPawn, rows);
      if (
        startIndex[1] - endIndex[1] == 2 ||
        startIndex[1] - endIndex[1] == -2
      ) {
        makeJumpMove(startIndex, endIndex, rows, pieceIsWhite);
      } else {
        setPlayerWhiteTurn(!playerWhiteTurn);
      }
      setCurrentMove({ startIndex: null, endIndex: null });
      handleCurrentMove({ startIndex: null, endIndex: null });
    },
    [
      currentMove,
      playerWhiteTurn,
      removePieceFromTile,
      addPieceToTile,
      setBlackStonesRemoved,
    ]
  );

  const makeJumpMove = useCallback(function (
    startIndex,
    endIndex,
    rows,
    pieceIsWhite
  ) {
    if (pieceIsWhite && startIndex[1] - endIndex[1] == -2) {
      removePieceFromTile([startIndex[0] + 1, startIndex[1] + 1], rows);
      increaseStonesRemoved(pieceIsWhite);
    }
    if (pieceIsWhite && startIndex[1] - endIndex[1] == 2) {
      removePieceFromTile([startIndex[0] + 1, startIndex[1] - 1], rows);
      increaseStonesRemoved(pieceIsWhite);
    }
    if (!pieceIsWhite && startIndex[1] - endIndex[1] == -2) {
      removePieceFromTile([startIndex[0] - 1, startIndex[1] + 1], rows);
      increaseStonesRemoved(pieceIsWhite);
    }
    if (!pieceIsWhite && startIndex[1] - endIndex[1] == 2) {
      removePieceFromTile([startIndex[0] - 1, startIndex[1] - 1], rows);
      increaseStonesRemoved(pieceIsWhite);
    }
  },
  []);

  return {
    rows,
    setRows,
    onTileClick,
    // initializeBoard,
    status: { playerWhiteTurn, whiteStonesRemoved, blackStonesRemoved },
  };
}
