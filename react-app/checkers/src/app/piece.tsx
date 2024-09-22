export default function ({ pieceIsWhite, pieceIsPawn }) {
  const pieceColor = pieceIsWhite ? "bg-slate-300" : "bg-slate-500";
  return <div className={pieceColor + " rounded-full w-12 h-12 block "}></div>;
}
