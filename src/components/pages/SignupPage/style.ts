import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding-top: 23.15vh;
`;

export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 6.4vh 0 10.47vh 0;
`;

export const Input = styled.input`
  width: 250px;
  height: 15px;
  border: 0;
  border-bottom: 1px solid #b7c7e8;
  background: none;
  font-size: 12px;
  padding: 33px 0 10px 2px;

  &:focus {
    border-bottom: 1px solid #6886c5;
    outline: none;
  }
`;

export const SignupButton = styled.button`
  background: #6886c5;
  border-radius: 8px;
  border: none;
  width: 250px;
  height: 38px;
  color: #fff;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;

  &:active {
    filter: brightness(90%);
  }
`;

export const MoveLoginButton = styled.button`
  background: none;
  border: none;
  font-weight: 400;
  font-size: 9px;
  text-decoration-line: underline;
  color: #9a9a9a;
  cursor: pointer;
  padding-top: 18px;
`;
