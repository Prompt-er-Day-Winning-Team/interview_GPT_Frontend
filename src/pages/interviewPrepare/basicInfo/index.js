import React, { useState } from "react";
import Header from "../../../components/common/Header";
import * as S from "./style";
import { ReactComponent as IdeaIcon } from "../../../asset/icons/status-idea.svg";
import { ReactComponent as ConceptIcon } from "../../../asset/icons/status-concept.svg";
import { ReactComponent as PrototypeIcon } from "../../../asset/icons/status-prototype.svg";
import { ReactComponent as ReleaseIcon } from "../../../asset/icons/status-release.svg";
import { TextInput } from "../../../components/common/Input";
import Button from "../../../components/common/Button";
import { useNavigate } from "react-router-dom";
import { convertCreateInterviewUrl } from "../../../utils/apis";
import axios from "axios";

const statusList = [
  [
    <IdeaIcon />,
    "아이디어",
    "초기 단계로 진출하고자 하는 시장과 해당 시장의 소비자를 이해하는 단계입니다.",
  ],
  [
    <ConceptIcon />,
    "컨셉 기획",
    "아이디어를 바탕으로 제품의 컨셉을 기획하는 단계입니다.",
  ],
  [
    <PrototypeIcon />,
    "프로토타입",
    "컨셉을 구체화한 후 만든 프로토타입을 기준으로, 개선이 필요한 사항을 발견합니다.",
  ],
  [
    <ReleaseIcon />,
    "출시",
    "의도한 대로 제품을 사용하고 있는지를 확인하고, 테스트를 위한 리서치를 시작합니다.",
  ],
];

function BasicInfo() {
  const navigate = useNavigate();
  const [selectedStatus, setSelectedStatus] = useState(-1);
  const [productForm, setProductForm] = useState({
    productName: "",
    productDetail: "",
    goal: "",
    targetUser: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  // productForm onChangeHandler
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductForm({
      ...productForm,
      [name]: value,
    });
  };

  const handleNextButton = () => {
    var userId = localStorage.getItem("user_id");
    setIsLoading(true);
    const response = axios
      .post(
        convertCreateInterviewUrl(userId),
        {
          interviewGoal: productForm.goal,
          productDetail: productForm.productDetail,
          productName: productForm.productName,
          status: selectedStatus,
          targetUser: productForm.targetUser,
        },
        {
          headers: {
            accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      )
      .then(function (response) {
        navigate(`/prepare/persona?interview_id=${response.data?.interviewId}`);
      })
      .catch(function (error) {
        alert(error);
      });
  };
  return (
    <S.Wrap>
      <Header />
      {isLoading ? (
        <S.InterviewQuestionBlock
          style={{ margin: "0px", alignItems: "center" }}
        >
          <S.SpinStyle size="large" />
          <S.LoadingText>
            결과 생성에는 최대 1분 정도 소요될 수 있습니다.
          </S.LoadingText>
        </S.InterviewQuestionBlock>
      ) : (
        <S.InterviewQuestionBlock>
          <S.Title>{"제품 개발 단계를 선택해주세요!"}</S.Title>
          <S.CardContainer>
            {statusList.map((status, idx) => (
              <S.Card
                selected={selectedStatus === idx + 1}
                onClick={() => setSelectedStatus(idx + 1)}
              >
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
            value={productForm.productName}
            onChange={handleInputChange}
          />
          <S.TextCount>{`${productForm.productName.length}/100`}</S.TextCount>
          <S.Title>{"제품 설명(상세하게 설명해주세요!)"}</S.Title>
          <TextInput
            name={"productDetail"}
            type={"text"}
            width={"100%"}
            height={"184px"}
            backgroundColor={"#F1F4F9"}
            value={productForm.productDetail}
            onChange={handleInputChange}
          />
          <S.TextCount>{`${productForm.productDetail.length}/1000`}</S.TextCount>
          <S.Title>{"인터뷰 목표"}</S.Title>
          <TextInput
            name={"goal"}
            type={"text"}
            width={"100%"}
            height={"52px"}
            backgroundColor={"#F1F4F9"}
            value={productForm.goal}
            onChange={handleInputChange}
          />
          <S.TextCount>{`${productForm.goal.length}/100`}</S.TextCount>
          <S.Title>{"타겟 사용자"}</S.Title>
          <TextInput
            name={"targetUser"}
            type={"text"}
            width={"100%"}
            height={"52px"}
            backgroundColor={"#F1F4F9"}
            value={productForm.targetUser}
            onChange={handleInputChange}
          />
          <S.TextCount>{`${productForm.targetUser.length}/100`}</S.TextCount>
          <S.ButtonContainer>
            <Button
              text={"다음으로"}
              width={"192px"}
              height={"44px"}
              backgroundColor={"#333335"}
              color={"#F1F4F9"}
              onClick={handleNextButton}
            />
          </S.ButtonContainer>
        </S.InterviewQuestionBlock>
      )}
    </S.Wrap>
  );
}

export default BasicInfo;
