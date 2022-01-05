import { observer } from "mobx-react-lite";
import { authContext } from "../../../stores/AuthStore";
import React, { useContext } from "react";
import * as S from "./style";
import { Container, Carousel } from "react-bootstrap";
import carouselImgOne from "./img/firmbee-com-ir5lIkVFqC4-unsplash-removebg-preview.png";

const SessionFourr = () => {
  const store = useContext(authContext);
  return (
    <>
      <br />
      <Container>
        <Carousel
          style={{
            height: "35vh",
            backgroundColor: "rgb(238, 238, 245)",
            borderRadius: "15px",
          }}
          variant="dark"
        >
          <Carousel.Item style={{ display: "flex" }}>
            <img
              style={{
                maxWidth: "500px",
                width: "30%",
                marginTop: "20px",
                backgroundRepeat: "no-repeat",
                maxHeight: "400px",
                minHeight: "auto",
                backgroundSize: "100%",
                marginLeft: "12%",
              }}
              className="d-block"
              src={carouselImgOne}
              alt="First slide"
            />
            <S.ContainerTextCarousel>
              <h5>Venda seus projetos sem precisar sair de casa.</h5>
              <p>
                Com a WS-Sale, você pode trabalhar vendendo seus melhores
                projetos, independente da plataforma ou projeto sem precisar sair de casa.
              </p>
            </S.ContainerTextCarousel>

            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          {/* <Carousel.Item>
            <img
              className="d-block w-100"
              src="holder.js/800x400?text=Second slide&bg=eee"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h5>Second slide label</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="holder.js/800x400?text=Third slide&bg=e5e5e5"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h5>Third slide label</h5>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item> */}
        </Carousel>
      </Container>
    </>
  );
};

export default observer(SessionFourr);
