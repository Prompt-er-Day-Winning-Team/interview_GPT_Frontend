import React, { useState } from "react";
import * as S from "./style";

function InterviewHelper() {
  return (
    <S.Wrap>
      <S.Title>{"에이닷 사용하면서 불편한 점은 어떤게 있으셨나요?"}</S.Title>
      <img
        src={process.env.PUBLIC_URL + "/images/Record/logo.gif"}
        alt="GIF Image"
        style={{ width: "350px", height: "350px" }}
      />
      <img
        src={process.env.PUBLIC_URL + "/images/Record/recordButton.svg"}
        style={{ width: "150px", height: "50px", cursor: "pointer" }}
      />
    </S.Wrap>
  );
}

export default InterviewHelper;
