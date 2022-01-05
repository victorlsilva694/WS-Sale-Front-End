import styled from 'styled-components';

export const Sessionone = styled.div`
  padding: 40px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media(max-width: 900px) {
    align-items: center;
    flex-direction: column;
    gap: 50px;
  }

  img {
    display: block;
    max-width: 100%;
  }
`;

export const BoxText = styled.div`
  width: 35%;
  @media(max-width: 900px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
  }

  h1 {
    font-family: 'Lato';
    font-size: max(2.5vw, 15px);
    position: relative;
    color: rgb(50,50,50);

    span {
      color: rgb(60,60,200);
    }
  }

  button {
    width: 50%;
    border-radius: 5px;
    background-color: rgba(30,104,215, .9);
    color: rgb(250,250,250);
    font-family: 'Lato';
    font-weight: bold;
    font-size: max(1.2vw, 15px);
    border: none;
    height: 50px;

    @media(max-width: 900px) {
      width: 70%;
    }
  }
`;

export const BoxBrandAndText = styled.div`
  width: 60%;
  img {
    border-radius: 10px;

  }
`;

