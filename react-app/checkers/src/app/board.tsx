import Row from "./row";
import Tile from "./tile";

export default function ({ rows }) {
  //TODO
  function handleClick(event) {
    console.log(event.target.value);
  }
  return (
    <div className="flex flex-col-reverse border border-solid border-black">
      {rows.map((row) => (
        <Row row={row} onClick={handleClick} />
      ))}
    </div>
  );
}
