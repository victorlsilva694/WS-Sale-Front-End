import styled from 'styled-components';
export const Main = styled.div`
  width: 100%;
  background-color: rgb(245,245,245);
  display: flex;
  align-items: center;
  height: 100vh;

`;
export const ContainerBoxImage = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: rgb(230,230,230);

  img {
    width: 90%;
    min-width: 250px;
    height: 100vh;
    display: block;
  }    
`;

export const ContainerLogin = styled.div`
  width: 50%;
  align-items: center;
  margin: 15% auto;
  height: 100vh;
  align-items: center;

  h1 {
    position: relative;
    top: 22%;
    font-size: max(3vw, 15px);
    font-family: 'Lato';
    text-align: center;
    color: rgb(90,90,230);
  }

  span {
    color: rgb(70,70,80);
  }

  div {
    position: relative;
    top: 28%;
    left: 20%;
    height: 55vh;
    width: 60%;

    p {
      color: black;
      text-align: center;
      font-family: 'Open Sans';
      margin: 10px;

      span {
        a{
          text-decoration: none;
          color: dodgerblue;
        }
      }
    }

    button {
      width: 100%;
      border-radius: 3px;
      border: 1px solid rgb(180,180,180);
      height: 50px;
      margin: 20px;
      font-size: max(1vw, 15px);
      color: white;
      font-family: "Open Sans";
      background-color: dodgerblue;
    }
  }
`; 

export const InputForm = styled.input`
  width: 100%;
  border: 1px solid rgb(180,180,180);
  position: relative;
  border-radius: 3px;
  height: 50px;
  background-color: rgb(250,250,250);
  padding: 10px;
  font-size: max(1vw, 12px);
  font-family: "Open Sans";
  margin: 10px;
  left: 10px;

  &:focus {
    outline: 1px solid dodgerblue;
  }
`;
