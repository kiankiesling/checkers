import { useState } from "react";
import Piece from "./piece";

export default function ({ coords, isWhite, onClick, hasPiece, piece }) {
  const [selected, setSelected] = useState(false);
  let color = selected
    ? "bg-red-400"
    : isWhite
    ? "bg-slate-400"
    : "bg-slate-900";
  function handleClick() {
    setSelected(!selected);
  }
  if (piece.isWhite == null) {
    return (
      <div
        onClick={handleClick}
        className={
          color + " min-w-24 min-h-24 flex items-center justify-center"
        }
      ></div>
    );
  }
  return (
    <div
      onClick={handleClick}
      className={color + " min-w-24 min-h-24 flex items-center justify-center"}
    >
      <Piece pieceIsWhite={piece.isWhite} pieceIsPawn={piece.isPawn} />
    </div>
  );
}
