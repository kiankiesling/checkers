import Row from "./row";
import Tile from "./tile";

export default function ({ rows }) {
  return (
    <div className="block">
      {rows.map((row) => (
        <Row row={row} />
      ))}
    </div>
  );
}
