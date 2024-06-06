import React, { createContext, useState } from "react";

const GameContext = createContext();

export function GameSelector({ children }) {
    const [game, setGame] = useState(null)
    

  return <GameContext.Provider value={{}}>{children}</GameContext.Provider>;
}
