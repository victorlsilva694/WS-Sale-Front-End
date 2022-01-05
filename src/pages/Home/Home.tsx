import { NavBar } from "./NavBar";
import { SessionOne } from "./SessionOne";
import { SessionTwo } from "./SessionTwo";
import { SessionThree } from "./SessionThree";
import { SessionFour } from "./SessionFour";
import * as S from "./styles";

function Home() {
  return (
    <>
      <S.Container>
        <NavBar />
        <SessionOne />
      </S.Container>
      <SessionTwo />
      <S.Container>
        <SessionThree />
        <SessionFour />
      </S.Container>
    </>
  );
}

export default Home;
