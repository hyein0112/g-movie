import * as S from "./style";
import * as I from "../../../assets";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import LikeButton from "../../LikeButton";

const MainPage = () => {
  const uuid = localStorage.getItem("uuid");
  const [movies, setMovies] = useState<any[]>([]);
  const [likeMovies, setLikeMovies] = useState<any[]>([]);
  useEffect(() => {
    axios
      .all([
        axios.get(`${import.meta.env.BASE_URL}/movie`),
        axios.get(`${import.meta.env.BASE_URL}/user/info/${uuid}`),
      ])
      .then(
        axios.spread((movieRes, infoRes) => {
          setMovies(movieRes.data);
          setLikeMovies(infoRes.data.likeMovie);
        })
      )
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const onMovieClick = (movieID: any) => {
    window.location.pathname = `/detail/${movieID}`;
  };

  return (
    <S.Container>
      <I.Logo />
      <S.UserButton>
        <Link to="/my">
          <I.User />
        </Link>
      </S.UserButton>
      {uuid === null ? (
        <>
          <div style={{ marginTop: "35vh" }}>로그인이 필요한 서비스입니다.</div>
          <S.LoginButton onClick={() => localStorage.removeItem("uuid")}>
            <Link to="/login" style={{ color: "#ea4141" }}>
              로그인
            </Link>
          </S.LoginButton>
        </>
      ) : (
        <S.MovieBox>
          {movies?.map((movie, index) => (
            <div key={movie.id}>
              <S.MovieLikeButton>
                <LikeButton movieID={movie.id} likeMovies={likeMovies} />
              </S.MovieLikeButton>
              <S.RankingBox>
                {index === 0 ? (
                  <I.FirstRank />
                ) : index === 1 ? (
                  <I.SecondRank />
                ) : index === 2 ? (
                  <I.ThirdRank />
                ) : null}
              </S.RankingBox>
              <S.MovieContainer onClick={() => onMovieClick(movie.id)}>
                <S.MoviePoster src={movie.posterImg} />
                <S.MovieName>{movie.title}</S.MovieName>
              </S.MovieContainer>
            </div>
          ))}
        </S.MovieBox>
      )}
    </S.Container>
  );
};

export default MainPage;
