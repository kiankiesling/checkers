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

  return {
    rows,
    setRows,
    status: { playerWhiteTurn, whiteStonesRemoved, blackStonesRemoved },
  };
}
