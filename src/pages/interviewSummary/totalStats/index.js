import React from "react";
import Header from "../../../components/common/Header";
import * as S from "./style";

const InterviewSumList = [
  {
    num: "01",
    title: "서비스 발견 및 활용",
    text: "김수진 씨는 회사 동료를 통해 SKT 에이닷의 통화요약 기능을 알 게 되었으며, 주로 업무 관련 중요한 통화나 클라이언트와의 의견 교환 시에 이 기능을 활용한다.",
  },
  {
    num: "02",
    title: "서비스의 편리성",
    text: "클라이언트와 중요한 통화 후, 요약된 내용을 텍스트로 확인하며 빠르 게 작업에 반영할 수 있었다. 이로 인해 통화의 핵심 내용을 빠르게 복습하고 기록하는 데 큰 도움을 받았다.",
  },
  {
    num: "03",
    title: "서비스의 문제점",
    text: "가끔 음성 인식의 오류로 인해 변환된 텍스트가 정확하지 않아 원하는 정보를 찾는 데 어려움을 겪었다. 특히 목소리의 높낮이나 강세에 따라 잘못 인식되는 경우가 있었다.",
  },
  {
    num: "04",
    title: "서비스 개선 제안",
    text: "음성 인식의 정확도를 높이고, 녹음 실패나 변환 오류 발생 시 사용자 에게 알림을 주는 기능이 추가되면 좋겠다.",
  },
];

const InsightList = [
  {
    num: "01",
    title: "피어 추천의 중요성",
    text: "김수진 씨처럼 회사 동료나 주변인의 사용을 통해 서비스를 알게 되는 경우가 많을 것이므로, 이러한 피어 추천을 촉진하는 마케팅 전략이 필요하다.",
  },
  {
    num: "02",
    title: "업무 환경에서의 활용도",
    text: "중요한 업무 통화나 클라이언트와의 미팅에서 통화요약 기능 의 활용도가 높으므로, 이러한 상황을 대상으로 한 특별한 기능 제안이나 판촉 활동을 생각해 볼 수 있다.",
  },
  {
    num: "03",
    title: "기술의 정확도 및 피드백 기능",
    text: "사용자들은 통화요약 기능의 정확도를 매우 중요하게 여 긴다. 따라서 기술 개발에 집중할 필요가 있으며, 녹음 실패나 변환 오류 시 사용자에게 즉시 알림을 주는 기능을 개발하는 것이 중요하다.",
  },
];

function TotalStats() {
  return (
    <S.Wrap>
      <Header />
      <S.InterviewBlock>
        <S.Title>{"인터뷰 결론 및 요약"}</S.Title>
        <S.InterviewCardBlock>
          {InterviewSumList.map((sum) => (
            <S.InterviewCard>
              <S.CardNum type={"sum"}>{sum.num}</S.CardNum>
              <S.CardContent>
                <S.Title>{sum.title}</S.Title>
                <S.CardText>{sum.text}</S.CardText>
              </S.CardContent>
            </S.InterviewCard>
          ))}
        </S.InterviewCardBlock>

        <S.Title>{"인사이트 도출"}</S.Title>
        <S.InterviewCardBlock>
          {InsightList.map((insight) => (
            <S.InterviewCard>
              <S.CardNum type={"insight"}>{insight.num}</S.CardNum>
              <S.CardContent>
                <S.Title>{insight.title}</S.Title>
                <S.CardText>{insight.text}</S.CardText>
              </S.CardContent>
            </S.InterviewCard>
          ))}
        </S.InterviewCardBlock>
      </S.InterviewBlock>
    </S.Wrap>
  );
}

export default TotalStats;