import whatsApp from "./img/whatsapp.png";
import imageBrand from "./img/web-link.png";
import faceBook from "./img/logotipo-do-aplicativo-do-facebook.png";
import linkedin from "./img/logotipo-do-linkedin.png";
import instagram from "./img/instagram.png";
import * as S from "./style";

const menu = [
  {
    name: "Plataforma",
    links: [
      { title: "Quem Somos?", url: "www.openfit.com" },
      { title: "Entre em Contato", url: "www.openfit.com" },
      { title: "Trabalhe conosco", url: "www.openfit.com" },
    ],
  },
  {
    name: "Venda seus sistemas",
    links: [
      { title: "Vendas de sites", url: "www.openfit.com" },
      { title: "Vendas de aplicativos", url: "www.openfit.com" },
      { title: "Vendas de Layouts", url: "www.openfit.com" },
      { title: "Vendas de games", url: "www.openfit.com" },
    ],
  },
];

export const SessionFour = () => {
  return (
    <S.Footer>
      <S.TopBar>
        <S.GetTheApp>
          <S.GetTheAppTitle>
            Web-Site <span>Sale - MarketPlace </span>{" "}
          </S.GetTheAppTitle>
        </S.GetTheApp>
        <S.DesktopSocialList></S.DesktopSocialList>
      </S.TopBar>
      <S.HR />
      <S.BottomBar>
        {menu.map(({ name, links }) => (
          <S.Menu>
            <S.MenuHead>{name}</S.MenuHead>
            {links.map(({ title, url }) => (
              <S.MenuLink href={url}>{title}</S.MenuLink>
            ))}
          </S.Menu>
        ))}
        <S.MobileSocialList></S.MobileSocialList>
        <S.Policy>
          <S.PolicyRow>© 2022 - Web-Site Sale</S.PolicyRow>
          <S.PolicyRow>
            A plataforma Web-Site Sale não se responsabiliza por erros durante
            as vendas dos sistemas, golpes vindo de terceiros em ataques de
            phishing, produtos que não são o que se esperava ou que não
            agradaram o cliente de alguma forma.
          </S.PolicyRow>
          <S.PolicyRow>
            Nós da Web-Site Sale não temos vínculo algum com os vendedores nem
            mesmo com os cliente, somos somente uma plataforma de venda de
            produtos.
          </S.PolicyRow>
          <S.PolicyRow>
            Desde já agradecemos pela preferencia e desejamos que sinta-se a
            vontade dentro da nossa plataforma!
          </S.PolicyRow>
        </S.Policy>
      </S.BottomBar>
    </S.Footer>
  );
};
