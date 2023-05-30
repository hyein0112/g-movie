import { useParams } from "react-router-dom";
import * as S from "./style";
import * as I from "../../../assets";
import axios from "axios";
import { useEffect, useState } from "react";
import LikeButton from "../../LikeButton";

const DetailPage = () => {
  const { movieID } = useParams();
  const [movie, setMovie] = useState({});
  useEffect(() => {
    async function getMovie() {
      try {
        const data = await axios.get(`/api/movie/${movieID}`);
        setMovie(data.data);
      } catch (e) {
        console.log(e);
      }
    }
    getMovie();
  }, [movie, movieID]);

  return (
    <S.Container>
      <I.Logo />
      <S.Poster src={movie.posterImg} />
      <S.LikeBox>
        <LikeButton movieID={movieID} />
        {movie.likes}
      </S.LikeBox>
      <S.Title>{movie.title}</S.Title>
      <S.OpeningDate>{movie.openingDate}</S.OpeningDate>
      <S.Contour />
      <S.Description>{movie.description}</S.Description>
    </S.Container>
  );
};

export default DetailPage;
