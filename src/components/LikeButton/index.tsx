import axios from "axios";
import { EmptyLike, FillLike } from "../../assets";
import { useState } from "react";

const LikeButton = ({ movieID }) => {
  const uuid = localStorage.getItem("uuid");
  const [isLiked, setLiked] = useState(false);
  const onClickLiked = async () => {
    try {
      const data = await axios.post(`/api/movie/likes`, {
        movieId: movieID,
        userId: uuid,
      });
      console.log(data);
      setLiked((prev) => !prev);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div onClick={onClickLiked}>{isLiked ? <FillLike /> : <EmptyLike />}</div>
  );
};

export default LikeButton;
