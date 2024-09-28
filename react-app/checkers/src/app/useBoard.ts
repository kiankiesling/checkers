import { useCallback, useEffect, useState } from "react";

export default function () {
  const whiteTile = { isWhite: true, piece: { isWhite: null, isPawn: null } };
  const [rows, setRows] = useState([
    [
      { isWhite: false, piece: { isWhite: true, isPawn: true } },
      whiteTile,
      { isWhite: false, piece: { isWhite: true, isPawn: true } },
      whiteTile,
      { isWhite: false, piece: { isWhite: true, isPawn: true } },
      whiteTile,
      { isWhite: false, piece: { isWhite: true, isPawn: true } },
      whiteTile,
    ],
    [
      whiteTile,
      { isWhite: false, piece: { isWhite: true, isPawn: true } },
      whiteTile,
      { isWhite: false, piece: { isWhite: true, isPawn: true } },
      whiteTile,
      { isWhite: false, piece: { isWhite: true, isPawn: true } },
      whiteTile,
      { isWhite: false, piece: { isWhite: true, isPawn: true } },
    ],
    [
      { isWhite: false, piece: { isWhite: true, isPawn: true } },
      whiteTile,
      { isWhite: false, piece: { isWhite: true, isPawn: true } },
      whiteTile,
      { isWhite: false, piece: { isWhite: true, isPawn: true } },
      whiteTile,
      { isWhite: false, piece: { isWhite: true, isPawn: true } },
      whiteTile,
    ],
    [
      whiteTile,
      { isWhite: false, piece: { isWhite: null, isPawn: null } },
      whiteTile,
      { isWhite: false, piece: { isWhite: null, isPawn: null } },
      whiteTile,
      { isWhite: false, piece: { isWhite: null, isPawn: null } },
      whiteTile,
      { isWhite: false, piece: { isWhite: null, isPawn: null } },
    ],
    [
      { isWhite: false, piece: { isWhite: null, isPawn: null } },
      whiteTile,
      { isWhite: false, piece: { isWhite: null, isPawn: null } },
      whiteTile,
      { isWhite: false, piece: { isWhite: null, isPawn: null } },
      whiteTile,
      { isWhite: false, piece: { isWhite: null, isPawn: null } },
      whiteTile,
    ],
    [
      whiteTile,
      { isWhite: false, piece: { isWhite: false, isPawn: true } },
      whiteTile,
      { isWhite: false, piece: { isWhite: false, isPawn: true } },
      whiteTile,
      { isWhite: false, piece: { isWhite: false, isPawn: true } },
      whiteTile,
      { isWhite: false, piece: { isWhite: false, isPawn: true } },
    ],
    [
      { isWhite: false, piece: { isWhite: false, isPawn: true } },
      whiteTile,
      { isWhite: false, piece: { isWhite: false, isPawn: true } },
      whiteTile,
      { isWhite: false, piece: { isWhite: false, isPawn: true } },
      whiteTile,
      { isWhite: false, piece: { isWhite: false, isPawn: true } },
      whiteTile,
    ],
    [
      whiteTile,
      { isWhite: false, piece: { isWhite: false, isPawn: true } },
      whiteTile,
      { isWhite: false, piece: { isWhite: false, isPawn: true } },
      whiteTile,
      { isWhite: false, piece: { isWhite: false, isPawn: true } },
      whiteTile,
      { isWhite: false, piece: { isWhite: false, isPawn: true } },
    ],
  ]);

  let [playerWhiteTurn, setPlayerWhiteTurn] = useState(true);
  let [whiteStonesRemoved, setWhiteStonesRemoved] = useState(2);
  let [blackStonesRemoved, setBlackStonesRemoved] = useState(10);

  useEffect(() => {
    console.log("schlaffo");
  }, [rows]);

  function removePieceFromTile(index) {
    rows[index[0]][index[1]].piece.isWhite = null;
    rows[index[0]][index[1]].piece.isPawn = null;
  }

  function addPieceToTile(index, isWhite, isPawn) {
    rows[index[0]][index[1]].piece.isWhite = isWhite;
    rows[index[0]][index[1]].piece.isPawn = isPawn;
  }

  function makeMove(startIndex, endIndex) {
    rows[endIndex[0]][endIndex[1]].piece.isWhite =
      rows[startIndex[0]][startIndex[1]].piece.isWhite;
    rows[endIndex[0]][endIndex[1]].piece.isPawn =
      rows[startIndex[0]][startIndex[1]].piece.isPawn;
    rows[startIndex[0]][startIndex[1]].piece.isWhite = null;
    rows[startIndex[0]][startIndex[1]].piece.isPawn = null;
  }

  return {
    rows,
    setRows,
    removePieceFromTile,
    addPieceToTile,
    makeMove,
    status: { playerWhiteTurn, whiteStonesRemoved, blackStonesRemoved },
  };
}
