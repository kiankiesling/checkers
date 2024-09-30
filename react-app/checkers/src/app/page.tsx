"use client";
import Board from "./board";

import Status from "./status";
import ButtonRow from "./buttonRow";
import useBoard from "./useBoard";
import SearchBar from "./searchBar";
import { useCallback, useEffect } from "react";

export default function Home() {
  let {
    rows,
    setRows,
    removePieceFromTile,
    addPieceToTile,
    makeMove,
    onTileClick,
    // initializeBoard,
    status,
  } = useBoard();

  // console.log("init ", rows);

  const handleOnSearch = useCallback(
    function () {
      console.log("page ", rows);
      // initializeBoard();
      console.log("handle on search!");
      makeMove([2, 0], [3, 3], true, true);
    },
    [addPieceToTile]
  );

  useEffect(() => {
    console.log("schlaffo zwei");
  }, [rows, removePieceFromTile]);

  return (
    <div className="flex flex-col content-center items-center min-h-screen p-10   font-[family-name:var(--font-geist-sans)] gap-3">
      <h1>Checkers</h1>
      <Status
        playerWhiteTurn={status.playerWhiteTurn}
        whiteStonesRemoved={status.whiteStonesRemoved}
        blackStonesRemoved={status.blackStonesRemoved}
      />
      <Board rows={rows} onTileClick={onTileClick} />
      <ButtonRow onSearch={() => handleOnSearch()} onStart={handleOnSearch} />
    </div>
  );
}
