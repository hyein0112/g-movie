import { useForm } from "react-hook-form";
import * as S from "./style";
import * as I from "../../../assets";
import axios from "axios";

const SignupPage = () => {
  const { register, handleSubmit } = useForm();
  const customAxios = axios.create({});

  const handleSubmitData = async (data: any) => {
    console.log(data);
    try {
      await customAxios.post("/api/user/signup", {
        ...data,
      });
      window.location = "/login";
    } catch (e: any) {
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
      <S.MoveLoginButton>로그인</S.MoveLoginButton>
    </S.Container>
  );
};

export default SignupPage;
