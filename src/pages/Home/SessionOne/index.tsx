import { Sessionone, BoxText, BoxBrandAndText } from "./style";
import imgSession from "./img/favpng_conor-mcgregor-ea-sports-ufc-2-ultimate-fighting-championship-ufc-undisputed-3.png";
import imgBrand from "./img/favpng_ufc-205-alvarez-vs-mcgregor-t-shirt-reebok-boxing-mixed-martial-arts.png";
import nextImage from "./img/next.png";

export const SessionOne = () => {
  return (
    <Sessionone>
      <BoxText>
        <h1>
          Você possuí sites ou sistemas que gostaria de vender?{" "}
          <span>Venda agora com o Web-Site Sale</span>
        </h1>
        <button>Entrar</button>
      </BoxText>

      <BoxBrandAndText>
        <img
          src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt=""
        />
      </BoxBrandAndText>
    </Sessionone>
  );
};
