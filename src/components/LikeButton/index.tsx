import axios from "axios";
import { EmptyLike, FillLike } from "../../assets";
import { useEffect, useState } from "react";

const LikeButton = ({
  movieID,
  likeMovies,
}: {
  movieID: any;
  likeMovies: any;
}) => {
  const uuid = localStorage.getItem("uuid");
  const [isLiked, setLiked] = useState(false);

  useEffect(() => {
    likeMovies.map((movie: { id: any }) => {
      movie?.id == movieID ? setLiked(true) : setLiked((prev) => prev);
    });
  }, [likeMovies, movieID]);

  const onClickLiked = async () => {
    try {
      await axios.post(`/api/movie/likes`, {
        movieId: movieID,
        userId: uuid,
        isChecked: !isLiked,
      });
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
