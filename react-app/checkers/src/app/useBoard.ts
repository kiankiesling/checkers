import { useCallback, useEffect, useState } from "react";

export default function () {
  let [rows, setRows] = useState([
    [
      { isWhite: true },
      { isWhite: false },
      { isWhite: true },
      { isWhite: false },
      { isWhite: true },
      { isWhite: false },
      { isWhite: true },
      { isWhite: false },
    ],
    [
      { isWhite: false },
      { isWhite: true },
      { isWhite: false },
      { isWhite: true },
      { isWhite: false },
      { isWhite: true },
      { isWhite: false },
      { isWhite: true },
    ],
    [
      { isWhite: true },
      { isWhite: false },
      { isWhite: true },
      { isWhite: false },
      { isWhite: true },
      { isWhite: false },
      { isWhite: true },
      { isWhite: false },
    ],
    [
      { isWhite: false },
      { isWhite: true },
      { isWhite: false },
      { isWhite: true },
      { isWhite: false },
      { isWhite: true },
      { isWhite: false },
      { isWhite: true },
    ],
    [
      { isWhite: true },
      { isWhite: false },
      { isWhite: true },
      { isWhite: false },
      { isWhite: true },
      { isWhite: false },
      { isWhite: true },
      { isWhite: false },
    ],
    [
      { isWhite: false },
      { isWhite: true },
      { isWhite: false },
      { isWhite: true },
      { isWhite: false },
      { isWhite: true },
      { isWhite: false },
      { isWhite: true },
    ],
    [
      { isWhite: true },
      { isWhite: false },
      { isWhite: true },
      { isWhite: false },
      { isWhite: true },
      { isWhite: false },
      { isWhite: true },
      { isWhite: false },
    ],
    [
      { isWhite: false },
      { isWhite: true },
      { isWhite: false },
      { isWhite: true },
      { isWhite: false },
      { isWhite: true },
      { isWhite: false },
      { isWhite: true },
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
