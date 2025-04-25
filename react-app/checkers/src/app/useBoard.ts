import { useCallback, useEffect, useState } from "react";
import { calcMoves } from "./utils/calcMoves";
import { arrayEquals } from "./utils/utils";
import useGameLogic from "./useGameLogic";
import { start } from "repl";


export default function useBoard() {
  const {
    isMoveLegal,
    highlightPossibleMoves,
  } = useGameLogic();


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



  // Alle statusändernden dinge auf der newRows Kopie ausführen, auch makeMove (pure function), insgesamt vllt kleinere Funktionen 
  const handleCurrentMove = useCallback(
    function ({ startIndex, endIndex }) {
      console.log("handleCurrentMove")
      setRows((rows) => {
        const newRows = [...rows];

        for (const rowIndex in rows) {
          for (const tileIndex in rows[rowIndex]) {
            newRows[rowIndex][tileIndex].isSelected = false;
            newRows[rowIndex][tileIndex].isHighlighted = false;
          }
        }

        if (startIndex != null && playerWhiteTurn) {
          newRows[startIndex[0]][
            startIndex[1]
          ].isSelected = true;

          highlightPossibleMoves(startIndex, true, newRows)
        }
        if (startIndex != null && !playerWhiteTurn) {
          newRows[startIndex[0]][
            startIndex[1]
          ].isSelected = true;

          highlightPossibleMoves(startIndex, false, newRows)
        }
        if (
          endIndex != null &&
          startIndex != null &&
          isMoveLegal(newRows, startIndex, endIndex, playerWhiteTurn)
        ) {
          makeMove({ startIndex, endIndex, rows });
        }

        return newRows;
      })
    }, [currentMove]);


  const increaseStonesRemoved = useCallback(
    function (playerWhiteTurn) {
      if (playerWhiteTurn) {
        setBlackStonesRemoved((oldBlackStonesRemoved) => { return oldBlackStonesRemoved + 1 })
      }
      else {
        setWhiteStonesRemoved((oldWhiteStonesRemoved) => { return oldWhiteStonesRemoved + 1 })
      }
    }
  )

  function onTileClick(tileIndex, tileHasPiece, pieceIsWhite) {
    if (currentMove.startIndex != null && arrayEquals(currentMove.startIndex, tileIndex)) {
      setCurrentMove({ startIndex: null, endIndex: null })
      handleCurrentMove({ startIndex: null, endIndex: null });
    }
    else {
      if (
        // currentMove.startIndex == null &&
        tileHasPiece &&
        playerWhiteTurn == pieceIsWhite
      ) {
        setCurrentMove({ startIndex: tileIndex, endIndex: null });
        handleCurrentMove({ startIndex: tileIndex, endIndex: null });
      }
      else {
        setCurrentMove((oldCurrentMove) => {
          const newCurrentMove = { ...oldCurrentMove };
          newCurrentMove.endIndex = tileIndex;
          return newCurrentMove;
        })
        handleCurrentMove({ startIndex: currentMove.startIndex, endIndex: tileIndex });

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



  const addPieceToTile = useCallback(
    function (index, isWhite, isPawn, rows) {
      rows[index[0]][index[1]].hasPiece = true;
      rows[index[0]][index[1]].piece.isWhite = isWhite;
      rows[index[0]][index[1]].piece.isPawn = isPawn;
      return rows;

    },
    []
  );

  // alte variante ohne Jump Moves

  // const makeMove = useCallback(
  //   function () {
  //     const startIndex = currentMove.startIndex;
  //     const endIndex = currentMove.endIndex;
  //     const pieceIsWhite = playerWhiteTurn;
  //     const pieceIsPawn = true;
  //     removePieceFromTile(startIndex);
  //     addPieceToTile(endIndex, pieceIsWhite, pieceIsPawn);
  //     setPlayerWhiteTurn(!playerWhiteTurn);
  //     setCurrentMove({ startIndex: null, endIndex: null });
  //   },
  //   [currentMove, playerWhiteTurn, removePieceFromTile, addPieceToTile]
  // );

  const makeMove = useCallback(
    function ({ startIndex, endIndex, rows }) {
      // const startIndex = currentMove.startIndex;
      // const endIndex = currentMove.endIndex;
      const pieceIsWhite = playerWhiteTurn;
      const pieceIsPawn = true;
      removePieceFromTile(startIndex, rows);
      addPieceToTile(endIndex, pieceIsWhite, pieceIsPawn, rows);
      if (startIndex[1] - endIndex[1] == 2 || startIndex[1] - endIndex[1] == -2) {
        makeJumpMove(startIndex, endIndex, rows, pieceIsWhite)
      }
      setPlayerWhiteTurn(!playerWhiteTurn);
      setCurrentMove({ startIndex: null, endIndex: null });
      handleCurrentMove({ startIndex: null, endIndex: null });
    },
    [currentMove, playerWhiteTurn, removePieceFromTile, addPieceToTile, setBlackStonesRemoved]
  )

  const makeJumpMove = useCallback(
    function (startIndex, endIndex, rows, pieceIsWhite) {
      if (pieceIsWhite && startIndex[1] - endIndex[1] == -2) {
        removePieceFromTile([startIndex[0] + 1, startIndex[1] + 1], rows)
        increaseStonesRemoved(pieceIsWhite)
      }
      if (pieceIsWhite && startIndex[1] - endIndex[1] == 2) {
        removePieceFromTile([startIndex[0] + 1, startIndex[1] - 1], rows)
        increaseStonesRemoved(pieceIsWhite)
      }
      if (!pieceIsWhite && startIndex[1] - endIndex[1] == -2) {
        removePieceFromTile([startIndex[0] - 1, startIndex[1] + 1], rows)
        increaseStonesRemoved(pieceIsWhite)
      }
      if (!pieceIsWhite && startIndex[1] - endIndex[1] == 2) {
        removePieceFromTile([startIndex[0] - 1, startIndex[1] - 1], rows)
        increaseStonesRemoved(pieceIsWhite)
      }
    }, []
  )

  return {
    rows,
    setRows,
    onTileClick,
    // initializeBoard,
    status: { playerWhiteTurn, whiteStonesRemoved, blackStonesRemoved },
  };
}
