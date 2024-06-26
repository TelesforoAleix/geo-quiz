import React, { useContext } from "react";
import GameContext from "./context/GameContext";

function GameMenu() {
  const { setGameMode, setGameTopic } = useContext(GameContext);

  const onSetGameModeAndStart = (mode, topic) => {
    setGameMode(mode);
    setGameTopic(topic);
  };

  return (
    <div className="game-menu">
      <h2>Municipis</h2>
      <button className="game-buttons" onClick={() => onSetGameModeAndStart('questionAB', 'population')}>1vs1 | Població</button>
      <button className="game-buttons" onClick={() => onSetGameModeAndStart('questionAB', 'altitude')}>1vs1 | Altitud</button>
      <button className="game-buttons" onClick={() => onSetGameModeAndStart('questionAB', 'surface')}>1vs1 | Superfície</button>
      <h2>Comarques</h2>
      <button className="game-buttons" onClick={() => onSetGameModeAndStart('questionTest', 'capital')}>Test | Capital</button>
      <button className="game-buttons" onClick={() => onSetGameModeAndStart('questionTest', 'comarca')}>Test | Comarques</button>
      <button className="game-buttons" onClick={() => onSetGameModeAndStart('questionTest', 'provincia')}>Test | Provincies</button>
      <h2>Pics i serres</h2>
      <button className="game-buttons" onClick={() => onSetGameModeAndStart('questionMap', null)}>CataloniaMap</button>
      <button className="game-buttons">Game 8</button>
      <h2>Section 1</h2>
      <button className="game-buttons">Game 9</button>
      <button className="game-buttons">Game 10</button>
      <button className="game-buttons">Game 11</button>
    </div>
  );
}

export default GameMenu;
