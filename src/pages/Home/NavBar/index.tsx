import { Navbar, Brand, ListItens, Login, ImageBrand } from "./style";
import { Link, useNavigate } from "react-router-dom";
import brand from "./img/web-link.png";
import userLogin from "./img/person.png";

export const NavBar = () => {
  const navigate = useNavigate();

  const redirectNavigate = () => {
    navigate("/login", {
      replace: true,
    });
  };

  return (
    <Navbar>
      <Brand>
        <ImageBrand>
          <img src={brand} alt="" />
        </ImageBrand>
        <h1>
          Web-Site <span>Sale</span>
        </h1>
      </Brand>
      <ListItens>
        <ul>
          <li>
            <p>
              <a href="#">Anúncie já</a>
            </p>
          </li>
          <li>
            <p>
              <a href="#">Disponíveis</a>
            </p>
          </li>
          <li>
            <p>
              <a href="#">Trabalhe conosco</a>
            </p>
          </li>
        </ul>
      </ListItens>
      <Login>
        <img src={userLogin} alt="" />
        <a href="/login">Entrar</a>
      </Login>
    </Navbar>
  );
};
