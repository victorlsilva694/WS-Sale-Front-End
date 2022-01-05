import {
  NofifyContainer,
  ContainerBackGround,
  ContainerBodySession,
  GridCardsLine,
} from "./style";
import imgBrand from "./img/undraw_startup_life_re_8ow9.svg";

export const SessionThree = () => {
  return (
    <NofifyContainer>
      <ContainerBackGround>
        <img src={imgBrand} alt="" />
      </ContainerBackGround>
      <ContainerBodySession>
        <h1>Venda de forma rápida e eficiente seus sistemas!</h1>
        <GridCardsLine>
          <div>
            <h2>01</h2>
            <strong>
              <p>Venda Aplicativos</p>
            </strong>
            <h4>
              Venda alguns de seus Aplicativos Desktop/Android/ios e faça um
              salário extra
            </h4>
          </div>
          <div>
            <h2>02</h2>
            <strong>
              <p>Venda Seus sites</p>
            </strong>
            <h4>
              Anuncie seus sites conosco e realize suas vendas de forma segura
              dentro da nossa plataforma{" "}
            </h4>
          </div>
        </GridCardsLine>
        <GridCardsLine>
          <div>
            <h2>03</h2>
            <strong>
              <p>Venda seus games</p>
            </strong>
            <h4>
              Venda seus jogos e faça parte de uma das área de mais ascenção no
              mercado de tecnologia mundial
            </h4>
          </div>
          <div>
            <h2>04</h2>
            <strong>
              <p>Venda seus layouts</p>
            </strong>
            <h4>
              Venda designs de websites aplicativos mobile ou até mesmo design
              de games e consiga uma renda extra
            </h4>
          </div>
        </GridCardsLine>
      </ContainerBodySession>
    </NofifyContainer>
  );
};
