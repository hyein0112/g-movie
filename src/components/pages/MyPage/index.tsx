import * as S from "./style";
import * as I from "../../../assets";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

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
      <S.MovieBox>
        <S.MyLikeMovie>
          내가{" "}
          <span style={{ color: "#6886C5", fontWeight: "700" }}>좋아요</span> 한
          영화
        </S.MyLikeMovie>
        <div>
          <S.PosterContainer>
            <S.MoviePoster />
            <S.MoviePoster />
            <S.MoviePoster />
            <S.MoviePoster />
            <S.MoviePoster />
          </S.PosterContainer>
        </div>
      </S.MovieBox>
    </S.Container>
  );
};

export default MyPage;
