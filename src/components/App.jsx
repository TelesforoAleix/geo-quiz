import React, { useState } from "react";
import { ScoreProvider } from "./context/scoring";
import Header from "./Header";
import Footer from "./Footer";
import GameMenu from "./GameMenu";
import QuestionTest from "./QuestionTest";
import QuestionAB from "./PopulationAB";
import GameOverScreen from "./GameOVerScreen";

function App() {
  const [isGameMenu, setGameMenu] = useState(true);
  const [isQuestionTest, setQuestionTest] = useState(false);
  const [isQuestionAB, setQuestionAB] = useState(false);

  function showMenu(event) {
    setGameMenu(true);
    setQuestionTest(false);
    setQuestionAB(false);
  }

  function questionTest(event) {
    if (isQuestionTest) {
      setQuestionTest(false);
      setQuestionAB(false);
      setGameMenu(true);
    } else if (!isQuestionTest) {
      setQuestionTest(true);
      setQuestionAB(false);
      setGameMenu(false);
    }
  }

  function questionAB(event) {
    if (isQuestionAB) {
      setQuestionAB(false);
      setQuestionTest(false);
      setGameMenu(true);
    } else if (!isQuestionAB) {
      setQuestionAB(true);
      setQuestionTest(false);
      setGameMenu(false);
    }
  }

  return (
    <ScoreProvider>
      <div className="app">
        <Header
          menuButton={showMenu}
          questionTest={questionTest}
          questionAB={questionAB}
        />
        <main>
          {isGameMenu ? <GameMenu /> : null}
          {isQuestionTest ? <GameOverScreen /> : null}
          {isQuestionAB ? <QuestionAB /> : null}
        </main>
        <Footer />
      </div>
    </ScoreProvider>
  );
}

export default App;
