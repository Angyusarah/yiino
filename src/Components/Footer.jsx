import {
  FaFacebook,
  FaXTwitter,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa6";
import logo3 from "../assets/images/logo3.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="flex flex-col bg-footerblue    text-center py-2 text-white md:flex-row md:gap-16 md:px-20">
      <div className=" my-auto w-[50%] bg-center mx-auto   lg:w-[20%]">
        <img src={logo3} className="w-[70%]" alt="logo" />
      
      </div>

      <div className="  md:flex md:justify-between  md:gap-3 md:text-left md:w-[80%] md:mr whitespace-nowrap">
        <div className="my-8">
          <h6 className=" text-navyblue text-xl my-3">About Us</h6>
          <ul className="flex flex-col gap-1 cursor-pointer">
            <Link to="/about">
              <li className="hover:text-textcolor" key="about">
                About Yiino Technlogy
              </li>
            </Link>

            <Link to="#">
              <li className="hover:text-textcolor" key="privacy">
                Privavy Policy
              </li>
            </Link>

            <Link to="#">
              <li className="hover:text-textcolor" key="cookie">
                Cookie Policy
              </li>
            </Link>

            <Link to="#">
              <li className="hover:text-textcolor" key="copyright">
                Copyright Infringement Policy
              </li>
            </Link>
          </ul>
        </div>

        <div className="my-8">
          <h6 className=" text-navyblue text-xl my-3">Support</h6>
          <ul className="flex flex-col gap-1 cursor-pointer ">
            <li className=" hover:text-textcolor">
              <a href="mailto:support@YiinoTechnology.ng" key="support">
                support@YiinoTechnology.ng
              </a>
            </li>
            <Link to="/contact">
              <li className=" hover:text-textcolor" key="contact">
                Contact Us
              </li>
            </Link>
            <Link to="#">
              <li className=" hover:text-textcolor" key="faq">
                FAQ
              </li>
            </Link>
          </ul>
        </div>

        <div className="my-8 mx-auto  lg:mx-0">
          <h6 className=" text-navyblue text-xl my-3">Our Resources</h6>
          <ul className="flex  justify-center items-center gap-3 cursor-pointer">
            <Link to="#" key="facebook">
              <li className=" w-8 h-8 flex justify-center items-center rounded-full bg-footerblue transform hover:scale-110">
                <FaFacebook />
              </li>
            </Link>

            <Link to="#" key="instagram">
              <li className=" w-8 h-8 flex justify-center items-center rounded-full bg-gradient-to-r from-purple-600 to-pink-500 transform hover:scale-110">
                <FaInstagram />
              </li>
            </Link>

            <Link to="#" key="youtube">
              <li className=" w-8 h-8 flex justify-center items-center rounded-full bg-red-600 transform hover:scale-110">
                <FaYoutube />
              </li>
            </Link>

            <Link to="#" key="twitter">
              <li className=" w-8 h-8 flex justify-center items-center rounded-full bg-black transform hover:scale-110">
                <FaXTwitter />
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
