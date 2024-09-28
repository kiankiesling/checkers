import Row from "./row";
import Tile from "./tile";

export default function ({ rows }) {
  //TODO

  return (
    <div className="flex flex-col-reverse border border-solid border-black">
      {rows.map((row, xindex) => (
        <Row row={row} xindex={xindex} />
      ))}
    </div>
  );
}
