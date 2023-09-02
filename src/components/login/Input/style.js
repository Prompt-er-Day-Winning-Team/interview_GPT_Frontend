import styled from "styled-components";

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  margin: 10px 0px;
  > input {
    width: 350px;
    height: 22px;
    font-size: 16px;
    font-family: "Pretendard-Medium";
    color: #333335;
    border: 1px solid #b7bcc6;
    border-radius: 10px;
    padding: 12px 15px;
  }
  ::placeholder {
    color: #b7bcc6;
  }
`;
