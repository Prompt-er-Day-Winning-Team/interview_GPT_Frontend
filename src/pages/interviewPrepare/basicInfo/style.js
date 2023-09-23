import styled from "styled-components";
import { Spin } from "antd";

export const SpinStyle = styled(Spin)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20vh;
  margin-top: 16%;
`;

export const LoadingText = styled.div`
  color: #333335;
  font-size: 21px;
  font-family: "Pretendard-Bold";
  line-height: 28px;
  justify-content: center;
  align-items: center;
`;

export const Wrap = styled.div`
  width: 100%;
  background-color: #ffffff;
`;

export const InterviewQuestionBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 24px;
`;

export const Title = styled.div`
  width: 100%;
  color: #333335;
  font-size: 16px;
  font-family: "Pretendard-Bold";
  margin-top: 24px;
  line-height: 28px;
`;

export const CardContainer = styled.div`
  display: flex;
  gap: 16px;
  margin: 16px 0;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 296px;
  border-radius: 24px;
  border: 1px solid var(--gray3, #b7bcc6);
  border: ${(props) =>
    props.selected
      ? "2px solid var(--gray1, #333335)"
      : "1px solid var(--gray3, #B7BCC6)"};
  margin-bottom: ${(props) => (props.selected ? "0" : "2px")};
  padding: 24px;
  cursor: pointer;
  &:hover {
    border: 2px solid var(--gray1, #333335);
    margin-bottom: 0;
  }
`;

export const CardTitle = styled.div`
  color: #333335;
  font-size: 16px;
  font-family: "Pretendard-Bold";
  margin-top: 32px;
  line-height: 28px;
`;

export const CardContents = styled.div`
  color: #8e94a1;
  font-size: 14px;
  font-family: "Pretendard";
  word-break: keep-all;
  margin-top: 8px;
  line-height: 22px;
  letter-spacing: -0.42px;
`;

export const TextCount = styled.div`
  color: #333335;
  font-size: 14px;
  font-family: "Pretendard";
  margin-top: 6px;
  line-height: 22px;
  text-align: right;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: end;
  margin: 90px 0 10px 0;
`;
