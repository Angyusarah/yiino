import { BrowserRouter, Route, Routes } from "react-router-dom"
import LandingPage from "./Pages/LandingPage"
import ContactPage from "./Pages/ContactPage"

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element = {<ContactPage/>}/>
          {/* <Route path="/about" element = {<About/>}/>
          <Route path="/services" element = {<Services/>}/>
          <Route path="/contact" element = {<Contact/>}/> */}
        </Routes>
    </BrowserRouter>
  )
}

export default App
