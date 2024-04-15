import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import Nav from "./Nav.jsx";
import logo from "../assets/images/yiinoLogo1.png";

function Header() {
  const [isHidden, setIsHidden] = useState(false);

  const handleHamburger = () => {
    setIsHidden((prevState) => !prevState);
  };

  return (
    <header className={"flex justify-between px-6 relative items-center"}>
      <img src={logo} className={"object-contain h-14 w-14"} alt="" />
      <button
        onClick={handleHamburger}
        className={"absolute top-0 right-6 md:hidden z-20"}
      >
        {isHidden ? <RxHamburgerMenu /> : <AiOutlineClose />}
      </button>
      <Nav hideNav={isHidden} />
    </header>
  );
}

export default Header;
