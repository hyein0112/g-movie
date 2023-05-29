import { useParams } from "react-router-dom";
import * as S from "./style";

const MyPage = () => {
  const { movieID } = useParams();
  return <div>detail {movieID}</div>;
};

export default MyPage;
