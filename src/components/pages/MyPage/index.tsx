import * as S from "./style";
import * as I from "../../../assets";
import { Link } from "react-router-dom";

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

          <S.LogoutButton>
            <Link to="/login" style={{ color: "#ea4141" }}>
              로그아웃
            </Link>
          </S.LogoutButton>
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
            <S.MovieContainer>
              <S.MoviePoster src="https://image.jtbcplus.kr/data/contents/jam_photo/202303/16/f69cc91d-1b8a-45e7-bae0-bd78c654c4c2.jpg" />
              <S.MovieName>인어공주</S.MovieName>
            </S.MovieContainer>
            <S.MovieContainer>
              <S.MoviePoster src="https://i.namu.wiki/i/xn1pyuO4wzvBB86PZgp49kX7IjW_cFPy4rgq9xPQzbs-vRapHyQP5nlxohBL0BEhOS6-MoY26p5LsR-nFJ-N2A.webp" />
              <S.MovieName>범죄도시 3</S.MovieName>
            </S.MovieContainer>
            <S.MovieContainer>
              <S.MoviePoster src="https://t1.daumcdn.net/movie/5605612b56736f1b4dedc8953b29b5d04c32c053" />
              <S.MovieName>존윅 4</S.MovieName>
            </S.MovieContainer>
            <S.MovieContainer>
              <S.MoviePoster src="https://cdn.spotvnews.co.kr/news/photo/202301/582157_808701_4842.jpg" />
              <S.MovieName>스즈메의 문단속</S.MovieName>
            </S.MovieContainer>
            <S.MovieContainer>
              <S.MoviePoster src="https://cdn.eyesmag.com/content/uploads/posts/2023/03/28/new-b126945a-7afe-4c26-8bdc-788b7591d72a.jpg" />
              <S.MovieName>가디언즈 오브 갤럭시</S.MovieName>
            </S.MovieContainer>
          </S.PosterContainer>
        </div>
      </S.MovieBox>
    </S.Container>
  );
};

export default MyPage;
