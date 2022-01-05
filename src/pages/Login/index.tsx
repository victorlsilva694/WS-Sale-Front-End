import * as S from "./style";
import imageLogin from "./img/undraw_secure_login_pdn4.svg";
import React, { createContext, useContext, useState } from "react";
import api from "../../services/api";
import { RouterContext } from "../../App";
import { authContext } from "../../stores/AuthStore";
import { observer } from "mobx-react-lite";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const store = useContext(authContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleClick() {
    try {
      setLoading(true);
      await store.login(email, password);
      navigate("/User/DashBoard");
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <S.Main>
      <S.ContainerBoxImage>
        <img src={imageLogin} alt="" />
      </S.ContainerBoxImage>

      <S.ContainerLogin>
        <h1>
          Web-Site <span>Sale</span>
        </h1>
        <div>
          <S.InputForm
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Exemplo@Exemplo.com"
          />
          <S.InputForm
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="************"
            type="password"
          />
          <p>
            Ainda não tem uma conta?{" "}
            <span>
              <a href="/register">Crie Sua conta agora!</a>
            </span>
          </p>
          <button disabled={loading} onClick={handleClick}>
            <strong>Entrar</strong>
          </button>
        </div>
      </S.ContainerLogin>
    </S.Main>
  );
};

export default observer(Login);
