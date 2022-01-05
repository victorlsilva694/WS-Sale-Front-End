import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 25%;
  gap: 40px;
  padding: 30px;
  align-items: center;
  border-radius: 50px;

  &:hover {
    background-color: white;
    transition: .5s;
  }

  img {
    width: 120px;
  }

  p {
    text-align: center;
    font-size: max(1.6vw, 15px);
    font-family: 'IBM Plex Sans';
  }
    
`;