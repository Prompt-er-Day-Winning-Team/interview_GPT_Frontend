import React, { useState } from "react";
import Header from "../../../components/common/Header";
import * as S from "./style";
import { VirtualInterviewInput } from "../../../components/common/Input";
import Button from "../../../components/common/Button";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { convertCreateVirtualInterviewUrl } from "../../../utils/apis";

const virtualInterviewResult = {
  "서비스 사용 배경 및 환경에 관한 질문": {
    진행자: [
      "SKT 에이닷의 통화요약 기능을 처음 알게 된 계기는 무엇인가요?",
      "그 동료는 어떻게 사용하던가요? 특별히 인상 깊었던 점이 있나요?",
      "어떤 상황에서 주로 통화요약 기능을 사용하시나요?",
      "그런 상황에서 통화요약 기능이 업었다면 어떤 불편함을 느꼈을까요?",
    ],
    김수진: [
      "회사 동료가 사용하는 것을 보고 알게 되었어요.",
      "그 동료는 팀 미팅 후의 주요 논의 사항을 바로 텍스트로 확인하더라고요. 그게 너무 편리해 보여서요",
      "업무 관련 중요한 통화나 클라이언트와의 의견 교환 시에 사용해요",
      "아마 중요한 부분을 놓치거나 기억하려고 계속 메모를 작성하느라 힘들었을 것 같아요.",
    ],
  },
  "서비스의 편리성 및 기능성에 관한 질문": {
    진행자: [
      "통화요약 기능 사용 중 가장 편리하게 느꼈던 순간은 언제였나요?",
      "그 순간을 조금 더 자세히 설명해주실 수 있나요?",
    ],
    김수진: [
      "클라이언트와의 중요한 의견 교환 후 바로 그 내용을 텍스트로 확인할 수 있었을 때요.",
      "네, 중요한 프로젝트에 관한 논의가 있었는데, 통화 후 바로 요약된 내용을 보니 빠르게 작업에 반영할 수 있었어요.",
    ],
  },
  "서비스 사용 중 방해요소에 관한 질문": {
    진행자: [
      "통화요약 기능을 사용하면서 불편하게 느낀 점이 있었다면, 구체적으로 어떤 부분이었나요?",
      "그 오류는 어떠한 형태로 나타났나요? 예를 들어 설명해 주실 수 있을까요?",
    ],
    김수진: [
      "가끔 변환된 텍스트에 오류가 있어서 원하는 정보를 찾는데 어려움이 있었어요.",
      "목소리의 높낮이나 강세에 따라 잘못 인식하는 경우가 있었어요. 예를 들면 '제안'을 '제간'이라고 인식하는 등의 문제가 있었습니다.",
    ],
  },
  "서비스의 개선 및 추가 제안에 관한 질문": {
    진행자: [
      "통화요약 기능을 더 자주 사용하게 만들기 위해서는 어떤 부분이 개선되어야 한다고 생각하시나요?",
      "그런 알림 기능이 있다면, 어떤 방식으로 알림을 받고 싶으신가요?",
    ],
    김수진: [
      "음성 인식의 정확도를 높이고, 녹음 실패 시 바로 알림을 받을 수 있게 해주면 좋겠어요.",
      "녹음이 제대로 이루어지지 않았을 때 바로 알림 메시지를 받을 수 있으면 좋겠어요.",
    ],
  },
  "일반적인 피드백 및 마무리 질문": {
    진행자: [
      "SKT 에이닷의 통화요약 기능을 사용하면서 가장 크게 느낀 점은 무엇인가요?",
      "그러한 도움을 받으면서 특히 더 효율적으로 업무를 처리할 수 있었다면, 구체적인 예시를 들어 설명해주실 수 있나요?",
      "김수진 씨, 소중한 의견을 공유해 주셔서 감사합니다. 인터뷰가 끝났습니다.",
    ],
    김수진: [
      "전반적으로 통화 내용을 빠르게 복습하고 기록하는 데 큰 도움이 되었어요.",
      "예를 들면, 클라이언트와의 미팅 후 바로 통화 내용을 기반으로 회의록을 작성하거나, 필요한 자료를 준비할 수 있었어요.",
      "감사합니다. 좋은 서비스가 되길 바라요!",
    ],
  },
};

function VirtualInterview() {
  const navigate = useNavigate();

  const handleNextButton = () => {
    var userId = localStorage.getItem("user_id");
    var interviewId = localStorage.getItem("interview_id");

    const retryApiCall = () => {
      axios
        .post(
          convertCreateVirtualInterviewUrl(userId, interviewId),
          {},
          {
            headers: {
              accept: "application/json",
              "Content-Type": "application/json",
            },
          }
        )
        .then(function (response) {
          if (response.data?.virtualInterview === "Waiting") retryApiCall();
          else navigate("/summary/content-summary");
        })
        .catch(function (error) {});
    };
    retryApiCall();
  };

  return (
    <S.Wrap>
      <Header />
      <S.InterviewQuestionBlock>
        {Object.keys(virtualInterviewResult).map((title) => (
          <>
            <S.Title>{title}</S.Title>
            {virtualInterviewResult[title]["진행자"].map((question, idx) => (
              <>
                <VirtualInterviewInput
                  name={"question"}
                  type={"text"}
                  width={"100%"}
                  height={"52px"}
                  backgroundColor={"#F1F4F9"}
                  value={question}
                  frontText={"진행자"}
                  disabled
                />
                <VirtualInterviewInput
                  name={"answer"}
                  type={"text"}
                  width={"100%"}
                  height={"52px"}
                  backgroundColor={"rgba(150, 164, 203, 0.3)"}
                  value={virtualInterviewResult[title]["김수진"][idx]}
                  frontText={"김수진"}
                  disabled
                />
              </>
            ))}
          </>
        ))}
        <S.ButtonContainer>
          <Button
            text={"질문 수정하기"}
            width={"192px"}
            height={"44px"}
            backgroundColor={"#FFFFFF"}
            color={"#333335"}
            onClick={() => navigate("/prepare/question-list")}
          />
          <Button
            text={"다음으로"}
            width={"192px"}
            height={"44px"}
            backgroundColor={"#333335"}
            color={"#F1F4F9"}
            onClick={handleNextButton}
            /*onClick={() => navigate("/summary/content-summary")}*/
          />
        </S.ButtonContainer>
      </S.InterviewQuestionBlock>
    </S.Wrap>
  );
}

export default VirtualInterview;
