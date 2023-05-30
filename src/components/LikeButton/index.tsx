import axios from "axios";
import { EmptyLike, FillLike } from "../../assets";
import { useEffect, useState } from "react";

const LikeButton = ({ movieID, likeMovies }) => {
  const uuid = localStorage.getItem("uuid");
  const [isLiked, setLiked] = useState(false);

  useEffect(() => {
    likeMovies.map((movie) => {
      movie.id == movieID ? setLiked(true) : setLiked((prev) => prev);
    });
    console.log(isLiked);
  }, [likeMovies, movieID]);

  const onClickLiked = async () => {
    try {
      const data = await axios.post(`/api/movie/likes`, {
        movieId: movieID,
        userId: uuid,
        isChecked: !isLiked,
      });
      setLiked((prev) => !prev);
      console.log(data);
      console.log(
        `"movieId:" ${movieID} "userId:" ${uuid} "isChecked:" ${!isLiked}`
      );
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div onClick={onClickLiked}>{isLiked ? <FillLike /> : <EmptyLike />}</div>
  );
};

export default LikeButton;
