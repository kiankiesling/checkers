export default function ({ isWhite }) {
  if (isWhite) {
    return (
      <div className="bg-blue-800 border-solid border-lime-700 min-w-20 min-h-20 block"></div>
    );
  }
  return (
    <div className="bg-red-800 border-solid border-lime-700 min-w-20 min-h-20 block"></div>
  );
}
