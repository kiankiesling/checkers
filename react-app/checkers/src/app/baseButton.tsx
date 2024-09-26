export default function ({ onClick, title }) {
  return (
    <button
      className="rounded drop-shadow-xl shadow-cyan-700 border border-solid bottom-4 border-black min-w-64 min-h-10"
      onClick={onClick}
    >
      {title}
    </button>
  );
}
