import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Navbar from "../navbar";
import {
  Container,
  Desc,
  Img,
  Left,
  Line,
  Right,
  Section,
  Subtitle,
  Title,
  WhatWeDo,
} from "./styles";

const Hero = () => {
  return (
    <Section id="home">
      <Navbar />
      <Container>
        <Left>
          <Title>Explore. Descubra. Experimente.</Title>
          <WhatWeDo>
            <Line src="./static/line.png" />
            <Subtitle>Nossos Serviços</Subtitle>
          </WhatWeDo>
          <Desc>
            Oferecemos experiências de viagem interplanetárias inesquecíveis,
            conectando Marte à Terra.
          </Desc>
        </Left>
        <Right>
          <Canvas>
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={1} />
            <directionalLight position={[3, 2, 1]} />
            <Sphere args={[1, 100, 200]} scale={2.2}>
              <MeshDistortMaterial
                color="#449dd1"
                attach="material"
                distort={0.5}
                speed={2}
              />
            </Sphere>
          </Canvas>
          <Img src="./static/earth.png" />
        </Right>
      </Container>
    </Section>
  );
};

export default Hero;
