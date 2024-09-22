import Tile from "./tile";

export default function ({ row }) {
  return (
    <div className="flex">
      {row.map((tile) => (
        <Tile isWhite={tile.isWhite} pieceIsWhite={true} piece={"pawn"} />
      ))}
    </div>
  );
}
