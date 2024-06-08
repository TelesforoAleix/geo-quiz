import React, { createContext, useState } from "react";
import { populationQuestion, altitudeQuestion, surfaceQuestion } from "../../logic/geodata";

const GameContext = createContext();

export function GameProvider({ children }) {
  const [gameMode, setGameMode] = useState(null);
  const [gameTopic, setGameTopic] = useState(null);

  const getQuestionAB = () => {
    switch (gameTopic) {
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

  const getQuestionTest = () => {
    switch (gameTopic) {
      case 'population':
        return null;
      default:
        return null;
    }
  }

  const getQuestion = () => {
    switch (gameMode) {
      case 'questionAB':
        return getQuestionAB();
      case 'questionTest':
        return getQuestionTest();
      default:
        return null;
    }
  }

  return (
    <GameContext.Provider value={{ gameMode, gameTopic, setGameMode, getQuestion, setGameTopic }}>
      {children}
    </GameContext.Provider>
  );
}

export default GameContext;
