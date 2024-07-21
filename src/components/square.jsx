export default function Square({
  piece,
  isDark,
  onDragStart,
  onDrop,
  onDragOver,
  dataPos,
}) {
  const backgroundColor = isDark ? "#a45430" : "#bc7348";

  return (
    <div
      className="square"
      style={{ backgroundColor }}
      onDragOver={onDragOver}
      onDrop={onDrop}
      data-pos={dataPos}
    >
      {piece && (
        <div draggable onDragStart={onDragStart} className="piece">
          {piece}
        </div>
      )}
    </div>
  );
}
