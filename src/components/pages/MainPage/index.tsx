import * as S from "./style";
import * as I from "../../../assets";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const MainPage = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function getMovie() {
      try {
        const data = await axios.get("/api/movie");
        console.log(data);
        setMovies(data.data);
      } catch (e) {
        console.log(e);
      }
    }
    getMovie();
  }, []);

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
          <S.MovieContainer key={movie.id}>
            <S.MoviePoster src={movie.posterImg} />
            <S.MovieName>{movie.title}</S.MovieName>
          </S.MovieContainer>
        ))}
      </S.MovieBox>
    </S.Container>
  );
};

export default MainPage;
