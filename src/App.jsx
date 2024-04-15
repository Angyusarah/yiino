import { BrowserRouter, Route, Routes } from "react-router-dom"
import LandingPage from "./Pages/LandingPage"
import ContactPage from "./Pages/ContactPage"
import Service from "./Components/Service"
import ServicesPage from "./Pages/ServicesPage"

function App() {
  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route path="/" element = {<ServicesPage/>}/>
           {/* <Route path="/about" element = {<About/>}/> */}
          {/* <Route path="/Services" element = {<ServicesPage/>}/> */}
          {/* <Route path="/contact" element = {<Contact/>}/>  */}
          
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
