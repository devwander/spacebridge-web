import {
  Container,
  Package,
  PackageDesc,
  PackagePrice,
  PackageSection,
  PackageTitle,
  PackagesContainer,
  Title,
} from "./styles";

const Packages = () => {
  return (
    <PackageSection id="packages">
      <Container>
        <Title>Nossos Pacotes de Viagem</Title>
        <PackagesContainer>
          <Package>
            <PackageTitle>Classe Econômica</PackageTitle>
            <PackageDesc>
              Viagem acessível e confortável para Marte com todas as
              necessidades básicas incluídas.
            </PackageDesc>
            <PackagePrice>R$ 50.000</PackagePrice>
          </Package>
          <Package>
            <PackageTitle>Classe Premium</PackageTitle>
            <PackageDesc>
              Experiência de viagem de luxo com acomodações superiores e
              serviços exclusivos.
            </PackageDesc>
            <PackagePrice>R$ 120.000</PackagePrice>
          </Package>
          <Package>
            <PackageTitle>Viagem Científica</PackageTitle>
            <PackageDesc>
              Projetada para pesquisadores e cientistas, essa viagem oferece
              acesso a laboratórios e equipamentos de ponta.
            </PackageDesc>
            <PackagePrice>R$ 200.000</PackagePrice>
          </Package>
          <Package>
            <PackageTitle>Viagem Cultural</PackageTitle>
            <PackageDesc>
              Explore a rica herança cultural da Terra com visitas guiadas e
              atividades imersivas.
            </PackageDesc>
            <PackagePrice>R$ 80.000</PackagePrice>
          </Package>
        </PackagesContainer>
      </Container>
    </PackageSection>
  );
};

export default Packages;
