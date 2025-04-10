"use client";
import Board from "./board";
import React from "react";

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

  const handleOnSearch = useCallback(
    function () {
      // initializeBoard();
      makeMove([2, 0], [3, 3], true, true, true);
    },
    [addPieceToTile]
  );


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
