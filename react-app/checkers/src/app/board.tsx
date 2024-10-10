import { useEffect } from "react";
import Row from "./row";
import Tile from "./tile";
import React from "react";

export default function Board({ rows, onTileClick }) {
  //TODO
  useEffect(() => {
    console.log("new rows", rows);
  }, [rows]);

  return (
    <div className="flex flex-col-reverse border border-solid border-black">
      {rows.map((row, index) => (
        <Row key={index} onTileClick={onTileClick} rowIndex={index} row={row} />
      ))}
    </div>
  );
}
