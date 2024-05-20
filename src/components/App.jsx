import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import GameMenu from "./GameMenu";
import QuestionTest from "./QuestionTest";
import QuestionAB from "./QuestionAB";

function App() {
  const [isGameSelected, setIsGameSelected] = useState(true);
  const isQuestionTest = false;
  const isQuestionAB = true;

  function hideMenu(event) {
    console.log(event.target);
    setIsGameSelected(true);
  }

  function showMenu(event) {
    setIsGameSelected(false);
  }

  return (
    <div className="app">
      <Header backButton={showMenu} />
      <main>
        {isGameSelected ? null : <GameMenu onSelectGame={hideMenu} />}
        {isQuestionTest ? <QuestionTest /> : null}
        {isQuestionAB ? <QuestionAB /> : null}
      </main>
      <Footer />
    </div>
  );
}

export default App;
