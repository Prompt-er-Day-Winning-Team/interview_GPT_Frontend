import React, { useEffect, useState } from "react";
import Header from "../../../components/common/Header";
import * as S from "./style";
import WordCloud from "../../../components/wordCloud";
import { useLocation } from "react-router";
import axios from "axios";
import { convertCreateInterviewStatisticsURL } from "../../../utils/apis";

function TotalStats() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const interviewId = params.get("interview_id");
  const [interviewSummary, setInterviewSummary] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    var userId = localStorage.getItem("user_id");

    const retryApiCall = () => {
      axios
        .post(convertCreateInterviewStatisticsURL(userId, interviewId), {
          headers: {
            accept: "application/json",
            "Content-Type": "application/json",
          },
        })
        .then(function (response) {
          if (
            response.data?.totalInterviewInsight === "Waiting" ||
            response.data?.totalInterviewKeyword === "Waiting" ||
            response.data?.totalInterviewSummary === "Waiting"
          ) {
            setTimeout(() => {
              retryApiCall();
            }, 5000);
          } else {
            setInterviewSummary(response.data);
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
        <S.InterviewBlock style={{ margin: "0px", alignItems: "center" }}>
          <S.SpinStyle size="large" />
          <S.LoadingText>
            결과 생성에는 최대 1분 정도 소요될 수 있습니다.
          </S.LoadingText>
        </S.InterviewBlock>
      ) : (
        <S.InterviewBlock>
          <S.Title>{"인터뷰 결론 및 요약"}</S.Title>
          <S.InterviewCardBlock>
            {interviewSummary &&
              interviewSummary.totalInterviewSummary.map((sum, index) => (
                <S.InterviewCard>
                  <S.CardNum type={"sum"}>0{index + 1}</S.CardNum>
                  <S.CardContent>
                    <S.Title>{sum.title}</S.Title>
                    <S.CardText>{sum.text}</S.CardText>
                  </S.CardContent>
                </S.InterviewCard>
              ))}
          </S.InterviewCardBlock>
          <S.Title>{"인사이트 도출"}</S.Title>
          <S.InterviewCardBlock>
            {interviewSummary &&
              interviewSummary.totalInterviewInsight.map((insight, index) => (
                <S.InterviewCard>
                  <S.CardNum type={"insight"}>0{index + 1}</S.CardNum>
                  <S.CardContent>
                    <S.Title>{insight.title}</S.Title>
                    <S.CardText>{insight.text}</S.CardText>
                  </S.CardContent>
                </S.InterviewCard>
              ))}
          </S.InterviewCardBlock>
          <S.Title>{"워드 클라우드"}</S.Title>
          <S.WordCloudBlock>
            <WordCloud words={interviewSummary.totalInterviewKeyword} />
          </S.WordCloudBlock>
        </S.InterviewBlock>
      )}
    </S.Wrap>
  );
}

export default TotalStats;
