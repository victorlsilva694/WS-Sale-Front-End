import * as S from "./style";
import { observer } from "mobx-react-lite";
import { Navbar, Container, Nav } from "react-bootstrap";

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">
          <S.TitleBrand>
            Web-Site
            <span>Sale</span>
          </S.TitleBrand>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            {" "}
          </Nav>
          <Nav.Link href="#action1" style={{ color: "black" }}>
            Home
          </Nav.Link>
          <Nav.Link href="/addNewProduct" style={{ color: "black" }}>
            Adicionar produto
          </Nav.Link>
          <Nav.Link style={{ color: "black" }} href="#">
            sair
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default observer(NavBar);
