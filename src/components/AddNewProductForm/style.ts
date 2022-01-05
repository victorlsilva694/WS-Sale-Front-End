import styled from "styled-components";

export const TitleSession = styled.h1`
  font-family: "Lato";
  text-align: center;
  color: rgb(50, 50, 50);
`;

export const ContainerInputFile = styled.div`
  width: 50%;
`;

export const ContainerFinally = styled.div``;

export const ContainerDraggable = styled.div`
  width: 90%;
  height: 100%;
  border-radius: 5px;
  border: 4px dashed rgb(80, 80, 80);
  /* align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center; */

  label {
    background-color: transparent;
    color: black;
    text-transform: uppercase;
    text-align: center;
    display: block;
    margin-top: 10px;
    cursor: pointer;

    img {
      width: 30%;
      position: relative;
      height: 80%;
      position: relative;
      top: 8vh;
    }
  }

  img {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }

  input[type="file"] {
    display: none;
  }
`;

export const ImagePreRender = styled.img`
  width: 80%;
  height: 80%;
  border-radius: 5px;
  position: relative;
  top: -1.3vh;
`;
