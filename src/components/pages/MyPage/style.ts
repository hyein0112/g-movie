import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding-top: 30px;
`;

export const UserBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 25.62vh;
  margin-top: 7vh;
`;

export const Contour = styled.div`
  width: 73.07vw;
  height: 2px;
  border-radius: 10px;
  background: #6886c5;
`;

export const UserContainer = styled.div`
  height: 104px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const UserInfoBox = styled.div`
  width: 150px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const UserName = styled.span`
  font-weight: 600;
  font-size: 15px;
  line-height: 18px;
`;

export const UserEmail = styled.span`
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
`;

export const LogoutButton = styled.button`
  width: 60px;
  height: 20px;
  background: #fff5f5;
  border: 0.5px solid #ea4141;
  font-weight: 500;
  font-size: 10px;
  color: #ea4141;
  align-self: center;
  border-radius: 5px;
`;

export const MovieBox = styled.div`
  align-self: start;
  margin: 10.34vh 0 0 6.4vw;
`;

export const MyLikeMovie = styled.div`
  font-weight: 600;
  font-size: 15px;
  line-height: 18px;
`;

export const PosterContainer = styled.div`
  overflow: scroll;
  display: flex;
  width: 95.6vw;
`;

export const MoviePoster = styled.div`
  min-width: 95px;
  height: 134px;
  background: #d9d9d9;
  margin: 21px 16px 10px 0;
`;
