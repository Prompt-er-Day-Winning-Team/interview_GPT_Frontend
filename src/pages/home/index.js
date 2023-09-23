import React, { useEffect, useState } from "react";
import Header from "../../components/common/Header";
import * as S from "./style";
import { useNavigate } from "react-router";
import { Empty } from "antd";
import { convertGetInterviewProcessUrl } from "../../utils/apis";
import axios from "axios";

function HomePage() {
  const [progressData, setProgressData] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    var userId = localStorage.getItem("user_id");

    const response = axios
      .get(convertGetInterviewProcessUrl(userId), {
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
        },
      })
      .then(function (response) {
        setProgressData(response.data);
      })
      .catch(function (error) {});
  }, []);

  const clickInterviewCard = (step, interview_id) => {
    switch (step) {
      case 1:
        navigate(`/prepare/persona?interview_id=${interview_id}`);
        break;
      case 2:
        navigate(`/prepare/question-list?interview_id=${interview_id}`);
        break;
      case 3:
        navigate(`/prepare/virtual-interview?interview_id=${interview_id}`);
        break;
      case 4:
        navigate(`/summary/content-summary?interview_id=${interview_id}`);
        break;
      default:
    }
  };
  return (
    <S.Wrap>
      <Header />
      <S.InterviewQuestionBlock>
        <S.Title>{"Interview"}</S.Title>
        <S.InterviewCardBlock>
          <S.InterviewCard onClick={() => navigate("/prepare/basic-info")}>
            <S.PlusButton>{"+"}</S.PlusButton>
            <S.Title>{"New Interview"}</S.Title>
            <S.CardText>{"새로운 인터뷰를 추가하세요!"}</S.CardText>
            <S.ProgressBlock></S.ProgressBlock>
          </S.InterviewCard>

          {progressData &&
            progressData.map((interview) => (
              <S.InterviewCard
                onClick={() =>
                  clickInterviewCard(interview.step, interview.interviewId)
                }
              >
                <S.Title style={{ marginTop: "125px" }}>
                  {interview.interviewGoal}
                </S.Title>
                <S.CardText>{`남은 질문 작성하기 ${interview.step}/4`}</S.CardText>
                <S.ProgressBlock>
                  <S.ProgressBar>
                    <S.Progress style={{ width: `${interview.step * 50}px` }} />
                  </S.ProgressBar>
                </S.ProgressBlock>
              </S.InterviewCard>
            ))}
        </S.InterviewCardBlock>
      </S.InterviewQuestionBlock>

      <S.FinishedInterviewBlock>
        <S.Title>{"finished interview"}</S.Title>
        <S.FinishedCardBlock>
          <S.FinishedCard>
            <Empty
              image={Empty.PRESENTED_IMAGE_SIMPLE}
              description="종료된 인터뷰가 없습니다."
            />
          </S.FinishedCard>
          {/*
          <S.FinishedCard>
            <S.InterviewIcon
              src={process.env.PUBLIC_URL + "/images/Home/interview.svg"}
            />
            <S.Title style={{ fontSize: "20px" }}>{card.title}</S.Title>
            <S.CardText style={{ fontSize: "17px", marginTop: "90px" }}>
              {"완료된 인터뷰가 없습니다"}
            </S.CardText>
            <S.DoneButton>{"Done"}</S.DoneButton>
          </S.FinishedCard>
*/}
        </S.FinishedCardBlock>
      </S.FinishedInterviewBlock>
    </S.Wrap>
  );
}

export default HomePage;
