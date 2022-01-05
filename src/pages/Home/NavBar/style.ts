import styled from 'styled-components';

export const Navbar = styled.nav`
  width:100%;
  display: flex;
  height: 60px;
`;
export const Brand = styled.nav`
  position: relative;
  left: 3%;
  display: flex;
  width:30%;
  min-width: 250px;
  height: 50px;

  h1 {
    font-weight: 600px;
    font-size: max(1.6vw, 20px);
    font-family: 'Roboto';
    color: rgb(90,90,230);
    position: relative;
    top: 2vh;

    span {
      font-weight: 600px;
      font-size: max(1.6vw, 20px);
      color: rgb(70,70,80);
      position: relative;
    }
  }
`;
export const ListItens = styled.nav`
  position: relative;
  display: flex;
  float:center;
  width:40%;
  height: 50px;

  @media(max-width: 800px) {
    display: none;
  }

  ul {
    display: flex;
    width: 100%;

    li {
      list-style: none;
      width: 35%;
      height: 50px;

        @media(max-width: 800px) {
          list-style: none;
          width: 100%;
          position: relative;
          left: 20%;
          height: 50px;
        }
    }

    p {
      text-align: center;

      a {
        font-size: max(1.2vw, 12px);
        font-family: 'Open Sans';
        color: black;
        font-weight: 400;
        position: relative;
        top: 1.5vh;
        text-decoration: none;  

      }
    }
  }

  

`;

export const Login = styled.div`
  width: 12%;
  min-width: 60px;
  display: flex;
  position: relative;
  top: 15%;
  left: 15%;
  height: 40px;
  float: right;
    img {
      position: relative;
    }
    a{
      position: relative;
      left: 5%;
      top: 25%;
      font-size: max(1vw, 12px);
      font-family: 'Open Sans';
      text-decoration: none;
      color: black;
    }

  @media(max-width: 800px) {
    display: none;
  }
`;

export const ImageBrand = styled.div`
  width: 60px;
  height: 60px;
  top: 5px;

  img{
    position: relative;
    width:80%;
    top: 10%;
  }
`;