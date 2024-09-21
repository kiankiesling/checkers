import Tile from "./tile";

export default function () {
  let row = [
    { isWhite: true },
    { isWhite: false },
    { isWhite: true },
    { isWhite: false },
    { isWhite: true },
    { isWhite: false },
    { isWhite: true },
    { isWhite: false },
  ];
  return row.map((tile) => <Tile isWhite={tile.isWhite} />);
}
