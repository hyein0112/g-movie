import * as S from "./style";
import * as I from "../../../assets";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";

const MainPage = () => {
  useEffect(() => {
    async function getMovie() {
      try {
        const data = await axios.get("/api/movie");
        console.log(data);
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
    </S.Container>
  );
};

export default MainPage;
