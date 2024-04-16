import { Link, NavLink } from "react-router-dom";
import { navlinks } from "./Navdata";

export default function Nav({ hideNav }) {
  return (
    <nav
      className={`${
        hideNav ? "hidden" : ""
      } absolute md:static md:block md:mx-0 top-0 right-0 left-0 mx-auto flex justify-center   h-[30vh] md:h-full bg-white`}
    >
      <ul className={"flex flex-col md:flex-row gap-14 pt-8 md:pt-0"}>

        
        {
          navlinks.map(({name, path}, index) => {
            return (
              <li className=" font-semibold" key={index}>
                <NavLink to={path} className={({isActive}) => isActive ? ' border-b-2 border-footerblue pb-2 text-footerblue' : ''}>{name}</NavLink>
              </li>
            )
          })
        }
      </ul>
    </nav>
  );
}
