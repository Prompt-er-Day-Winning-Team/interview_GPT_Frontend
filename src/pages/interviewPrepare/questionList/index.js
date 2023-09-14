import React, { useState } from "react";
import Header from "../../../components/common/Header";
import * as S from "./style";
import { ReactComponent as IdeaIcon } from "../../../asset/icons/status-idea.svg";
import { TextInput, QuestionInput } from "../../../components/common/Input";
import Button from "../../../components/common/Button";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { convertCreateQuestionListUrl } from "../../../utils/apis";

const status = [
  <IdeaIcon />,
  "아이디어",
  "초기 단계로 진출하고자 하는 시장과 해당 시장의 소비자를 이해하는 단계입니다.",
];
const questionSetList = {
  "서비스 사용 배경 및 환경에 관한 질문": [
    {
      question: "SKT 에이닷의 통화요약 기능을 처음 알게 된 계기는 무엇인가요?",
      answer: "광고, 친구 추천, SKT 공식 홈페이지, 앱스토어",
    },
    {
      question: "어떤 상황에서 주로 통화요약 기능을 사용하시나요?",
      answer: "업무 통화, 중요한 전화, 복잡한 내용의 통화",
    },
  ],
  "서비스 편리성 및 기능성에 관한 질문": [
    {
      question: "SKT 에이닷의 통화요약 기능을 처음 알게 된 계기는 무엇인가요?",
      answer: "광고, 친구 추천, SKT 공식 홈페이지, 앱스토어",
    },
    {
      question: "어떤 상황에서 주로 통화요약 기능을 사용하시나요?",
      answer: "업무 통화, 중요한 전화, 복잡한 내용의 통화",
    },
  ],
};

function QuestionList() {
  const navigate = useNavigate();

  const handleNextButton = () => {
    var userId = localStorage.getItem("user_id");
    var interviewId = localStorage.getItem("interview_id");

    const response = axios
      .post(
        convertCreateQuestionListUrl(userId, interviewId),
        {},
        {
          headers: {
            accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      )
      .then(function (response) {
        navigate("/prepare/virtual-interview");
      })
      .catch(function (error) {});
  };

  return (
    <S.Wrap>
      <Header />
      <S.InterviewQuestionBlock>
        <S.TitleContainer>
          <S.Card>
            {status[0]}
            <S.CardTitle>{status[1]}</S.CardTitle>
            <S.CardContents>{status[2]}</S.CardContents>
          </S.Card>
          <S.TitleTextContainer>
            <S.Title>{"제품 이름"}</S.Title>
            <TextInput
              name={"productName"}
              type={"text"}
              width={"100%"}
              height={"52px"}
              backgroundColor={"#F1F4F9"}
              value={"I.GPT 인터뷰 질문 생성 기능"}
            />
            <S.Title>{"인터뷰 목표"}</S.Title>
            <TextInput
              name={"productName"}
              type={"text"}
              width={"100%"}
              height={"52px"}
              backgroundColor={"#F1F4F9"}
              value={"I.GPT 인터뷰 질문 생성 기능의 부족한 점 파악"}
            />
          </S.TitleTextContainer>
        </S.TitleContainer>
        {Object.keys(questionSetList).map((topic) => (
          <>
            <S.Title>{topic}</S.Title>
            {questionSetList[topic].map((questionSet, idx) => (
              <S.QuestionSetContainer>
                <QuestionInput
                  name={"question"}
                  type={"text"}
                  frontText={`Q${idx + 1}.`}
                  value={`${questionSet.question}`}
                  width={"100%"}
                  height={"52px"}
                  backgroundColor={"#F1F4F9"}
                />
                <QuestionInput
                  name={"answer"}
                  type={"text"}
                  frontText={`A${idx + 1}.`}
                  value={`${questionSet.answer}`}
                  width={"100%"}
                  height={"52px"}
                  backgroundColor={"#F1F4F9"}
                />
              </S.QuestionSetContainer>
            ))}
          </>
        ))}
        <S.ButtonContainer>
          <Button
            text={"이전으로"}
            width={"192px"}
            height={"44px"}
            backgroundColor={"#FFFFFF"}
            color={"#333335"}
            onClick={() => navigate("/prepare/persona")}
          />
          <Button
            text={"다음으로"}
            width={"192px"}
            height={"44px"}
            backgroundColor={"#333335"}
            color={"#F1F4F9"}
            /*{onClick={handleNextButton}}*/
            onClick={() => navigate("/prepare/virtual-interview")}
          />
        </S.ButtonContainer>
      </S.InterviewQuestionBlock>
    </S.Wrap>
  );
}

export default QuestionList;
