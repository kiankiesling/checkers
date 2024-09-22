import BaseButton from "./baseButton";

export default function ({ onSearch, onStart }) {
  return (
    <div>
      <BaseButton title={"Suchen"} onClick={onSearch}></BaseButton>
      <BaseButton title={"Spiel Starten"} onClick={onStart}></BaseButton>
    </div>
  );
}
