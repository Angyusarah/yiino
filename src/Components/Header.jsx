import Nav from "./Nav.jsx";
import { useEffect, useState } from "react";

function Header() {
  const [isHidden, setIsHidden] = useState(false);

  const handleHamburger = () => {
    setIsHidden((prevState) => !prevState);
  };

  return (
    <header className={"flex justify-between px-6 relative"}>
      <h1>Logo</h1>
      <button
        onClick={handleHamburger}
        className={"absolute top-0 right-6 md:hidden"}
      >
        {isHidden ? "=" : "X"}
      </button>
      <Nav hideNav={isHidden} />
    </header>
  );
}

export default Header;
