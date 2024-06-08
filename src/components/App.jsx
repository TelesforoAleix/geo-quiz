import React, { useState, useContext } from "react";
import { ScoreProvider } from "./context/ScoreContext";
import GameContext, { GameProvider } from "./context/GameContext";
import Header from "./Header";
import Footer from "./Footer";
import GameMenu from "./GameMenu";
import QuestionAB from "./QuestionAB";
import GameOverScreen from "./GameOVerScreen";

function App() {
  const [isGameMenu, setGameMenu] = useState(true);
  const [isQuestionTest, setQuestionTest] = useState(false);
  const [isQuestionAB, setQuestionAB] = useState(false);
  const { setGameMode } = useContext(GameContext);

  function showMenu() {
    setGameMenu(true);
    setQuestionTest(false);
    setQuestionAB(false);
  }

  function questionTest() {
    setQuestionTest(!isQuestionTest);
    setQuestionAB(false);
    setGameMenu(!isQuestionTest);
  }

  function questionAB() {
    setQuestionAB(!isQuestionAB);
    setQuestionTest(false);
    setGameMenu(!isQuestionAB);
  }

  function setGameModeAndStart(gameMode) {
    setGameMode(gameMode);
    setGameMenu(false);
    setQuestionAB(true);
  }

  return (
    <ScoreProvider>
      <GameProvider>
        <div className="app">
          <Header menuButton={showMenu} questionTest={questionTest} questionAB={questionAB} />
          <main>
            {isGameMenu && <GameMenu onSetGameModeAndStart={setGameModeAndStart} />}
            {isQuestionTest && <GameOverScreen />}
            {isQuestionAB && <QuestionAB />}
          </main>
          <Footer />
        </div>
      </GameProvider>
    </ScoreProvider>
  );
}

export default App;
