import styled from "styled-components";
import Contact from "./components/contact";
import Destinations from "./components/destinations";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Packages from "./components/packages";

const Container = styled.div`
  height: 100vh;
  // scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  // scrollbar-width: none;
  color: white;
  background: url("/public/static/background.jpeg");
  // &::-webkit-scrollbar {
  //   display: none;
  // }
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
