import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  flex-direction: column;
  gap: 50px;

  @media (max-width: 768px) {
    gap: 30px;
  }
`;

export const Title = styled.h1`
  font-size: 3em;
  color: #fff;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2em;
  }
`;

export const DestinationSection = styled.section`
  padding: 50px 0;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    padding: 20px 0;
  }
`;

export const CarouselContainer = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
`;

export const DestinationCarousel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  position: relative;
`;

export const DestinationImage = styled.img`
  width: 800px;
  height: 450px;
  object-fit: cover;
  border-radius: 10px;
`;

export const DestinationLegend = styled.p`
  font-size: 1.2rem;
  color: #fff;
  text-align: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 5px;
  border-radius: 0 0 10px 10px;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;
