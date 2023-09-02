import React from "react";
import Header from "../../../components/common/Header";
import * as S from "./style";
import Button from "../../../components/common/Button";

function ContentSummary() {
  return (
    <S.Wrap>
      <Header />
      <S.InterviewHeader>
        <S.Title>{"Interviewer"}</S.Title>
        <S.CheckButton>{"개요 확인하기"}</S.CheckButton>
        <S.AddButton>{"+ 새 인터뷰어 추가"}</S.AddButton>
      </S.InterviewHeader>
      <S.InterviewerCardBlock>
        <S.InterviewerCard>
          <span>{"인터뷰어 1"}</span>
          <span style={{ color: "#8E94A1" }}>{"Done"}</span>
        </S.InterviewerCard>
        <S.InterviewerCard>
          <span>{"인터뷰어 2"}</span>
          <S.LinkCopyButton>{"참여자 전용 링크 복사"}</S.LinkCopyButton>
        </S.InterviewerCard>
      </S.InterviewerCardBlock>
      <S.ButtonBlock style={{ marginRight: "30px" }}>
        <Button
          text={"홈으로 돌아가기"}
          width={"200px"}
          height={"45px"}
          backgroundColor={"#FFFFFF"}
          color={"#333335"}
        />
        <Button
          text={"전체 통계내기"}
          width={"200px"}
          height={"45px"}
          backgroundColor={"#333335"}
          color={"#F1F4F9"}
        />
      </S.ButtonBlock>
    </S.Wrap>
  );
}

export default ContentSummary;
