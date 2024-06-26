import styled from "styled-components";

export const Section = styled.div`
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const Container = styled.div`
  width: 75vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;

  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 10px;
  }
`;

export const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;

export const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const Logo = styled.img`
  width: 120px;
`;

export const List = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

export const ListItem = styled.li`
  cursor: pointer;
`;

export const Icon = styled.img`
  width: 20px;
  cursor: pointer;
`;

export const Button = styled.button`
  width: 100px;
  padding: 10px;
  background-color: #da4ea2;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export const Link = styled.a`
  text-decoration: none;
  color: white;
`;
