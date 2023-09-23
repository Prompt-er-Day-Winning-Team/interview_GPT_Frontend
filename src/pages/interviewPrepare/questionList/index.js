import React, { useState, useEffect } from "react";
import Header from "../../../components/common/Header";
import * as S from "./style";
import { ReactComponent as IdeaIcon } from "../../../asset/icons/status-idea.svg";
import { TextInput, QuestionInput } from "../../../components/common/Input";
import Button from "../../../components/common/Button";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { convertCreateQuestionListUrl } from "../../../utils/apis";

const status = [
  <IdeaIcon />,
  "아이디어",
  "초기 단계로 진출하고자 하는 시장과 해당 시장의 소비자를 이해하는 단계입니다.",
];

function QuestionList() {
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const interviewId = params.get("interview_id");
  const [questionList, setQuestionList] = useState();
  const [productInfo, setProductInfo] = useState({
    productName: "",
    goal: "",
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    var userId = localStorage.getItem("user_id");

    const retryApiCall = () => {
      axios
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
          if (response.data?.questionList === "Waiting") {
            setTimeout(() => {
              retryApiCall();
            }, 5000);
          } else {
            setQuestionList(response.data.questionList);
            setProductInfo({
              ...productInfo,
              productName: response.data.productName,
              goal: response.data.interviewGoal,
            });
            setIsLoading(false);
          }
        })
        .catch(function (error) {});
    };
    retryApiCall();
  }, []);

  return (
    <S.Wrap>
      <Header />
      {isLoading ? (
        <S.InterviewQuestionBlock
          style={{ margin: "0px", alignItems: "center" }}
        >
          <S.SpinStyle size="large" />
          <S.LoadingText>
            결과 생성에는 최대 1분 정도 소요될 수 있습니다.
          </S.LoadingText>
        </S.InterviewQuestionBlock>
      ) : (
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
                value={productInfo.productName}
              />
              <S.Title>{"인터뷰 목표"}</S.Title>
              <TextInput
                name={"productName"}
                type={"text"}
                width={"100%"}
                height={"52px"}
                backgroundColor={"#F1F4F9"}
                value={productInfo.goal}
              />
            </S.TitleTextContainer>
          </S.TitleContainer>
          {questionList &&
            Object.keys(questionList).map((topic) => (
              <>
                <S.Title>{topic}</S.Title>
                {questionList[topic].map((questionSet, idx) => (
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
              onClick={() =>
                navigate(`/prepare/persona?interview_id=${interviewId}`)
              }
            />
            <Button
              text={"다음으로"}
              width={"192px"}
              height={"44px"}
              backgroundColor={"#333335"}
              color={"#F1F4F9"}
              onClick={() =>
                navigate(
                  `/prepare/virtual-interview?interview_id=${interviewId}`
                )
              }
            />
          </S.ButtonContainer>
        </S.InterviewQuestionBlock>
      )}
    </S.Wrap>
  );
}

export default QuestionList;
