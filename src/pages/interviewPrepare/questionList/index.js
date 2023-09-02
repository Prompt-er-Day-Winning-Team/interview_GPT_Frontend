import React, { useState } from "react";
import Header from "../../../components/common/Header";
import * as S from "./style";
import { ReactComponent as IdeaIcon } from "../../../asset/icons/status-idea.svg"
import TextInput from "../../../components/common/Input";
import Button from "../../../components/common/Button";

const status = [<IdeaIcon/>, "아이디어", "초기 단계로 진출하고자 하는 시장과 해당 시장의 소비자를 이해하는 단계입니다."]

function QuestionList() {
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
            />
            <S.Title>{"인터뷰 목표"}</S.Title>
            <TextInput
              name={"productName"}
              type={"text"}
              width={"100%"}
              height={"52px"}
              backgroundColor={"#F1F4F9"}
            />
          </S.TitleTextContainer>
        </S.TitleContainer>
        <S.Title>{"타겟 사용자"}</S.Title>
        <TextInput
          name={"productName"}
          type={"text"}
          width={"100%"}
          height={"52px"}
          backgroundColor={"#F1F4F9"}
        />
        <S.TextCount>{"21/100"}</S.TextCount>
        <S.ButtonContainer>
          <Button text={"다음으로"} width={"192px"} height={"44px"} backgroundColor={"#333335"} color={"#F1F4F9"} />
        </S.ButtonContainer>
      </S.InterviewQuestionBlock>
    </S.Wrap>
  );
}

export default QuestionList;
