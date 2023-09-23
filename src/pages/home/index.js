import React from "react";
import Header from "../../components/common/Header";
import * as S from "./style";
import { useNavigate } from "react-router";
import { Empty } from "antd";

function HomePage() {
  const navigate = useNavigate();
  return (
    <S.Wrap>
      <Header />
      <S.InterviewQuestionBlock>
        <S.Title>{"Interview"}</S.Title>
        <S.InterviewCardBlock>
          <S.InterviewCard>
            <S.PlusButton onClick={() => navigate("/prepare/basic-info")}>
              {"+"}
            </S.PlusButton>
            <S.Title>{"New Interview"}</S.Title>
            <S.CardText>{"새로운 인터뷰를 추가하세요!"}</S.CardText>
          </S.InterviewCard>

          {/*<S.InterviewCard>
            <S.Title style={{ marginTop: "130px" }}>
              {"SKT 에이닷 통화 요약 기능 방해요소"}
            </S.Title>
            <S.CardText>{"남은 질문 작성하기 3/5"}</S.CardText>
            <S.ProgressBlock>
              <S.ProgressBar>
                <S.Progress style={{ width: "105px" }} />
              </S.ProgressBar>
            </S.ProgressBlock>
          </S.InterviewCard>

          <S.InterviewCard>
            <S.Title style={{ marginTop: "130px" }}>
              {"SKT 에이닷 통화 요약 기능 방해요소"}
            </S.Title>
            <S.CardText>{"인터뷰 진행하기 4/5"}</S.CardText>
            <S.ProgressBlock>
              <S.ProgressBar>
                <S.Progress />
              </S.ProgressBar>
            </S.ProgressBlock>
  </S.InterviewCard>*/}
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
