import React from "react";
import HeaderButtons from "./HeaderButtons";
import HeaderLogo from "./HeaderLogo";
import HeaderScores from "./HeaderScores";

function Header({ backButton, questionTest, questionAB }) {
  return (
    <header className="header-content">
      <HeaderButtons
        backButton={backButton}
        questionTest={questionTest}
        questionAB={questionAB}
      />
      <HeaderLogo />
      <HeaderScores />
    </header>
  );
}

export default Header;
