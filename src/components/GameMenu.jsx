import React, { useContext } from "react";
import GameContext from "../components/context/GameContext";

function GameMenu({ onSetGameModeAndStart }) {
  return (
    <div className="game-menu">
      <h2>Municipis</h2>
      <button className="game-buttons" onClick={() => onSetGameModeAndStart('population')}>1vs1 | Població</button>
      <button className="game-buttons" onClick={() => onSetGameModeAndStart('altitude')}>1vs1 | Altitud</button>
      <button className="game-buttons" onClick={() => onSetGameModeAndStart('surface')}>1vs1 | Superfície</button>
      <h2>Comarques</h2>
      <button className="game-buttons">Game 4</button>
      <button className="game-buttons">Game 5</button>
      <button className="game-buttons">Game 6</button>
      <h2>Pics i serres</h2>
      <button className="game-buttons">Game 7</button>
      <button className="game-buttons">Game 8</button>
      <h2>Section 1</h2>
      <button className="game-buttons">Game 9</button>
      <button className="game-buttons">Game 10</button>
      <button className="game-buttons">Game 11</button>
    </div>
  );
}

export default GameMenu;
