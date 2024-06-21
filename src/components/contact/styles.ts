import styled from "styled-components";

export const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  background-color: #071013;
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  gap: 50px;
  align-items: center;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`;

export const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;

  @media only screen and (max-width: 768px) {
    padding: 0;
  }
`;

export const Title = styled.h1`
  font-weight: 200;
`;

export const Form = styled.form`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 25px;

  @media only screen and (max-width: 768px) {
    width: 300px;
  }
`;

export const Input = styled.input`
  padding: 10px;
  background-color: #e8e6e6;
  border: none;
  border-radius: 5px;
`;

export const TextArea = styled.textarea`
  padding: 10px;
  background-color: #e8e6e6;
  border: none;
  border-radius: 5px;
`;

export const Button = styled.button`
  background-color: #da4ea2;
  color: white;
  font-weight: bold;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export const Right = styled.div`
  flex: 1;
  position: relative;
  width: 100%;
  height: 100%;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

export const ContactImage = styled.div`
  width: 100%;
  height: 100vh;
  background: url("/public/static/mars.jpg") no-repeat center center/cover;
  position: relative;
  border-radius: 10px;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    background: linear-gradient(
      to right,
      #071013 0%,
      rgba(255, 255, 255, 0) 60%
    );
  }
`;

export const ContactInfo = styled.div`
  margin-top: 20px;
  text-align: center;
  color: white;
`;
