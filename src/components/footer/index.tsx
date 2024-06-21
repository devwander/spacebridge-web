import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
  FooterContainer,
  FooterContent,
  FooterText,
  SocialIcons,
} from "./styles";

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterText>&copy; 2024 SpaceBridge</FooterText>
        <FooterText>Desenvolvido por Wanderson José</FooterText>
        <SocialIcons>
          <a
            href="https://github.com/devwander"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href="https://linkedin.com/in/devwander"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </SocialIcons>
        <FooterText>
          SpaceBridge - Conectando Marte à Terra com viagens espaciais.
        </FooterText>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
