import styled from "styled-components";

export const Wrap = styled.div`
  width: 100%;
  background-color: #ffffff;
`;

export const InterviewBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin: 40px 24px;
`;

export const InterviewCardBlock = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 25px;
  margin-bottom: 50px;
`;

export const InterviewCard = styled.div`
  width: 290px;
  height: 347px;
  background: #f1f4f9;
  display: flex;
  flex-direction: column;
  border-radius: 24px;
  padding: 24px;
  justify-content: space-between;
`;

export const CardNum = styled.div`
  font-size: 23px;
  font-family: "Pretendard-Bold";
  color: ${(props) => (props.type === "sum" ? "#0548fb" : "#27AE62")};
`;

export const Title = styled.div`
  color: #333335;
  font-size: 18px;
  font-family: "Pretendard-Bold";
  white-space: pre-line;
  margin-bottom: 0;
`;

export const CardText = styled.div`
  color: #8e94a1;
  font-size: 16px;
  font-family: "Pretendard-Medium";
  line-height: 22px;
  margin: 10px 0;
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
`;
