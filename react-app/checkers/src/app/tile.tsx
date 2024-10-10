import { useState } from "react";
import Piece from "./piece";
import React from "react";

export default function Tile({
  coords,
  isWhite,
  onClick,
  hasPiece,
  pieceIsWhite,
  pieceIsPawn,
  tileHasPiece,
  tileIndex,
  onTileClick,
  isSelected,
  isHighlighted,
}) {
  const [selected, setSelected] = useState(false);
  let color = isWhite ? "bg-slate-400" : "bg-slate-900";
  color = isSelected ? "bg-red-400" : color;
  color = isHighlighted ? "bg-red-200" : color;
  // function handleClick() {
  //   setSelected(!selected);
  // }
  if (tileHasPiece) {
    return (
      <div
        onClick={() => onTileClick(tileIndex, tileHasPiece, pieceIsWhite)}
        className={
          color + " min-w-24 min-h-24 flex items-center justify-center"
        }
      >
        {/* {index} */}
        <Piece pieceIsWhite={pieceIsWhite} pieceIsPawn={pieceIsPawn} />
      </div>
    );
  }

  return (
    <div
      onClick={() => onTileClick(tileIndex, tileHasPiece)}
      className={color + " min-w-24 min-h-24 flex items-center justify-center"}
    >
      {/* {index} */}
    </div>
  );
}
