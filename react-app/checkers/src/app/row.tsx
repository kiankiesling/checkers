import { useState } from "react";
import Tile from "./tile";

export default function ({ row, onClick, rowIndex, onTileClick }) {
  const [target, setTarget] = useState();
  function handleClick(event) {
    console.log(event.target);
    setTarget(event.target);
  }

  return (
    <div className="flex">
      {row.map((tile, index) => (
        <Tile
          key={index}
          onTileClick={onTileClick}
          tileIndex={[rowIndex, index]}
          isWhite={tile.isWhite}
          pieceIsWhite={tile.piece.isWhite}
          pieceIsPawn={tile.piece.isPawn}
          tileHasPiece={tile.hasPiece}
          onClick={(event) => handleClick()}
          isSelected={tile.isSelected}
        />
      ))}
    </div>
  );
}
