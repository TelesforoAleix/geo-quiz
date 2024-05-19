import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import GameMenu from "./GameMenu";

let isGameSelected;

function handleClick(event) {
  const [game, setGame] = useState(!isGameSelected);
}

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <GameMenu />
      </main>
      <Footer />
    </div>
  );
}

export default App;
