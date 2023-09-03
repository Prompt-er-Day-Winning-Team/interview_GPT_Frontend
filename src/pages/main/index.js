import React from "react";
import * as S from "./style";

function Main() {
  return (
    <S.Wrap>
      {/*
      <S.HeaderBlock>
        <S.Title>
          {
            "더 나은 제품, 서비스를 만들기 위해 \n 사용자 인터뷰를 돕는 AI 리서쳐\nI.GPT"
          }
        </S.Title>
        <S.ServiceButton>{"서비스 바로가기"}</S.ServiceButton>
        <S.LogoBlock>
          <S.Logo
            src={process.env.PUBLIC_URL + "/images/Main/logo.svg"}
            style={{ width: "300px", height: "280px" }}
          />
          <S.Logo
            src={process.env.PUBLIC_URL + "/images/Main/title.svg"}
            style={{ width: "940px", height: "280px", overflowY: "hidden" }}
          />
        </S.LogoBlock>
      </S.HeaderBlock>
      <S.ContentBlock>
        <S.LogoTitle src={process.env.PUBLIC_URL + "/images/Header/logo.svg"} />
        <S.Text>
          {
            "I.GPT에서는 사용자 리서치의 전 과정을 인공지능을 통해 \n자동화하여 기존 대비 10분의 1의 리소스와 인력으로 \n사용자 리서치가 가능한 솔루션을 제공합니다."
          }
        </S.Text>
        <S.InfoCardBlock>
          <S.InfoCard>
            <S.Icon
              src={process.env.PUBLIC_URL + "/images/Main/document.svg"}
            />
          </S.InfoCard>
          <S.InfoCard></S.InfoCard>
          <S.InfoCard></S.InfoCard>
          <S.InfoCard></S.InfoCard>
        </S.InfoCardBlock>
      </S.ContentBlock>
        */}
      <S.Image src={process.env.PUBLIC_URL + "/images/Main/1.svg"} />
      <S.Image src={process.env.PUBLIC_URL + "/images/Main/2.svg"} />
      <S.Image src={process.env.PUBLIC_URL + "/images/Main/3.svg"} />
      <S.Image src={process.env.PUBLIC_URL + "/images/Main/4.svg"} />
      <S.Image src={process.env.PUBLIC_URL + "/images/Main/5.svg"} />
      <S.Image src={process.env.PUBLIC_URL + "/images/Main/6.svg"} />
      <S.Image src={process.env.PUBLIC_URL + "/images/Main/7.svg"} />
    </S.Wrap>
  );
}

export default Main;
