import React, { useState } from "react";
import Header from "../../../components/common/Header";
import * as S from "./style";
import { ReactComponent as IdeaIcon } from "../../../asset/icons/status-idea.svg"
import { TextInput, QuestionInput } from "../../../components/common/Input";
import Button from "../../../components/common/Button";

const personaInfo = {
  "기본정보" : {
    "이름": "김수진",
    "나이": "32세",
    "성별": "여성",
  },
  "성격 및 취향" : {
    "성격": "액티브한 성격, 상황에 따라 유연하게 대처 가능",
    "취미": "요가, 음악 감상, 주말에는 가족과 함께 나들이"
  },
  "직업 및 배경" : {
    "직업": "마케팅 팀장",
    "학력": "대학교 졸업 (커뮤니케이션 전공)",
    "근무지": "중견 IT 회사",
  },
  "가족 및 개인 상황" : {
    "가족 구성": "기혼, 1명의 아이를 둔 부모",
    "거주": "서울시 강남구 아파트",
  },
  "통화 패턴 및 습관" : {
    "통화 스타일": "업무 관련 통화가 많음, 많은 정보와 의견 교환",
    "핸드폰 사용성": "스마트폰 사용 빈도가 높음, 다양한 앱과 기능에 익숙",
  },
  "SKT 에이닷 사용 배경" : {
    "사용 동기": "업무 통화 요약을 효과적으로 관리하고 싶어서",
    "기대 효과": "통화 내용을 명확하게 이해하고, 빠르게 작업에 반영하는데 도움을 받고 싶음",
  },
}

function Persona() {
  return (
    <S.Wrap>
      <Header />
      <S.InterviewQuestionBlock>
        {Object.keys(personaInfo).map((title) => (
          <>
            {title === "기본정보" ? 
            <>
              <S.Title>{title}</S.Title>
              <S.PersonaDefaultInfoContainer>
                {Object.keys(personaInfo[title]).map((subtitle, idx) => (
                  <QuestionInput
                    name={subtitle}
                    type={"text"}
                    frontText={subtitle}
                    value={personaInfo[title][subtitle]}
                    width={"80%"}
                    height={"52px"}
                    backgroundColor={"#F1F4F9"}
                  />
                ))}
              </S.PersonaDefaultInfoContainer>
            </>
            : 
            <>
              <S.Title>{title}</S.Title>
              {Object.keys(personaInfo[title]).map((subtitle, idx) => (
                <QuestionInput
                  name={subtitle}
                  type={"text"}
                  frontText={subtitle}
                  value={personaInfo[title][subtitle]}
                  width={"100%"}
                  height={"52px"}
                  backgroundColor={"#F1F4F9"}
                />
              ))}
            </>
            }
          </>
        ))}
        <S.ButtonContainer>
          <Button text={"이전으로"} width={"192px"} height={"44px"} backgroundColor={"#FFFFFF"} color={"#333335"} />
          <Button text={"다음으로"} width={"192px"} height={"44px"} backgroundColor={"#333335"} color={"#F1F4F9"} />
        </S.ButtonContainer>
      </S.InterviewQuestionBlock>
    </S.Wrap>
  );
}

export default Persona;
