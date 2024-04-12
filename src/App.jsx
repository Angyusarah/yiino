import { BrowserRouter, Route, Routes } from "react-router-dom"
import LandingPage from "./Pages/LandingPage"
import ContactPage from "./Pages/ContactPage"
import AboutPage from "./Pages/AboutPage";

function App() {
  return (
    <>
    <AboutPage/>
    {/* <ContactPage/> */}
    {/* <BrowserRouter> */}
        {/* <Routes> */}
          {/* <Route path="/" element = {<LandingPage/>}/> */}
          {/* <Route path="/about" element = {<About/>}/>
          <Route path="/services" element = {<Services/>}/>
          <Route path="/contact" element = {<Contact/>}/> */}
        {/* </Routes> */}
    {/* </BrowserRouter> */}
    </>
  );
}

export default App;
