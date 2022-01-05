import { observer } from "mobx-react-lite";
import { Container, Row, Col } from "react-bootstrap";
import * as S from "./style";
import { authContext } from "../../../stores/AuthStore";
import React, { createContext, useContext, useState } from "react";
import imageSVG from "./img/undraw_predictive_analytics_kf-9-n.svg";

const SessionOne = () => {
  const store = useContext(authContext);
  return (
    <Container style={{ width: "100%" }}>
      <br />
      <br />
      <Row style={{ alignItems: "center" }}>
        <Col>
          <S.TitleSession>
            Seja bem vindo novamente {store.user.name}, trouxemos novidades!
          </S.TitleSession>
        </Col>
        <Col>
          <S.ImageBrand src={imageSVG} />
        </Col>
      </Row>
    </Container>
  );
};

export default observer(SessionOne);
