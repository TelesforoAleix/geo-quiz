import React from "react";

function HeaderButtons({ menuButton, questionTest, questionAB }) {
  return (
    <div className="header-buttons">
      <button className="header-button" onClick={menuButton}>
        Menu
      </button>
      <button className="header-button" onClick={questionTest}>
        GameOver
      </button>
      <button className="header-button" onClick={questionAB}>
        A/B
      </button>
    </div>
  );
}

export default HeaderButtons;
