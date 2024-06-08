import React, { createContext, useState } from "react";
import { populationQuestion, altitudeQuestion, surfaceQuestion } from "../../logic/geodata";

const GameContext = createContext();

export function GameProvider({ children }) {
  const [gameMode, setGameMode] = useState(null);

  const getQuestion = () => {
    switch (gameMode) {
      case 'population':
        return populationQuestion();
      case 'altitude':
        return altitudeQuestion();
      case 'surface':
        return surfaceQuestion();
      default:
        return null;
    }
  };

  return (
    <GameContext.Provider value={{ gameMode, setGameMode, getQuestion }}>
      {children}
    </GameContext.Provider>
  );
}

export default GameContext;
