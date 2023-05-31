import axios from "axios";
import { EmptyLike, FillLike } from "../../assets";
import { useEffect, useState } from "react";

const LikeButton = ({
  movieID,
  likeMovies,
  setLike,
}: {
  movieID: any;
  likeMovies: any;
  setLike?: any;
}) => {
  const uuid = localStorage.getItem("uuid");
  const [isLiked, setLiked] = useState(false);

  useEffect(() => {
    likeMovies?.map((movie: { id: any }) => {
      movie?.id == movieID ? setLiked(true) : setLiked((prev) => prev);
    });
  }, [likeMovies, movieID]);

  const onClickLiked = async () => {
    try {
      await axios.post(
        `https://port-0-movie-app-server-otjl2cli2nay6y.sel4.cloudtype.app/movie/likes`,
        {
          movieId: movieID,
          userId: uuid,
          isChecked: !isLiked,
        }
      );
      setLiked((prev) => !prev);
      setLike((prev: any) => !prev);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div onClick={onClickLiked}>{isLiked ? <FillLike /> : <EmptyLike />}</div>
  );
};

export default LikeButton;
