import Row from "./row";
import Tile from "./tile";

export default function ({ rows }) {
  return (
    <div className="block border border-solid border-black">
      {rows.map((row) => (
        <Row row={row} />
      ))}
    </div>
  );
}
