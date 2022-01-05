import React from "react";
import { Col, Card } from "react-bootstrap";

interface ICardsSessionTwo {
  img: string;
  title: string;
  subtitle: string;
  text: string;
}

const CardsSessionTwo: React.FC<ICardsSessionTwo> = ({
  img,
  title,
  subtitle,
  text,
}) => {
  return (
    <>
      <Col style={{ display: "flex", justifyContent: "center" }}>
        <Card
          style={{
            border: "1px solid rgb(245,245,250)",
            width: "18rem",
            backgroundColor: "rgb(245,245,250)",
            alignItems: "center",
          }}
        >
          <br />
          <Card.Img
            style={{
              display: "flex",
              justifyContent: "center",
              width: "60px",
            }}
            variant="top"
            src={img}
          />
          <Card.Body style={{ alignItems: "center" }}>
            <Card.Title style={{ textAlign: "center" }}>{title}</Card.Title>
            <Card.Subtitle
              style={{ textAlign: "center" }}
              className="mb-2 text-muted"
            >
              {subtitle}
            </Card.Subtitle>
            <Card.Text style={{ textAlign: "center" }}>{text}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default CardsSessionTwo;
