import React from "react";

function HeaderButtons({ backButton, questionTest, questionAB }) {
  return (
    <div className="header-buttons">
      <button className="back-button" onClick={backButton}>
        Back
      </button>
      <button className="back-button" onClick={questionTest}>
        Test
      </button>
      <button className="back-button" onClick={questionAB}>
        A/B
      </button>
    </div>
  );
}

export default HeaderButtons;
