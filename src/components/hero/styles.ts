import styled from "styled-components";

export const Section = styled.div`
  height: calc(100vh + 20px);
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    height: 200vh;
    scroll-snap-align: start;
  }
`;

export const Container = styled.div`
  height: 100%;
  scroll-snap-align: center;
  width: 75vw;
  padding: 0 15vh;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    scroll-snap-align: start;
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0;
  }
`;

export const Left = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media only screen and (max-width: 768px) {
    flex: 1;
    align-items: center;
  }
`;

export const Title = styled.h1`
  font-size: 46px;

  @media only screen and (max-width: 768px) {
    text-align: center;
  }
`;

export const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Line = styled.img`
  height: 5px;
`;

export const Subtitle = styled.h2`
  color: #da4ea2;
`;

export const Desc = styled.p`
  font-size: 24px;
  color: lightgrey;

  @media only screen and (max-width: 768px) {
    padding: 20px;
    text-align: center;
  }
`;

export const Button = styled.button`
  background-color: #da4ea2;
  color: white;
  font-weight: bold;
  width: 100px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export const Right = styled.div`
  flex: 3;
  position: relative;

  @media only screen and (max-width: 768px) {
    flex: 1;
    width: 100%;
  }
`;

export const Img = styled.img`
  width: 350px;
  height: 450px;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  animation: animate 2s infinite ease alternate;

  @keyframes animate {
    to {
      transform: translateY(15px);
    }
  }

  @media only screen and (max-width: 768px) {
    width: 350px;
    height: 350px;
  }
`;
