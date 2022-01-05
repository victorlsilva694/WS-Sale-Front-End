import React from "react";
import * as S from "./style";

interface INavItens {
  img: string;
}

const NavItens: React.FC<INavItens> = ({ img = "" }) => {
  return (
    <S.NavItem>
      <img src={img} alt="" />
    </S.NavItem>
  );
};

export default NavItens;