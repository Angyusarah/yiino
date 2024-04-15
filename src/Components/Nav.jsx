import { Link } from "react-router-dom";

export default function Nav({ hideNav }) {
  return (
    <nav className={`${hideNav ? "hidden" : ""}`}>
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
