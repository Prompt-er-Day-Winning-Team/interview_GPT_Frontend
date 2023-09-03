import React, { useState } from "react";
import Header from "../../components/common/Header";
import Input from "../../components/login/Input";
import { useNavigate } from "react-router";
import * as S from "./style";

function LoginPage() {
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  // loginForm onChangeHandler
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginForm({
      ...loginForm,
      [name]: value,
    });
  };

  return (
    <S.Wrap>
      <Header />
      <S.LoginBlock>
        <S.Title>{"Welcome to I.GPT"}</S.Title>
        <S.SubTitle>{"I.GPT에서 사용자 인터뷰 서비스를 경험하세요"}</S.SubTitle>
        <S.InputBlock>
          <Input
            name={"email"}
            type={"email"}
            title={"아이디"}
            onChange={handleInputChange}
            value={loginForm.email}
          />
          <Input
            name={"password"}
            type={"password"}
            title={"패스워드"}
            onChange={handleInputChange}
            value={loginForm.password}
          />
          <S.LoginButton onClick={() => navigate("/homepage")}>
            {"로그인"}
          </S.LoginButton>
          <S.AccountActionsBlock>
            <span>{"이메일 찾기"}</span>
            <span> | </span>
            <span>{"비밀번호 찾기"}</span>
            <span> | </span>
            <span onClick={() => navigate("/join")}>{"회원가입"}</span>
          </S.AccountActionsBlock>
        </S.InputBlock>
      </S.LoginBlock>
    </S.Wrap>
  );
}

export default LoginPage;
