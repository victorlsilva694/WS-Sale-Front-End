import React, { ChangeEvent, useState, useContext } from "react";
import * as S from "./style";
import { useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { authContext } from "../../stores/AuthStore";
import {
  Container,
  Form,
  Row,
  Col,
  FloatingLabel,
  Button,
} from "react-bootstrap";
import fs from "fs";
import imageDraggable from "./img/upload.png";
import api from "../../services/api";

const AddNewProductForm = () => {
  const [productImage, setProductImage] = useState<File>();
  const [productName, setProductName] = useState("");
  const [userId, setUserId] = useState(0);
  const [productPrice, setProductPrice] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [preRender, setPreRender] = useState("");

  async function handleClick() {
    try {
      const formData = new FormData();
      console.log(productImage);
      formData.append("file", productImage as File);
      formData.append("userId", String(store.user.id));
      formData.append("productCategory", productCategory);
      formData.append("productName", productName);
      formData.append("productPrice", productPrice);
      formData.append("productDescription", productDescription);

      const promiseFormData = await api.post("/addNewProduct", formData, {
        headers: {
          "Content-Type": `multipart/form-data;`,
        },
      });

      navigate("/User/DashBoard", {
        replace: true,
      });
    } catch (err) {
    } finally {
    }
  }

  const onImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    var input = event.currentTarget;
    var reader = new FileReader();
    reader.onload = function () {
      var dataURL = reader.result;
      setPreRender(String(dataURL));
    };
    if (!input.files) {
      return;
    }
    console.log(input.files);
    reader.readAsDataURL(input.files[0]);
    setProductImage(input.files[0]);
  };
  const store = useContext(authContext);

  console.log(store.user.id);
  const navigate = useNavigate();

  return (
    <>
      <S.TitleSession className="mt-3">Adicionar novo produto</S.TitleSession>
      <Container style={{ borderRadius: "5px" }} className="mt-5">
        <br />
        <Row>
          <S.ContainerInputFile>
            <S.ContainerDraggable>
              <label htmlFor="arquivo">
                {!!preRender ? null : <img src={imageDraggable} alt="" />}
              </label>
              <input
                name="file"
                id="arquivo"
                onChange={(e) => {
                  onImageChange(e);
                }}
                type="file"
              />
              {!preRender ? null : <S.ImagePreRender src={preRender} alt="" />}
            </S.ContainerDraggable>
          </S.ContainerInputFile>
          <S.ContainerInputFile>
            <Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <FloatingLabel
                  controlId="floatingInput"
                  label="Nome produto"
                  className="mb-3"
                >
                  <Form.Control
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                    type="text"
                    placeholder="Digite o nome do produto"
                  />
                </FloatingLabel>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <FloatingLabel
                  controlId="floatingInput"
                  label="Preço do produto"
                  className="mb-3"
                >
                  <Form.Control
                    value={productPrice}
                    onChange={(e) => setProductPrice(e.target.value)}
                    type="text"
                    placeholder="R$ 10.000,00"
                  />
                </FloatingLabel>
              </Form.Group>
            </Row>
            <FloatingLabel controlId="floatingSelectGrid" label="Produto">
              <Form.Select
                value={productCategory}
                onChange={(e) => setProductCategory(e.target.value)}
                aria-label="Floating label select example"
              >
                <option>Selecione o tipo do produto</option>
                <option value="Web-Site">Web-Site</option>
                <option value="Aplicativos Mobile">Aplicativos Mobile</option>
                <option value="Aplicativos Desktop">Aplicativos Desktop</option>
                <option value="Layout">Layout</option>
                <option value="Games">Games</option>
              </Form.Select>
            </FloatingLabel>
            <FloatingLabel
              className="mt-3"
              controlId="floatingTextarea2"
              label="Faça uma breve descrição sobre o produto"
            >
              <Form.Control
                value={productDescription}
                onChange={(e) => setProductDescription(e.target.value)}
                as="textarea"
                placeholder="Leave a comment here"
                style={{ height: "100px" }}
              />
            </FloatingLabel>
            <S.ContainerFinally className="mt-3 d-flex justify-content-between">
              <Form>
                <Form.Check
                  className="mt-2"
                  type="switch"
                  id="custom-switch"
                  label="Salvar como favorito"
                />
              </Form>
              <Button
                onClick={handleClick}
                style={{ width: "25%", height: "45px" }}
                variant="primary"
              >
                Adicionar
              </Button>
            </S.ContainerFinally>
            <br />
          </S.ContainerInputFile>
        </Row>
      </Container>
    </>
  );
};

export default observer(AddNewProductForm);
