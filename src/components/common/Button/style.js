import styled from "styled-components";

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 8px;
  > button {
    font-size: 14px;
    font-family: "Pretendard-Variable";
    color: #333335;
    border-radius: 10px;
    padding: 14px 0;
    outline: none;
    cursor: pointer;
  }
  ::placeholder {
    color: #b7bcc6;
  }
`;
