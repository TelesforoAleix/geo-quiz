import React, { useState, useContext, useEffect } from "react";
import population from "../logic/geodata";
import ScoreContext from "./context/scoring";
import GameOverScreen from "./GameOVerScreen";

function QuestionAB() {
  const [question, setQuestion] = useState(population());
  const [selectedOption, setSelectedOption] = useState(null);
  const [answered, setAnswered] = useState(false);
  const { increaseScore, reduceLife, lifes, restartGame } =
    useContext(ScoreContext);
  const [round, setRound] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  function checkAnswer(selectedOption) {
    setSelectedOption(selectedOption);
    setAnswered(true);
    if (selectedOption === question.answer) {
      increaseScore();
    } else if (lifes === 0) {
      setGameOver(true);
    } else {
      reduceLife();
    }
    setRound((prevRound) => prevRound + 1);
  }

  useEffect(() => {
    if (round > 0) {
      const timeout = setTimeout(() => {
        setSelectedOption(null);
        setAnswered(false);
        setQuestion(population());
      }, 500);

      return () => clearTimeout(timeout);
    }
  }, [round]);

  const restart = () => {
    setRound(0);
    setGameOver(false);
    restartGame();
    setQuestion(population());
  };

  if (gameOver) {
    return <GameOverScreen onRestart={restart} />;
  }

  return (
    <div className="question-test">
      <h2 className="question">{question.title}</h2>

      <div className="question-ab">
        <button
          onClick={() => checkAnswer(question.option1)}
          className="game-buttons-ab"
          disabled={answered}
          style={{
            backgroundColor:
              answered && selectedOption === question.option1
                ? question.option1 === question.answer
                  ? "green"
                  : "red"
                : "initial",
          }}
        >
          {question.option1.municipi}
          <br />
          <span style={{ fontSize: 16 }}>
            {answered ? question.option1.poblacio : question.option1.comarca}
          </span>
        </button>

        <button
          onClick={() => checkAnswer(question.option2)}
          className="game-buttons-ab"
          disabled={answered}
          style={{
            backgroundColor:
              answered && selectedOption === question.option2
                ? question.option2 === question.answer
                  ? "green"
                  : "red"
                : "initial",
          }}
        >
          {question.option2.municipi}
          <br />
          <span style={{ fontSize: 16 }}>
            {answered ? question.option2.poblacio : question.option2.comarca}
          </span>
        </button>
      </div>
    </div>
  );
}

export default QuestionAB;
