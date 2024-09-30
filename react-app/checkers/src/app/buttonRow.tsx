import BaseButton from "./baseButton";
import SearchBar from "./searchBar";

export default function ({ onSearch, onStart }) {
  return (
    <div className="flex gap-0.5">
      {/* <SearchBar onSearch={onSearch} /> */}
      {/* <BaseButton title={"Spiel Starten"} onClick={onStart}></BaseButton> */}
      <button onClick={onSearch}>test</button>
    </div>
  );
}
