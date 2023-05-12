import * as S from "./style";
import * as I from "../../../assets";

const MyPage = () => {
  return (
    <S.Container>
      <I.Logo />
      <S.UserBox>
        <S.Contour />
        <S.UserContainer>
          <S.UserInfoBox>
            <I.MyUser />
            <S.TextBox>
              <S.UserName>백혜인</S.UserName>
              <S.UserEmail>s21046@gsm.hs.kr</S.UserEmail>
            </S.TextBox>
          </S.UserInfoBox>
          <S.LogoutButton>로그아웃</S.LogoutButton>
        </S.UserContainer>
        <S.Contour />
      </S.UserBox>
    </S.Container>
  );
};

export default MyPage;
