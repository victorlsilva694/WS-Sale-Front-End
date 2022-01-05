import { observer } from "mobx-react-lite";
import { Container, Row, Col, Card } from "react-bootstrap";
import imgWebDevelopment from "./img/web-development.png";
import imgAndroidApps from "./img/webpage.png";
import imgDesktopApps from "./img/layout.png";
import imgGame from "./img/user-interface.png";
import { CardsSessionTwo } from "../../../components";

const cardsContent = [
  {
    img: imgWebDevelopment,
    title: "Web-Sites",
    subtitle: "Disponíveis",
    text: "Veja os Web-Sites que estão disponíveis",
  },
  {
    img: imgAndroidApps,
    title: "Mobile",
    subtitle: "Disponíveis",
    text: "Veja os Aplicativos Mobile disponíveis",
  },
  {
    img: imgDesktopApps,
    title: "Desktop",
    subtitle: "Disponíveis",
    text: "Veja os Aplicativos Desktop disponíveis",
  },
  {
    img: imgGame,
    title: "Game",
    subtitle: "Disponíveis",
    text: "Veja os games que estão disponíveis",
  },
];

const SessionTwo = () => {
  return (
    <Container style={{ display: "flex", justifyContent: "center" }}>
      <Row>
        {cardsContent.map(({ img, title, subtitle, text }, index) => (
          <CardsSessionTwo
            img={img}
            key={index}
            title={title}
            subtitle={subtitle}
            text={text}
          />
        ))}
      </Row>
    </Container>
  );
};
export default observer(SessionTwo);
