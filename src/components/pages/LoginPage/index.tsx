import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as S from "./style";
import * as I from "../../../assets";
import axios from "axios";

const LoginPage = () => {
  const { register, handleSubmit } = useForm();

  if (localStorage.getItem("uuid") !== null) window.location.pathname = "/";

  const handleSubmitData = async (data: any) => {
    try {
      const res = await axios.post(
        "https://port-0-movie-app-server-otjl2cli2nay6y.sel4.cloudtype.app/user/signin",
        {
          ...data,
        }
      );
      localStorage.setItem("uuid", res.data.userUUID);
      window.location.pathname = "/";
    } catch (e: any) {
      console.log(e);
      e?.response.status === 500 &&
        alert("아이디 및 비밀번호가 올바르지 않습니다.");
    }
  };
  return (
    <S.Container>
      <I.Logo />
      <form onSubmit={handleSubmit(handleSubmitData)}>
        <S.InputBox>
          <S.Input
            spellCheck="false"
            placeholder="아이디를 입력하세요."
            {...register("id")}
          />
          <S.Input
            type="password"
            spellCheck="false"
            placeholder="비밀번호를 입력하세요."
            {...register("password")}
          />
          <S.ForgetPW>앗! 비밀번호를 잊으셨나요?</S.ForgetPW>
        </S.InputBox>
        <S.LoginButton>로그인</S.LoginButton>
      </form>
      <Link to="/signup" style={{ color: "#9a9a9a" }}>
        <S.MoveSignupButton>아직 회원이 아니신가요?</S.MoveSignupButton>
      </Link>
    </S.Container>
  );
};

export default LoginPage;
