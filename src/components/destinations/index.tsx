import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Importa os estilos do carrossel
import {
  CarouselContainer,
  Container,
  DestinationCarousel,
  DestinationImage,
  DestinationLegend,
  DestinationSection,
  Title,
} from "./styles";

const Destinations = () => {
  return (
    <DestinationSection id="destinations">
      <Container>
        <Title>Destinos</Title>
        <CarouselContainer>
          <Carousel
            showArrows={true}
            infiniteLoop={true}
            showThumbs={false}
            showStatus={false}
            autoPlay={true}
            interval={3000}
          >
            <DestinationCarousel>
              <DestinationImage
                src="https://cdn.panrotas.com.br/portal-panrotas-statics/media-files-cache/385726/70a5ca7d801274ea568f64c60a04c9a4paineirasdronec006/full/1206,804,1/0/default.jpg"
                alt="Cristo Redentor, Brasil"
              />
              <DestinationLegend>Cristo Redentor, Brasil</DestinationLegend>
            </DestinationCarousel>
            <DestinationCarousel>
              <DestinationImage
                src="https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2021/08/49598_FB709B6C2250A9FB-1.jpg?w=1220&h=674&crop=1"
                alt="Machu Picchu, Peru"
              />
              <DestinationLegend>Machu Picchu, Peru</DestinationLegend>
            </DestinationCarousel>
            <DestinationCarousel>
              <DestinationImage
                src="https://cdn.britannica.com/86/179586-138-8B763D72/Overview-Chichen-Itza-Yucatan-Mexico.jpg?w=800&h=450&c=crop"
                alt="Chichén Itzá, México"
              />
              <DestinationLegend>Chichén Itzá, México</DestinationLegend>
            </DestinationCarousel>
            <DestinationCarousel>
              <DestinationImage
                src="https://www.historiaemcortes.com.br/wp-content/uploads/2023/04/coliseu-800x430.webp"
                alt="Coliseu, Itália"
              />
              <DestinationLegend>Coliseu, Itália</DestinationLegend>
            </DestinationCarousel>
            <DestinationCarousel>
              <DestinationImage
                src="https://www.submarinoviagens.com.br/bora-nessa-trip/wp-content/uploads/2019/10/shutterstock_1030695895.jpg"
                alt="Ruínas de Petra, Jordânia"
              />
              <DestinationLegend>Ruínas de Petra, Jordânia</DestinationLegend>
            </DestinationCarousel>
            <DestinationCarousel>
              <DestinationImage
                src="https://www.remessaonline.com.br/blog/wp-content/uploads/2023/09/taj-mahal.jpg.optimal.jpg"
                alt="Taj Mahal, Índia"
              />
              <DestinationLegend>Taj Mahal, Índia</DestinationLegend>
            </DestinationCarousel>
            <DestinationCarousel>
              <DestinationImage
                src="https://cdn.britannica.com/82/94382-050-20CF23DB/Great-Wall-of-China-Beijing.jpg"
                alt="Grande Muralha da China"
              />
              <DestinationLegend>Grande Muralha da China</DestinationLegend>
            </DestinationCarousel>
          </Carousel>
        </CarouselContainer>
      </Container>
    </DestinationSection>
  );
};

export default Destinations;
