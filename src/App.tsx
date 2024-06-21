import styled from "styled-components";
import Contact from "./components/contact";
import Destinations from "./components/destinations";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Packages from "./components/packages";

const Container = styled.div`
  height: 100vh;
  scroll-behavior: smooth;
  overflow-y: auto;
  color: white;
  background: url("./static/background.jpeg") no-repeat center center/cover;
`;

function App() {
  return (
    <Container>
      <Hero />
      <Packages />
      <Destinations />
      <Contact />
      <Footer />
    </Container>
  );
}

export default App;
