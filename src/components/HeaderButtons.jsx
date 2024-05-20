import React from "react";

function HeaderButtons({ backButton }) {
  return (
    <div className="header-buttons">
      <button className="back-button" onClick={backButton}>
        Back
      </button>
    </div>
  );
}

export default HeaderButtons;
