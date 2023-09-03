import React, { useState } from "react";
import Header from "../../../components/common/Header";
import * as S from "./style";
import Button from "../../../components/common/Button";
import { message } from "antd";
import { useNavigate } from "react-router";

const ContentList = [
  {
    title: "서비스 발견 및 활용",
    text: "김수진씨는 회사 동료 통해 SKT 에이닷의 통화요약 기능을 알게 되었으며, 주로 업무 관련 중요한 통화나 클라이언트와의 의견 교환 시에 이 기능을 활용한다.",
  },
  {
    title: "서비스의 편리성",
    text: "김수진씨는 회사 동료 통해 SKT 에이닷의 통화요약 기능을 알게 되었으며, 주로 업무 관련 중요한 통화나 클라이언트와의 의견 교환 시에 이 기능을 활용한다.",
  },
  {
    title: "서비스의 문제점",
    text: "가끔 음성 인식의 오류로 인해 변환된 텍스트가 정확하지 않아 원하는 정보를 찾는 데 어려움을 겪었다. 특히 목소리의 높낮이나 강세에 따라 잘못 인식되는 경우가 있었다.",
  },
  {
    title: "서비스 개선 제안",
    text: "음성 인식의 정확도를 높이고, 녹음 실패나 변환 오류 발생 시 사용자에게 알림을 주는 기능이 추가되면 좋겠다.",
  },
];

const InsightList = [
  {
    title: "피어 추천의 중요성",
    text: "김수진씨는 회사 동료 통해 SKT 에이닷의 통화요약 기능을 알게 되었으며, 주로 업무 관련 중요한 통화나 클라이언트와의 의견 교환 시에 이 기능을 활용한다.",
  },
  {
    title: "업무 환경에서의 활용도",
    text: "김수진씨는 회사 동료 통해 SKT 에이닷의 통화요약 기능을 알게 되었으며, 주로 업무 관련 중요한 통화나 클라이언트와의 의견 교환 시에 이 기능을 활용한다.",
  },
  {
    title: "기술의 정확도 및 피드백 기능",
    text: "김수진씨는 회사 동료 통해 SKT 에이닷의 통화요약 기능을 알게 되었으며, 주로 업무 관련 중요한 통화나 클라이언트와의 의견 교환 시에 이 기능을 활용한다.",
  },
];

const RecordList = [
  {
    name: "인터뷰어(I)",
    content: "에이닷 사용하면서 불편한 점은 어떤게 있으셨나요?",
  },
  {
    name: "인터뷰 1",
    content:
      "안녕하세요, 김수진 씨. 오늘 인터뷰에 참여해주셔서 감사합니다. 본 인터뷰는 SKT 에디닷의 통화요약 기능에 대한 사용자 경험을 파악하기 위한 것입니다. 솔직한 의견을 자유롭게 나눠주세요.",
  },
];
function Modal(props) {
  const { open, close } = props;

  return (
    <S.CustomModal
      visible={open}
      onCancel={close}
      closable={true}
      centered
      footer={null}
      width={520}
      bodyStyle={{ maxHeight: "560px", overflowY: "auto" }}
    >
      <S.Title>{"내용 요약"}</S.Title>
      <S.SummaryCard>
        {ContentList.map((content) => (
          <>
            <S.Title>{content.title}</S.Title>
            <S.Content>{content.text}</S.Content>
          </>
        ))}
      </S.SummaryCard>
      <S.Title>{"인사이트 도출"}</S.Title>
      <S.SummaryCard>
        {InsightList.map((content) => (
          <>
            <S.Title>{content.title}</S.Title>
            <S.Content>{content.text}</S.Content>
          </>
        ))}
      </S.SummaryCard>
      <S.Title>{"녹취 내용확인"}</S.Title>
      <S.SummaryCard>
        {RecordList.map((record) => (
          <>
            <S.Title style={{ color: "#8e94a1" }}>{record.name}</S.Title>
            <S.Content style={{ color: "#333335" }}>{record.content}</S.Content>
          </>
        ))}
      </S.SummaryCard>
    </S.CustomModal>
  );
}

function ContentSummary() {
  const [isOpen, setIsOpen] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const navigate = useNavigate();
  const success = () => {
    messageApi.open({
      type: "success",
      content: "링크 복사 완료",
    });
  };

  return (
    <S.Wrap>
      <Header />
      <S.InterviewHeader>
        <S.Title>{"Interviewer"}</S.Title>
        {/*<S.CheckButton>{"개요 확인하기"}</S.CheckButton>*/}
        <S.AddButton>{"+ 새 인터뷰어 추가"}</S.AddButton>
      </S.InterviewHeader>
      <S.InterviewerCardBlock>
        <S.InterviewerCard
          onClick={() => {
            setIsOpen(true);
          }}
        >
          <span>{"인터뷰어 1"}</span>
          <span style={{ color: "#8E94A1" }}>{"Done"}</span>
        </S.InterviewerCard>
        <S.InterviewerCard>
          <span>{"인터뷰어 2"}</span>
          {contextHolder}
          <S.LinkCopyButton onClick={success}>
            {"참여자 전용 링크 복사"}
          </S.LinkCopyButton>
        </S.InterviewerCard>
      </S.InterviewerCardBlock>
      <S.ButtonBlock style={{ marginRight: "30px" }}>
        <Button
          text={"홈으로 돌아가기"}
          width={"200px"}
          height={"45px"}
          backgroundColor={"#FFFFFF"}
          color={"#333335"}
          onClick={() => navigate("/homepage")}
        />
        <Button
          text={"전체 통계내기"}
          width={"200px"}
          height={"45px"}
          backgroundColor={"#333335"}
          color={"#F1F4F9"}
          onClick={() => navigate("/summary/total-stats")}
        />
      </S.ButtonBlock>
      {isOpen ? (
        <Modal
          open={isOpen}
          close={() => {
            setIsOpen(false);
          }}
        />
      ) : null}
    </S.Wrap>
  );
}

export default ContentSummary;
