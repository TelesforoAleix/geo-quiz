import React from "react";

function GameMenu({ onSelectGame }) {
  return (
    <div className="game-menu">
      <button className="game-buttons" onClick={onSelectGame}>
        Game 1
      </button>
      <button className="game-buttons" onClick={onSelectGame}>
        Game 2
      </button>
      <button className="game-buttons" onClick={onSelectGame}>
        Game 3
      </button>
      <h2>Section 1</h2>
      <button className="game-buttons" onClick={onSelectGame}>
        Game 4
      </button>
      <button className="game-buttons" onClick={onSelectGame}>
        Game 5
      </button>
      <button className="game-buttons" onClick={onSelectGame}>
        Game 6
      </button>
      <h2>Section 1</h2>
      <button className="game-buttons" onClick={onSelectGame}>
        Game 7
      </button>
      <button className="game-buttons" onClick={onSelectGame}>
        Game 8
      </button>
      <h2>Section 1</h2>
      <button className="game-buttons" onClick={onSelectGame}>
        Game 9
      </button>
      <button className="game-buttons" onClick={onSelectGame}>
        Game 10
      </button>
      <button className="game-buttons" onClick={onSelectGame}>
        Game 11
      </button>
    </div>
  );
}

export default GameMenu;
