import * as S from "./style";
import * as I from "../../../assets";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import LikeButton from "../../LikeButton";

const MainPage = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function getMovie() {
      try {
        const data = await axios.get("/api/movie");
        setMovies(data.data);
      } catch (e) {
        console.log(e);
      }
    }
    getMovie();
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
              <LikeButton movieID={movie.id} />
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
