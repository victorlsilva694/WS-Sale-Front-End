import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { authContext } from "../../../stores/AuthStore";
import { Container, Card, Row, Button } from "react-bootstrap";
import * as S from "./style";

const SessionThree = () => {
  const store = useContext(authContext);
  console.log(store.products)
  return (
    <>
      <Container>
        <S.TitleSession>Produtos Atualizados</S.TitleSession>
        <Row style={{ display: "flex", justifyContent: "center" }}>
          {store.products.map((values, index) => (
            <Card
              key={index}
              style={{
                margin: "20px",
                backgroundColor: "transparent",
                border: "1px solid rgb(230,230,230)",
                width: "18rem",
              }}
            >
              <Card.Img
                variant="top"
                style={{ marginTop: "12px", width: "100%", height: "50%" }}
                src={"data:image/*;base64, " + values.imageProduct}
              />
              <Card.Body style={{ alignItems: "center" }}>
                <Card.Title style={{ textAlign: "center" }}>
                  {values.nameProduct}
                </Card.Title>
                <Card.Text style={{ textAlign: "center" }}>
                  R${values.priceProduct}
                  <br />
                  {values.categoryProduct}
                  <br />
                  {values.productDescription}
                  <br />
                </Card.Text>
                <Button style={{ width: "100%" }} variant="primary">
                  Ver mais
                </Button>
              </Card.Body>
            </Card>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default observer(SessionThree);
