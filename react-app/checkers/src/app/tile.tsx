import Piece from "./piece";

export default function ({ coordinate, isWhite, onClick, hasPiece, piece }) {
  let color = isWhite ? "bg-slate-400" : "bg-slate-900";

  if (piece.isWhite == null) {
    return (
      <div
        onClick={onClick()}
        className={
          color + " min-w-24 min-h-24 flex items-center justify-center"
        }
      ></div>
    );
  }
  return (
    <div
      onClick={onClick()}
      className={color + " min-w-24 min-h-24 flex items-center justify-center"}
    >
      <Piece pieceIsWhite={piece.isWhite} pieceIsPawn={piece.isPawn} />
    </div>
  );
}
