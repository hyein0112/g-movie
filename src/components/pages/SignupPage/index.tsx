import { useForm } from "react-hook-form";
import * as S from "./style";
import * as I from "../../../assets";
import axios from "axios";
import { Link } from "react-router-dom";

const SignupPage = () => {
  const { register, handleSubmit } = useForm();
  const customAxios = axios.create({});
  const api_proxy =
    window.location.hostname === "localhost" ? "/api" : "/api_proxy";

  const handleSubmitData = async (data: any) => {
    try {
      await customAxios.post(`${api_proxy}/user/signup`, {
        ...data,
      });
      window.location.pathname = "/login";
    } catch (e: any) {
      console.log(e);
      e?.response.status === 500 && alert("이미 가입된 회원입니다.");
    }
  };

  return (
    <S.Container>
      <I.Logo />
      <form onSubmit={handleSubmit(handleSubmitData)}>
        <S.InputBox>
          <S.Input
            spellCheck="false"
            placeholder="이름을 입력하세요."
            {...register("name")}
          />
          <S.Input
            spellCheck="false"
            placeholder="아이디를 입력하세요."
            {...register("id")}
          />
          <S.Input
            spellCheck="false"
            placeholder="비밀번호를 입력하세요."
            {...register("password")}
          />
        </S.InputBox>
        <S.SignupButton>회원가입</S.SignupButton>
      </form>
      <Link to="/login">
        <S.MoveLoginButton>이미 회원이신가요?</S.MoveLoginButton>
      </Link>
    </S.Container>
  );
};

export default SignupPage;
