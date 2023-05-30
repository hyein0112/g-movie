import styled from "@emotion/styled";

export const Container = styled.div`
  width: 232px;
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

export const Poster = styled.img`
  width: 232px;
  height: 328px;
  background: #d9d9d9;
  border-radius: 5px;
  margin: 63px 0 8px 0;
`;

export const LikeBox = styled.div`
  height: 20px;
  width: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 15px;
  align-self: end;
`;

const Text = styled.span`
  align-self: start;
  color: #000000;
  line-height: 120%;
`;

export const Title = styled(Text)`
  font-weight: 600;
  font-size: 15px;
  margin-top: 9px;
`;

export const OpeningDate = styled(Text)`
  font-weight: 600;
  font-size: 8px;
`;

export const Contour = styled.div`
  width: 100%;
  height: 2px;
  border-radius: 10px;
  margin: 15px 0 22px 0;
  background: #6886c5;
`;

export const Description = styled(Text)`
  font-size: 10px;
  line-height: 200%;
  margin-bottom: 30px;
`;
