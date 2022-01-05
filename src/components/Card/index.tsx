import React from "react";
import * as S from "./style";

interface ICards {
  img: string;
  description: string;
}

const Card: React.FC<ICards> = ({ img = "", description }) => {
  return (
    <S.Card>
      <img src={img} alt=""></img>
      <p>{description}</p>
    </S.Card>
  );
};

export default Card;
