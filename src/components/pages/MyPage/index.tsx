import * as S from "./style";
import * as I from "../../../assets";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import LikeButton from "../../LikeButton";

const MyPage = () => {
  const uuid = localStorage.getItem("uuid");
  const [user, setUser] = useState<any>();
  const [movies, setMovies] = useState<any[]>([]);
  useEffect(() => {
    async function getMovie() {
      try {
        const data = await axios.get(
          `https://port-0-movie-app-server-otjl2cli2nay6y.sel4.cloudtype.app/user/info/${uuid}`
        );
        setUser(data.data);
        setMovies(data.data.likeMovie);
      } catch (e) {
        console.log(e);
      }
    }
    getMovie();
  }, [user]);
  const onMovieClick = (movieID: any) => {
    window.location.pathname = `/detail/${movieID}`;
  };
  return (
    <S.Container>
      <I.Logo />
      <S.UserBox>
        <S.Contour />
        <S.UserContainer>
          <S.UserInfoBox>
            <I.MyUser />
            <S.TextBox>
              <S.UserName>
                {uuid === null ? "로그인이 필요한 서비스입니다." : user?.name}
              </S.UserName>
              <S.UserEmail>{user?.userId}</S.UserEmail>
            </S.TextBox>
          </S.UserInfoBox>

          <S.LogoutButton onClick={() => localStorage.removeItem("uuid")}>
            <Link to="/login" style={{ color: "#ea4141" }}>
              {uuid === null ? "로그인" : "로그아웃"}
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
              <div key={movie.id}>
                <S.MovieContainer onClick={() => onMovieClick(movie.id)}>
                  <S.MovieLikeButton>
                    <LikeButton movieID={movie.id} likeMovies={movies} />
                  </S.MovieLikeButton>
                  <S.MoviePoster src={movie.posterImg} />
                  <S.MovieName>{movie.title}</S.MovieName>
                </S.MovieContainer>
              </div>
            ))}
          </S.PosterContainer>
        </div>
      </S.MovieBox>
    </S.Container>
  );
};

export default MyPage;
