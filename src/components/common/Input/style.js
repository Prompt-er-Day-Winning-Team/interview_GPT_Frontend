import styled from "styled-components";

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  margin-top: 8px;
  > textarea {
    font-size: 14px;
    font-family: "Pretendard-Medium";
    color: #333335;
    border: 1px solid #b7bcc6;
    border-radius: 8px;
    padding: 21px 16px;
    outline: none;
    box-sizing: border-box;
  }
  ::placeholder {
    color: #b7bcc6;
  }
`;
