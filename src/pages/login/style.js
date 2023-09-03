import styled from "styled-components";

export const Wrap = styled.div`
  width: 100%;
  background-color: #ffffff;
`;

export const LoginBlock = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 9%;
`;

export const Title = styled.div`
  color: #1e1e1e;
  font-size: 39px;
  font-family: "Pretendard-Bold";
`;

export const SubTitle = styled.div`
  color: #b7bcc6;
  font-size: 16px;
  font-family: "Pretendard-Medium";
  margin: 10px 0px;
`;

export const InputBlock = styled.div`
  margin-top: 35px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const LoginButton = styled.div`
  width: 362px;
  height: 28px;
  background: ${(props) => (props.isCheck ? "#333335" : "#b7bcc6")};

  border-radius: 10px;
  padding: 10px;
  color: #f1f4f9;
  font-size: 16px;
  font-family: "Pretendard-Medium";
  margin-top: 28px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AccountActionsBlock = styled.div`
  margin-top: 35px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
  > span {
    color: #333335;
    font-size: 16px;
    font-family: "Pretendard-Medium";
    cursor: pointer;
  }
`;
