import Piece from "./piece";

export default function ({
  coordinate,
  isWhite,
  onClick,
  hasPiece,
  pieceIsWhite,
  pieceIsPawn,
}) {
  const color = isWhite ? "bg-slate-400" : "bg-slate-900";
  return (
    <div
      onClick={() => onClick(coordinate)}
      className={color + " min-w-24 min-h-24 flex items-center justify-center"}
    >
      <Piece pieceIsWhite={!isWhite} pieceIsPawn={true} />
    </div>
  );
}
