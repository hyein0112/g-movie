import * as S from "./style";
import * as I from "../../../assets";

const MainPage = () => {
  return (
    <S.Container>
      <I.Logo />
      <S.UserLogo>
        <I.User />
      </S.UserLogo>
    </S.Container>
  );
};

export default MainPage;
