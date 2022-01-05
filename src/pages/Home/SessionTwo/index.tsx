import { Sessiontwo, TitleSession, CardsContainer } from './style';
import cardsContent from './Content';
import { Card } from '../../../components';

export const SessionTwo = () => {
  return (
    <Sessiontwo>
      <TitleSession>O que nós oferecemos na Web-Site Sale?</TitleSession>
      <CardsContainer>
        {
          cardsContent.map(({ img, key, description }) => (
            <Card img={img} key={key} description={description} />
          ))
        }
      </CardsContainer>
    </Sessiontwo>
  );
}