import { Link } from "react-router-dom";

import * as S from "./style";
import * as I from "../../../assets";

const LoginPage = () => {
  return (
    <S.Container>
      <I.Logo />
      <S.InputBox>
        <S.Input spellCheck="false" placeholder="이메일을 입력하세요." />
        <S.Input spellCheck="false" placeholder="비밀번호를 입력하세요." />
        <S.ForgetPW>앗! 비밀번호를 잊으셨나요?</S.ForgetPW>
      </S.InputBox>
      <Link to="/">
        <S.LoginButton>로그인</S.LoginButton>
      </Link>
      <Link to="/signup" style={{ color: "#9a9a9a" }}>
        <S.MoveSignupButton>회원가입</S.MoveSignupButton>
      </Link>
    </S.Container>
  );
};

export default LoginPage;
