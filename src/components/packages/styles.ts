/* styles.js */

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

export const PackageSection = styled.section`
  padding: 50px 0;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url("src/assets/static/wavey-fingerprint.svg");

  @media (max-width: 768px) {
    padding: 20px 0;
  }
`;

export const PackagesContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;
`;

export const Package = styled.div`
  flex: 1;
  max-width: 300px;
  height: 350px;
  margin: 20px;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    height: 300px;
    margin: 10px;
  }
`;

export const PackageTitle = styled.h3`
  font-size: 1.8rem;
  color: #192bc2;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const PackageDesc = styled.p`
  font-size: 1.2rem;
  color: #12130f;
  margin-top: auto;
  margin-bottom: auto;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const PackagePrice = styled.p`
  font-size: 1.5rem;
  color: #192bc2;
  font-weight: bold;
  margin-top: 20px;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;
