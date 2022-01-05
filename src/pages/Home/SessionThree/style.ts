import styled from 'styled-components';

export const NofifyContainer = styled.div`
  width: 100%;
  padding: 50px;
  display: flex;
  overflow: hidden;  

  @media (max-width: 980px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const ContainerBackGround = styled.div`
  width: 55%;
  position: relative;
  top: 5vh;
  margin:10px;


  img {
    max-width: 100%;
    display: block;

    @media (max-width: 980px) {
      width: 100%;
    }
  }
`;

export const ContainerBodySession = styled.div`
  display: flex;
  margin: 0 auto;
  align-items: center;
  flex-direction: column;
  width: 45%;

  @media (max-width: 980px) {
    align-items: center;
    width: 100%;
    margin: 80px;
  }

  h1 {
    padding: 30px;
    font-family: 'Lato';
    font-size: max(1.8vw, 18px);
    text-align: center;
  }
`;
export const GridCardsLine = styled.div`
  width: 100%;   
  margin:12px;
  display: flex;

  @media (max-width: 980px) {
    flex-wrap: wrap;
    align-items: center;
  }
  div {
    margin: 15px;
    @media (max-width: 980px) {
      align-items: center;
    }

    h2 {
      text-align: left;
      color: rgb(80, 120, 200);
      font-size: max(1.8vw, 18px);
      font-family: 'Open Sans';
    }

    h4 {
      text-align: left;
      color: rgb(80, 80, 80);
      font-size: max(1vw, 18px);
      font-family: 'IBM Plex Sans';
    }

    p {
      text-align: left;
      font-size: max(1.3vw, 18px);
      font-family: 'Lato';
    }
  }
`;