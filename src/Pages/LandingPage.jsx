import Hero from "../Components/LandingPage/Hero"
import Container from "../Components/Container"
import Keyservices from "../Components/LandingPage/Keyservices"
import Achievements from "../Components/LandingPage/Achievements"
import Testimonials from "../Components/LandingPage/Testimonials"

const LandingPage = () => {
  return (
    <Container>
      <Hero/>
      <Keyservices/>
      <Achievements/>
      <Testimonials/>
    </Container>
  )
}

export default LandingPage