import styled from "styled-components";

export const Wrap = styled.div`
  width: 100%;
  background-color: #ffffff;
`;

export const InterviewQuestionBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin: 30px 24px;
`;

export const Title = styled.div`
  color: #333335;
  font-size: 18px;
  font-family: "Pretendard-Bold";
  white-space: pre-line;
`;

export const InterviewCardBlock = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 25px;
`;

export const InterviewCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 220px;
  height: 250px;
  border-radius: 24px;
  border: 1px solid #b7bcc6;
  padding: 24px;
`;

export const PlusButton = styled.div`
  width: 50px;
  height: 50px;
  cursor: pointer;
  background: #f1f4f9;
  color: #333335;
  font-size: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  margin-bottom: 120px;
`;

export const CardText = styled.div`
  color: #8e94a1;
  font-size: 17px;
  font-family: "Pretendard-Medium";
  margin-top: 25px;
`;

export const FinishedInterviewBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin: 30px 24px;
`;

export const FinishedCard = styled.div`
  width: 305px;
  height: 347px;
  background: #f1f4f9;
  display: flex;
  flex-direction: column;
  border-radius: 24px;
  padding: 24px;
`;

export const FinishedCardBlock = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 25px;
`;

export const InterviewIcon = styled.img`
  width: 25px;
  height: 25px;
  margin: 5px;
  margin-bottom: 140px !important;
`;

export const DoneButton = styled.div`
  width: 50px;
  height: 20px;
  border-radius: 40px;
  padding: 10px;
  border: 1px solid #333335;
  color: #333335;
  font-size: 15px;
  font-family: "Pretendard-Bold";
  margin-top: 30px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ProgressBlock = styled.div`
  width: 268px;
  height: 37px;
  background: #0548fb;
  border-bottom-left-radius: 20px; /* 왼쪽 아래 모서리 둥글게 깎음 */
  border-bottom-right-radius: 20px;
  margin: -24px;
  margin-top: 20px !important;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ProgressBar = styled.div`
  width: 200px;
  height: 6px;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 5px;
`;

export const Progress = styled.div`
  width: 135px;
  height: 6px;
  background-color: white;
  border-radius: 5px;
`;
