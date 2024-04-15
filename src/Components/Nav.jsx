import { Link } from "react-router-dom";

export default function Nav({ hideNav }) {
  return (
    <nav
      className={`${hideNav ? "hidden" : ""} absolute md:static top-0 right-0 left-0 mx-auto flex justify-center   h-[30vh] md:h-full bg-white`}
    >
      <ul className={"flex flex-col md:flex-row gap-8 pt-8 md:pt-0"}>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"about"}>About</Link>
        </li>
        <li>
          <Link to={"services"}>Services</Link>
        </li>
        <li>
          <Link to={"contact"}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
