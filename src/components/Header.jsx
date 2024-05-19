import React from "react";
import HeaderButtons from "./HeaderButtons";
import HeaderLogo from "./HeaderLogo";
import HeaderScores from "./HeaderScores";

function Header() {
  return (
    <header className="header-content">
      <HeaderButtons />
      <HeaderLogo />
      <HeaderScores />
    </header>
  );
}

export default Header;
