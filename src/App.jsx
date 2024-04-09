import { BrowserRouter, Route, Routes } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element = {<home/>}/>
          <Route path="/about" element = {<About/>}/>
          <Route path="/services" element = {<Services/>}/>
          <Route path="/contact" element = {<Contact/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App
