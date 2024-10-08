import React from "react";
import Piece from "./piece";

export default function Status({
  playerWhiteTurn,
  whiteStonesRemoved,
  blackStonesRemoved,
}) {
  return (
    <div className="rounded border border-solid border-black w-640 justify-between flex">
      <p>{playerWhiteTurn ? "white's turn" : "black's turn"} </p>
      <div className={"flex bg-slate-300 p-10 w-1/2 justify-start"}>
        {Array.from(Array(blackStonesRemoved)).map((item, index) => (
          <Piece key={index} pieceIsWhite={false} pieceIsPawn={true} />
        ))}
      </div>
      <div className="flex  bg-slate-500 p-10 w-1/2 justify-end">
        {Array.from(Array(whiteStonesRemoved)).map((item, index) => (
          <Piece key={index} pieceIsWhite={true} pieceIsPawn={true} />
        ))}
      </div>
    </div>
  );
}
