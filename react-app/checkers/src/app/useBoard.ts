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
  const [whiteStonesRemoved, setWhiteStonesRemoved] = useState(2);
  const [blackStonesRemoved, setBlackStonesRemoved] = useState(3);
  const [currentMove, setCurrentMove] = useState({
    startIndex: null,
    endIndex: null,
  });


  //TODO Bug der 2x Make Move laufen lässt, UseEffect durch funktion ersetzen, die bei update von current move aufgerufen wird.
  // useEffect(() => {
  //   setRows((rows) => {
  //     const newRows = [...rows];

  //     for (const rowIndex in rows) {
  //       for (const tileIndex in rows[rowIndex]) {
  //         newRows[rowIndex][tileIndex].isSelected = false;
  //         newRows[rowIndex][tileIndex].isHighlighted = false;
  //       }
  //     }

  //     if (currentMove.startIndex != null && playerWhiteTurn) {
  //       newRows[currentMove.startIndex[0]][
  //         currentMove.startIndex[1]
  //       ].isSelected = true;

  //       highlightPossibleMoves(currentMove.startIndex, true, newRows)
  //     }
  //     if (currentMove.startIndex != null && !playerWhiteTurn) {
  //       newRows[currentMove.startIndex[0]][
  //         currentMove.startIndex[1]
  //       ].isSelected = true;

  //       highlightPossibleMoves(currentMove.startIndex, false, newRows)
  //     }
  //     if (
  //       currentMove.endIndex != null &&
  //       currentMove.startIndex != null &&
  //       isMoveLegal(rows, currentMove.startIndex, currentMove.endIndex, playerWhiteTurn)
  //     ) {
  //       makeMove();
  //     }

  //     return newRows;
  //   });
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [currentMove]);

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
      debugger
      if (pieceIsWhite && startIndex[1] - endIndex[1] == -2) {
        removePieceFromTile([startIndex[0] + 1, startIndex[1] + 1], rows)
        setBlackStonesRemoved((oldBlackStonesRemoved) => {
          debugger
          const newBlackStonesRemoved = oldBlackStonesRemoved + 1;
          return newBlackStonesRemoved;
        })
      }
      if (pieceIsWhite && startIndex[1] - endIndex[1] == 2) {
        removePieceFromTile([startIndex[0] + 1, startIndex[1] - 1], rows)
      }
      if (!pieceIsWhite && startIndex[1] - endIndex[1] == -2) {
        removePieceFromTile([startIndex[0] - 1, startIndex[1] + 1], rows)
      }
      if (!pieceIsWhite && startIndex[1] - endIndex[1] == 2) {
        removePieceFromTile([startIndex[0] - 1, startIndex[1] - 1], rows)
      }
      setPlayerWhiteTurn(!playerWhiteTurn);
      setCurrentMove({ startIndex: null, endIndex: null });
      // handleCurrentMove({ startIndex: null, endIndex: null });
    },
    [currentMove, playerWhiteTurn, removePieceFromTile, addPieceToTile, setBlackStonesRemoved]
  )

  return {
    rows,
    setRows,
    onTileClick,
    // initializeBoard,
    status: { playerWhiteTurn, whiteStonesRemoved, blackStonesRemoved },
  };
}
