import React, { useState } from "react";
import Header from "../../../components/common/Header";
import * as S from "./style";
import { ReactComponent as IdeaIcon } from "../../../asset/icons/status-idea.svg"
import { ReactComponent as ConceptIcon } from "../../../asset/icons/status-concept.svg"
import { ReactComponent as PrototypeIcon } from "../../../asset/icons/status-prototype.svg"
import { ReactComponent as ReleaseIcon } from "../../../asset/icons/status-release.svg"
import { TextInput } from "../../../components/common/Input";
import Button from "../../../components/common/Button";

const statusList = [
  [<IdeaIcon/>, "아이디어", "초기 단계로 진출하고자 하는 시장과 해당 시장의 소비자를 이해하는 단계입니다."],
  [<ConceptIcon/>, "컨셉 기획", "아이디어를 바탕으로 제품의 컨셉을 기획하는 단계입니다."],
  [<PrototypeIcon/>, "프로토타입", "컨셉을 구체화한 후 만든 프로토타입을 기준으로, 개선이 필요한 사항을 발견합니다."],
  [<ReleaseIcon/>, "출시", "의도한 대로 제품을 사용하고 있는지를 확인하고, 테스트를 위한 리서치를 시작합니다."]
]

function BasicInfo() {
  return (
    <S.Wrap>
      <Header />
      <S.InterviewQuestionBlock>
        <S.Title>{"제품 개발 단계를 선택해주세요!"}</S.Title>
        <S.CardContainer>
          {statusList.map((status) => (
            <S.Card>
              {status[0]}
              <S.CardTitle>{status[1]}</S.CardTitle>
              <S.CardContents>{status[2]}</S.CardContents>
            </S.Card>
          ))}
        </S.CardContainer>
        <S.Title>{"제품 이름"}</S.Title>
        <TextInput
          name={"productName"}
          type={"text"}
          width={"100%"}
          height={"52px"}
          backgroundColor={"#F1F4F9"}
        />
        <S.TextCount>{"21/100"}</S.TextCount>
        <S.Title>{"제품 설명(상세하게 설명해주세요!)"}</S.Title>
        <TextInput
          name={"productDetail"}
          type={"text"}
          width={"100%"}
          height={"184px"}
          backgroundColor={"#F1F4F9"}
        />
        <S.TextCount>{"21/100"}</S.TextCount>
        <S.Title>{"인터뷰 목표"}</S.Title>
        <TextInput
          name={"productName"}
          type={"text"}
          width={"100%"}
          height={"52px"}
          backgroundColor={"#F1F4F9"}
        />
        <S.TextCount>{"21/100"}</S.TextCount>
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

export default BasicInfo;
