const Header = () => {
    const [isHidden, setIsHidden] = useState(true);
    const toggleIsHidden = () => {
      setIsHidden(!isHidden);
    };
  
    return (
      <div>
        <nav className={" justify-center   md:flex md:w-436 "}>
          <ul
            className={
              `${isHidden ? "-translate-y-60" : "-translate-y-0"}` +
              " absolute -left-4 -top-4 z-20 flex h-56 w-3/4 flex-col gap-5 rounded-none  bg-whiteSmoke pl-4 pt-16 text-lg text-gray transition duration-500 md:static md:h-12 md:w-full md:-translate-y-0 md:flex-row  md:items-center md:justify-between md:gap-0 md:rounded-3xl md:px-10 md:pt-0 md:text-sm "
            }
          >
            <li>
              <Link
                className={`${activeRoute() === "/" ? "md:active-route" : ""}`}
                to={"/"}>
                Home
              </Link>
            </li>
            
            <li>
              <Link
                className={`${
                  activeRoute() === "/about-us" ? "md:active-route" : ""
                }`}
                to={"/"}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                className={`${activeRoute() === "/faq" ? "md:active-route" : ""}`}
                to={"/"}
              >
                FAQ
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  };
  export default Header;
  