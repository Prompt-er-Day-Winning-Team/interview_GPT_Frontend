import React, { useState, useEffect } from "react";
import Header from "../../../components/common/Header";
import * as S from "./style";
import Button from "../../../components/common/Button";
import { message } from "antd";
import { useNavigate, useLocation } from "react-router";
import axios from "axios";
import {
  convertGetInterviewResultUrl,
  convertCreateInterviewResultUrl,
  convertReadInterviewResultUrl,
} from "../../../utils/apis";

function Modal(props) {
  const { open, close, interviewId, resultId } = props;
  const [modalData, setModalData] = useState();

  useEffect(() => {
    var userId = localStorage.getItem("user_id");

    const response = axios
      .get(convertReadInterviewResultUrl(userId, interviewId, resultId), {
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
        },
      })
      .then(function (response) {
        console.log(response.data);
        setModalData(response.data);
      })
      .catch(function (error) {});
  }, []);

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
        {modalData &&
          modalData.interviewSummary.map((content) => (
            <>
              <S.Title>{content.title}</S.Title>
              <S.Content>{content.text}</S.Content>
            </>
          ))}
      </S.SummaryCard>

      <S.Title>{"녹취 내용확인"}</S.Title>
      <S.SummaryCard>
        {modalData &&
          modalData.interviewContents.map((record) => (
            <>
              <div style={{ display: "flex", marginBottom: "10px" }}>
                <S.PersonType>진행자</S.PersonType>
                <S.SummaryContent>{record.question}</S.SummaryContent>
              </div>
              <div style={{ display: "flex", marginBottom: "10px" }}>
                <S.PersonType>참가자</S.PersonType>
                <S.SummaryContent>{record.answer}</S.SummaryContent>
              </div>
            </>
          ))}
      </S.SummaryCard>
    </S.CustomModal>
  );
}

function ContentSummary() {
  const [isOpen, setIsOpen] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const [interviewResult, setInterviewResult] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [resultId, setResultId] = useState();

  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const interviewId = params.get("interview_id");

  const handleCopyButton = (link, resultId) => {
    localStorage.setItem("result_id", resultId);

    const textarea = document.createElement("textarea");
    textarea.value = link;

    document.body.appendChild(textarea);

    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);

    messageApi.open({
      type: "success",
      content: "링크 복사 완료",
    });
  };

  const addNewInterviewer = () => {
    var userId = localStorage.getItem("user_id");
    setIsLoading(true);
    const response = axios
      .post(convertCreateInterviewResultUrl(userId, interviewId), {
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
        },
      })
      .then(function (response) {
        setInterviewResult([...interviewResult, response.data]);
        setIsLoading(false);
      })
      .catch(function (error) {});
  };

  useEffect(() => {
    var userId = localStorage.getItem("user_id");

    const response = axios
      .get(convertGetInterviewResultUrl(userId, interviewId), {
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
        },
      })
      .then(function (response) {
        setInterviewResult(response.data);
        setIsLoading(false);
      })
      .catch(function (error) {});
  }, [interviewResult.length]);

  return (
    <S.Wrap>
      <Header />
      <S.InterviewHeader>
        <S.Title>{"Interviewer"}</S.Title>
        {/*<S.CheckButton>{"개요 확인하기"}</S.CheckButton>*/}
        <S.AddButton onClick={addNewInterviewer}>
          {"+ 새 인터뷰어 추가"}
        </S.AddButton>
      </S.InterviewHeader>

      {isLoading ? (
        <S.InterviewerCardBlock style={{ alignItems: "center" }}>
          <S.SpinStyle size="large" />
          <S.LoadingText>
            입력하신 내용을 바탕으로 인터뷰를 생성중입니다. <br />
            잠시만 기다려주세요.
          </S.LoadingText>
        </S.InterviewerCardBlock>
      ) : (
        <S.InterviewerCardBlock style={{ alignItems: "center" }}>
          {interviewResult &&
            interviewResult.map((interview) =>
              interview.interview_url === "Done" ? (
                <S.InterviewerCard
                  key={interview.interview_result_id}
                  onClick={() => {
                    setIsOpen(true);
                    setResultId(interview.interview_result_id);
                  }}
                >
                  <span>{"인터뷰어 1"}</span>
                  <span style={{ color: "#8E94A1" }}>{"Done"}</span>
                </S.InterviewerCard>
              ) : (
                <S.InterviewerCard>
                  <span>{interview.name}</span>
                  {contextHolder}
                  <S.LinkCopyButton
                    onClick={() =>
                      handleCopyButton(
                        interview.interview_url,
                        interview.interview_result_id
                      )
                    }
                  >
                    {"참여자 전용 링크 복사"}
                  </S.LinkCopyButton>
                </S.InterviewerCard>
              )
            )}
        </S.InterviewerCardBlock>
      )}

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
          onClick={() =>
            navigate(`/summary/total-stats?interview_id=${interviewId}`)
          }
        />
      </S.ButtonBlock>

      {isOpen && (
        <Modal
          open={isOpen}
          close={() => {
            setIsOpen(false);
          }}
          interviewId={interviewId}
          resultId={resultId}
        />
      )}
    </S.Wrap>
  );
}

export default ContentSummary;
