import { Link } from "react-router-dom";

export default function Nav({ hideNav }) {
  return (
    <nav className={`${hideNav ? "hidden" : ""}`}>
      <ul className={"flex flex-col md:flex-row gap-8"}>
        <li>
          <Link to={"/"}></Link>Home
        </li>
        <li>
          <Link to={"about"}></Link>About
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
