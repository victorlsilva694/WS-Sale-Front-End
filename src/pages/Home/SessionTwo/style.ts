import styled from 'styled-components';

export const Sessiontwo = styled.div`
  width: 100%;
  background-color: rgb(242,242,242);
  padding: 60px 0;

  h2 {
    letter-spacing: 2px;
    width: 100%;
    font-family: 'Lato';
    font-size: max(2vw, 15px);
  }

`;

export const TitleSession = styled.h1`
  letter-spacing: 2px;
  padding-bottom: 100px;
  width: 100%;
  font-family: 'Lato';
  font-size: max(2vw, 15px);
  text-align: center;
`;

export const CardsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 130px;  

  @media(max-width: 900px) {
    gap: 50px;  
    flex-direction: column;
    align-items: center;
  }
`;