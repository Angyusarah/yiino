<<<<<<< HEAD
import { BrowserRouter, Route, Routes } from "react-router-dom"
import LandingPage from "./Pages/LandingPage"
import ContactPage from "./Pages/ContactPage"
import Service from "./Components/Service"
import ServicesPage from "./Pages/ServicesPage"
=======
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import ContactPage from "./Pages/ContactPage";
import AboutPage from "./Pages/AboutPage";
>>>>>>> 144c7cbd5bf5da7c9d25d2476606c2e94e0541b2

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<LandingPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
