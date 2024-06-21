import {
  Button,
  Container,
  Icons,
  Link,
  Links,
  List,
  ListItem,
  Logo,
  Section,
} from "./styles";

const Navbar = () => {
  return (
    <Section>
      <Container>
        <Links>
          <Logo src="src/assets/static/logo.png" />
          <List>
            <ListItem>
              <Link href="#home">Início</Link>
            </ListItem>
            <ListItem>
              <Link href="#packages">Pacotes</Link>
            </ListItem>
            <ListItem>
              <Link href="#destinations">Destinos</Link>
            </ListItem>
          </List>
        </Links>
        <Icons>
          <Button>
            <Link href="#contact">Fale conosco</Link>
          </Button>
        </Icons>
      </Container>
    </Section>
  );
};

export default Navbar;
