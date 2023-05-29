import { useParams } from "react-router-dom";
import * as S from "./style";
import * as I from "../../../assets";

const DetailPage = () => {
  const { movieID } = useParams();
  return (
    <S.Container>
      <I.Logo />
      <S.Poster />
      <S.LikeBox>
        <I.EmptyLike />5
      </S.LikeBox>
      <S.Title>영화제목</S.Title>
      <S.OpeningDate>2023.03.13</S.OpeningDate>
      <S.Contour />
      <S.Description>
        영화줄거리 영화줄거리 영화줄거리 영화줄거리 영화줄거 리 영화 줄거리
        영화줄거리 영화줄거리 영화줄거리 영화줄 거리 영화줄거리 영화줄거리
        영화줄거리 영화줄거리 영화 줄거리 영화줄거리 영화줄거리 영화줄거리
        영화줄거리 영 화줄거리 영화줄거리 영화줄거리 영화줄거리 영화줄거리
        영화줄거리 영화줄거리 영화줄거리 영화 줄거리 영화줄거리
      </S.Description>
    </S.Container>
  );
};

export default DetailPage;
