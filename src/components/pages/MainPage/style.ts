import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding-top: 30px;
`;

export const UserButton = styled.button`
  position: absolute;
  right: 5vw;
  background: none;
  border: none;
`;

export const MovieBox = styled.div`
  width: 95vw;
  margin: 50px auto 0 auto;
  display: grid;
  grid-template-columns: 90px 90px 90px;
  column-gap: 3vw;
  row-gap: 2vh;
  justify-content: center;
`;

export const MovieContainer = styled.div`
  width: 90px;
  displey: flex;
  flex-direction: column;
`;

export const MoviePoster = styled.img`
  min-width: 90px;
  width: 90px;
  height: 126px;
  background: #d9d9d9;
  border-radius: 5px;
`;

export const MovieLikeButton = styled.div`
  position: absolute;
  margin: 105px 0 0 68px;
  cursor: pointer;
`;

export const MovieName = styled.div`
  width: 90px;
  text-align: center;
  font-size: 10px;
  font-weight: 600;
  padding-top: 5px;
`;

export const RankingBox = styled.div`
  position: absolute;
  margin: -8px 0 0 -8px;
`;
