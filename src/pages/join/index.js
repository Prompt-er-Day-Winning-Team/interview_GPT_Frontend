import React, { useState } from "react";
import Header from "../../components/common/Header";
import * as S from "./style";
import axios from "axios";
import { useNavigate } from "react-router";
import { convertRegistUserUrl } from "../../utils/apis";

function JoinPage() {
  const [accountInfo, setAccountInfo] = useState({
    email: "",
    password: "",
    passwordCheck: "",
  });
  const navigate = useNavigate();
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAccountInfo({
      ...accountInfo,
      [name]: value,
    });
  };

  const registerUser = () => {
    const response = axios
      .post(
        convertRegistUserUrl(),
        {
          id: accountInfo.email,
          password: accountInfo.password,
        },
        {
          headers: {
            accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      )
      .then(function (response) {
        navigate("/login");
      })
      .catch(function (error) {});
  };

  function isValidEmail(input) {
    if (!/^.{2,10}$/.test(input)) {
      return false;
    }
    if (!/^[가-힣a-zA-Z0-9_]+$/.test(input)) {
      return false;
    }

    return true;
  }

  function isValidPassword(input) {
    if (!/^[A-Za-z0-9!@#$%^&*()_+{}[\]:;<>,.?~\\/\\-]{10,15}$/.test(input)) {
      return false;
    }
    if (
      !/[A-Z]/.test(input) ||
      !/[a-z]/.test(input) ||
      !/[0-9]/.test(input) ||
      !/[!@#$%^&*()_+{}[\]:;<>,.?~\\/\\-]/.test(input)
    ) {
      return false;
    }
    return true;
  }

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
          <S.InputForm
            type={"email"}
            name={"email"}
            value={accountInfo.email}
            onChange={handleInputChange}
          />
          <S.BoxDescription>
            {"2~10자의 한글, 영문, 숫자, 특수문자(_) 조합으로 입력해 주세요"}
          </S.BoxDescription>
          {/*비밀번호 입력*/}
          <S.ActionLabel>{"비밀번호"}</S.ActionLabel>
          <S.InputForm
            type={"password"}
            name={"password"}
            value={accountInfo.password}
            onChange={handleInputChange}
          />
          <S.BoxDescription>
            {"10~15자의 영어 대소문자, 숫자, 특수문자 조합으로 입력해 주세요"}
          </S.BoxDescription>
          {/*비밀번호 확인*/}
          <S.ActionLabel>{"비밀번호 확인"}</S.ActionLabel>
          <S.InputForm
            type={"password"}
            name={"passwordCheck"}
            value={accountInfo.passwordCheck}
            onChange={handleInputChange}
          />
          <S.JoinButton
            onClick={registerUser}
            isCheck={
              accountInfo.email &&
              accountInfo.password &&
              accountInfo.password === accountInfo.passwordCheck
            }
          >
            {"회원가입"}
          </S.JoinButton>
        </S.InputBlock>
      </S.JoinBlock>
    </S.Wrap>
  );
}

export default JoinPage;
