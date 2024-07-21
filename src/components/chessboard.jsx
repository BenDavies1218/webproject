import { useState } from "react";
import Square from "./square";

export default function Chessboard() {
  const [board, setBoard] = useState([
    ["♖", "♘", "♗", "♔", "♕", "♗", "♘", "♖"],
    ["♙", "♙", "♙", "♙", "♙", "♙", "♙", "♙"],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["♟", "♟", "♟", "♟", "♟", "♟", "♟", "♟"],
    ["♜", "♞", "♝", "♚", "♛", "♝", "♞", "♜"],
  ]);

  const handleDragStart = (e) => {
    e.dataTransfer.setData("text/plain", e.target.innerText);
    e.dataTransfer.setData(
      "from",
      e.target.parentNode.getAttribute("data-pos")
    );
  };

  const handleDrop = (e) => {
    e.preventDefault();

    const piece = e.dataTransfer.getData("text/plain");
    const from = e.dataTransfer.getData("from");
    const to = e.target.closest(".square").getAttribute("data-pos");

    const [fromRow, fromCol] = from.split(",").map(Number);
    const [toRow, toCol] = to.split(",").map(Number);

    const newBoard = board.map((row) => [...row]);
    newBoard[toRow][toCol] = piece;
    newBoard[fromRow][fromCol] = "";

    setBoard(newBoard);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div className="chessboard">
      {board.flat().map((piece, index) => {
        const row = Math.floor(index / 8);
        const col = index % 8;
        const isDark = (row + col) % 2 === 1;
        return (
          <Square
            key={index}
            piece={piece}
            isDark={isDark}
            onDragStart={handleDragStart}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            dataPos={`${row},${col}`}
          />
        );
      })}
    </div>
  );
}
