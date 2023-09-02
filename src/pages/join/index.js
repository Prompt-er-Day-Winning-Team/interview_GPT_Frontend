import React, { useState } from "react";
import Header from "../../components/common/Header";
import * as S from "./style";

function JoinPage() {
  return (
    <S.Wrap>
      <Header />
      <S.JoinBlock>
        <S.Title>{"Welcome to I.GPT"}</S.Title>
        <S.SubTitle>{"I.GPT에서 사용자 인터뷰 서비스를 경험하세요"}</S.SubTitle>
        <S.InputBlock>
          {/*아이디 입력*/}
          <>
            <S.ActionLabel>{"아이디"}</S.ActionLabel>
            <S.CheckButton>{"중복확인"}</S.CheckButton>
          </>
          <S.InputForm type={"text"} />
          <S.BoxDescription>
            {"2~10자의 한글, 영문, 숫자, 특수문자(_) 조합으로 입력해 주세요"}
          </S.BoxDescription>
          {/*비밀번호 입력*/}
          <S.ActionLabel>{"비밀번호"}</S.ActionLabel>
          <S.InputForm type={"password"} />
          <S.BoxDescription>
            {"10~15자의 영어 대소문자, 숫자, 특수문자 조합으로 입력해 주세요"}
          </S.BoxDescription>
          {/*비밀번호 확인*/}
          <S.ActionLabel>{"비밀번호 확인"}</S.ActionLabel>
          <S.InputForm type={"password"} />
          <S.JoinButton>{"회원가입"}</S.JoinButton>
        </S.InputBlock>
      </S.JoinBlock>
    </S.Wrap>
  );
}

export default JoinPage;
