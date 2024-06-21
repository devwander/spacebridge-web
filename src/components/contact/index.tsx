import emailjs from "@emailjs/browser";
import React, { FormEvent, useRef, useState } from "react";
import {
  Button,
  ContactImage,
  ContactInfo,
  Container,
  Form,
  Input,
  Left,
  Right,
  Section,
  TextArea,
  Title,
} from "./styles";

const Contact: React.FC = () => {
  const ref = useRef<HTMLFormElement>(null);
  const [success, setSuccess] = useState<boolean | null>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (ref.current) {
      emailjs
        .sendForm(
          "service_4ooy2md",
          "template_1o08i8s",
          ref.current,
          "o6nopuR4I65yRu1Gx"
        )
        .then(
          (result) => {
            console.log(result.text);
            setSuccess(true);
          },
          (error) => {
            console.log(error.text);
            setSuccess(false);
          }
        );
    }
  };

  return (
    <Section id="contact">
      <Container>
        <Left>
          <Form ref={ref} onSubmit={handleSubmit}>
            <Title>Contate-nos</Title>
            <Input placeholder="Nome" name="name" />
            <Input placeholder="Email" name="email" />
            <TextArea
              placeholder="Escreva sua mensagem"
              name="message"
              rows={10}
            />
            <Button type="submit">Enviar</Button>
            {success && "Sua mensagem foi enviada. Retornaremos em breve!"}
          </Form>
          <ContactInfo>
            <p>Telefone: (11) 1234-5678</p>
          </ContactInfo>
        </Left>
        <Right>
          <ContactImage />
        </Right>
      </Container>
    </Section>
  );
};

export default Contact;
