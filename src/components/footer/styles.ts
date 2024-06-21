import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: #0a0a0a;
  color: #ffffff;
  padding: 20px 0;
  text-align: center;
`;

export const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const SocialIcons = styled.div`
  margin: 10px 0;

  a {
    color: #ffffff;
    margin: 0 10px;
    font-size: 24px;
    transition: color 0.3s ease;

    &:hover {
      color: #da4ea2;
    }
  }
`;

export const FooterText = styled.p`
  margin: 5px 0;
`;
