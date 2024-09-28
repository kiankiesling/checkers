import { useState } from "react";
import Tile from "./tile";

export default function ({ row, onClick, xindex }) {
  const [target, setTarget] = useState();
  function handleClick(event) {
    console.log(event.target);
    setTarget(event.target);
  }

  return (
    <div className="flex">
      {row.map((tile, yindex) => (
        <Tile
          coords={row.xindex + " " + yindex}
          isWhite={tile.isWhite}
          piece={tile.piece}
          onClick={(event) => handleClick()}
        />
      ))}
    </div>
  );
}
