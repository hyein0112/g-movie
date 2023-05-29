import * as S from "./style";
import * as I from "../../../assets";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const MyPage = () => {
  const [user, setUser] = useState({});
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function getMovie() {
      try {
        const data = await axios.get(
          `api/user/info/${localStorage.getItem("uuid")}`
        );
        setUser(data.data);
        setMovies(data.data.likeMovie);
      } catch (e) {
        console.log(e);
      }
    }
    getMovie();
  }, []);

  return (
    <S.Container>
      <I.Logo />
      <S.UserBox>
        <S.Contour />
        <S.UserContainer>
          <S.UserInfoBox>
            <I.MyUser />
            <S.TextBox>
              <S.UserName>{user.name}</S.UserName>
              <S.UserEmail>{user.userId}</S.UserEmail>
            </S.TextBox>
          </S.UserInfoBox>

          <S.LogoutButton onClick={() => localStorage.removeItem("uuid")}>
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
            {movies?.map((movie) => (
              <S.MovieContainer key={movie.id}>
                <S.MoviePoster src={movie.posterImg} />
                <S.MovieName>{movie.title}</S.MovieName>
              </S.MovieContainer>
            ))}
          </S.PosterContainer>
        </div>
      </S.MovieBox>
    </S.Container>
  );
};

export default MyPage;
