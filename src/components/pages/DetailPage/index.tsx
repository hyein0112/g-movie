import { useParams } from "react-router-dom";
import * as S from "./style";
import * as I from "../../../assets";

const DetailPage = () => {
  const { movieID } = useParams();
  return (
    <S.Container>
      <I.Logo />
      <>detail {movieID}</>
    </S.Container>
  );
};

export default DetailPage;
