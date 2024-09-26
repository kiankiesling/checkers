import Tile from "./tile";

export default function ({ row, onClick }) {
  return (
    <div className="flex">
      {row.map((tile) => (
        <Tile
          isWhite={tile.isWhite}
          piece={tile.piece}
          onClick={() => onClick()}
        />
      ))}
    </div>
  );
}
