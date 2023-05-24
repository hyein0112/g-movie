/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link } from "react-router-dom";

import * as S from "./style";
import * as I from "../../../assets";

const SignupPage = () => {
  return (
    <S.Container>
      <I.Logo />
      <S.InputBox>
        <S.Input spellCheck="false" placeholder="이름을 입력하세요." />
        <S.Input spellCheck="false" placeholder="이메일을 입력하세요." />
        <S.Input spellCheck="false" placeholder="비밀번호를 입력하세요." />
        <S.Input spellCheck="false" placeholder="비밀번호를 재입력하세요." />
      </S.InputBox>
      <Link to="/login">
        <S.SignupButton>회원가입</S.SignupButton>
      </Link>
    </S.Container>
  );
};

export default SignupPage;
