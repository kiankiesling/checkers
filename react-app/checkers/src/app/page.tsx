"use client";
import Board from "./board";

import Status from "./status";
import ButtonRow from "./buttonRow";
import useBoard from "./useBoard";
import SearchBar from "./searchBar";

export default function Home() {
  let { rows, setRows, status } = useBoard();

  return (
    <div className="flex flex-col content-center items-center min-h-screen p-10   font-[family-name:var(--font-geist-sans)] gap-3">
      <h1>Checkers</h1>
      <Status
        playerWhiteTurn={status.playerWhiteTurn}
        whiteStonesRemoved={status.whiteStonesRemoved}
        blackStonesRemoved={status.blackStonesRemoved}
      />
      <Board rows={rows} />
      <ButtonRow
        onSearch={() =>
          setRows([
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
          ])
        }
        onStart={() => null}
      />
    </div>
  );
}
