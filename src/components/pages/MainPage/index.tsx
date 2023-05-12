import * as S from "./style";
import * as I from "../../../assets";
import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <S.Container>
      <I.Logo />
      <S.UserButton>
        <Link to="/my">
          <I.User />
        </Link>
      </S.UserButton>
    </S.Container>
  );
};

export default MainPage;
