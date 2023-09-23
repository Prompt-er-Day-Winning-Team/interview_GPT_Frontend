import styled from "styled-components";
import Modal from "antd/es/modal/Modal";
import { Spin } from "antd";

export const SpinStyle = styled(Spin)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20vh;
  margin-top: 11%;
`;

export const LoadingText = styled.div`
  color: #333335;
  font-size: 21px;
  font-family: "Pretendard-Bold";
  line-height: 28px;
`;

export const Wrap = styled.div`
  width: 100%;
  background-color: #ffffff;
`;

export const InterviewHeader = styled.div`
  display: flex;
  margin: 45px 24px;
  margin-bottom: 5px !important;
  justify-content: space-between;
`;

export const Title = styled.div`
  color: #333335;
  font-size: 18px;
  font-family: "Pretendard-Bold";
  white-space: pre-line;
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

export const CheckButton = styled.div`
  width: 100px;
  height: 22px;
  border-radius: 40px;
  padding: 10px;
  background: #333335;
  color: white;
  font-size: 14px;
  font-family: "Pretendard-medium";
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
`;

export const AddButton = styled.div`
  width: 120px;
  height: 22px;
  border-radius: 40px;
  padding: 10px;
  border: 1px solid #333335;
  font-size: 14px;
  font-family: "Pretendard-medium";
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 20px;
`;

export const InterviewerCardBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 24px;
`;

export const InterviewerCard = styled.div`
  width: 97%;
  height: 20px;
  background: #f1f4f9;
  display: flex;
  border-radius: 8px;
  padding: 24px;
  margin-top: 15px;
  justify-content: space-between;
  align-items: center;
  > span {
    font-size: 15px;
    font-family: "Pretendard-Medium";
    color: #333335;
    margin-right: 10px;
  }
`;

export const LinkCopyButton = styled.div`
  width: 120px;
  height: 19px;
  border-radius: 40px;
  padding: 10px;
  border: 1px solid #27ae62;
  font-size: 14px;
  color: #27ae62;
  font-family: "Pretendard-medium";
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ButtonBlock = styled.div`
  display: flex;
  gap: 16px;
  justify-content: end;
  margin: 400px 0 10px 0;
`;

export const CustomModal = styled(Modal)`
  display: flex;
  justify-content: center;
  .ant-modal-header {
  }
  .ant-modal-title {
    color: #333335;
    font-size: 18px;
    font-family: "Pretendard-Bold";
  }
`;

export const SummaryCard = styled.div`
  width: 430px;
  height: fit-content;
  background: #f1f4f9;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  padding: 24px;
  margin-top: 15px;
  margin-bottom: 30px;
  justify-content: center;
`;

export const Content = styled.div`
  color: #8e94a1;
  font-size: 15px;
  font-family: "Pretendard-Medium";
  white-space: pre-line;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const PersonType = styled.div`
  color: #8e94a1;
  width: 80px;
  font-size: 18px;
  font-family: "Pretendard-Medium";
  white-space: pre-line;
`;

export const SummaryContent = styled.div`
  color: #333335;
  font-size: 15px;
  font-family: "Pretendard-Medium";
  white-space: pre-line;
  margin-bottom: 10px;
  width: 400px;
`;
