import { useState } from "react";
import BaseButton from "./baseButton";

export default function SearchBar({ onSearch }) {
  const [searchInput, setSearchInput] = useState("Search-Player");

  function handleInputChange(event) {
    setSearchInput(event.target.value);
    console.log(event.target.value);
  }
  return (
    <div>
      <input
        className="min-w-64 border border-solid border-black min-h-10 bg-slate-300"
        type="text"
        required
        value={searchInput}
        onChange={handleInputChange}
      />
      <BaseButton onClick={onSearch} title={"Search"} />
    </div>
  );
}
