import React from "react";
import HeaderButtons from "./HeaderButtons";
import HeaderLogo from "./HeaderLogo";
import HeaderScores from "./HeaderScores";

function Header({ backButton }) {
  return (
    <header className="header-content">
      <HeaderButtons backButton={backButton} />
      <HeaderLogo />
      <HeaderScores />
    </header>
  );
}

export default Header;
