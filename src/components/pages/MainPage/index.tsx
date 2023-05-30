import * as S from "./style";
import * as I from "../../../assets";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import LikeButton from "../../LikeButton";

const MainPage = () => {
  const [movies, setMovies] = useState([]);
  const [likeMovies, setLikeMovies] = useState([]);
  useEffect(() => {
    axios
      .all([
        axios.get("/api/movie"),
        axios.get(`/api/user/info/${localStorage.getItem("uuid")}`),
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
      <S.MovieBox>
        {movies?.map((movie) => (
          <div key={movie.id}>
            <S.MovieLikeButton>
              <LikeButton movieID={movie.id} likeMovies={likeMovies} />
            </S.MovieLikeButton>
            <S.MovieContainer onClick={() => onMovieClick(movie.id)}>
              <S.MoviePoster src={movie.posterImg} />
              <S.MovieName>{movie.title}</S.MovieName>
            </S.MovieContainer>
          </div>
        ))}
      </S.MovieBox>
    </S.Container>
  );
};

export default MainPage;
