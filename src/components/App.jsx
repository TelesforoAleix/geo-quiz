import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import GameMenu from "./GameMenu";
import QuestionTest from "./QuestionTest";
import QuestionAB from "./QuestionAB";
import geoData from "../data/geoData";

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

  function getRandomMunicipis(geoData, count) {
    const randomGeoData = geoData.sort(() => 0.5 - Math.random());
    return randomGeoData.slice(0, count);
  }

  const [municipi1, municipi2, municipi3] = getRandomMunicipis(geoData, 3);
  console.log(municipi1, municipi2, municipi3);

  return (
    <div className="app">
      <Header
        backButton={showMenu}
        questionTest={questionTest}
        questionAB={questionAB}
      />
      <main>
        {isGameMenu ? <GameMenu /> : null}
        {isQuestionTest ? <QuestionTest /> : null}
        {isQuestionAB ? <QuestionAB /> : null}
      </main>
      <Footer />
    </div>
  );
}

export default App;
