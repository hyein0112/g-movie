import { Link, useParams } from "react-router-dom";
import * as S from "./style";
import * as I from "../../../assets";
import axios from "axios";
import { useEffect, useState } from "react";
import LikeButton from "../../LikeButton";

const DetailPage = () => {
  const { movieID } = useParams();
  const [movie, setMovie] = useState<any>();
  const [likeMovies, setLikeMovies] = useState<any[]>([]);
  useEffect(() => {
    axios
      .all([
        axios.get(`/api/movie/${movieID}`),
        axios.get(`/api/user/info/${localStorage.getItem("uuid")}`),
      ])
      .then(
        axios.spread((movieRes, infoRes) => {
          setMovie(movieRes.data);
          setLikeMovies(infoRes.data.likeMovie);
        })
      )
      .catch((e) => {
        console.log(e);
      });
  }, [movieID, movie]);

  return (
    <S.Container>
      <I.Logo />
      <S.UserButton>
        <Link to="/my">
          <I.User />
        </Link>
      </S.UserButton>
      <S.Poster src={movie?.posterImg} />
      <S.LikeBox>
        <LikeButton movieID={movieID} likeMovies={likeMovies} />
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
