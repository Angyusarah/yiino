import Hero from "../Components/Hero"
import Container from "../Components/Container"
import Keyservices from "../Components/Keyservices"
import Achievements from "../Components/Achievements"
import Testimonials from "../Components/Testimonials"

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