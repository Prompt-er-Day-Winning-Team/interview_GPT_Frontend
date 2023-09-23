import React, { useState, useEffect } from "react";
import Header from "../../../components/common/Header";
import * as S from "./style";
import { VirtualInterviewInput } from "../../../components/common/Input";
import Button from "../../../components/common/Button";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { convertCreateVirtualInterviewUrl } from "../../../utils/apis";

function VirtualInterview() {
  const navigate = useNavigate();
  const [virtualInterview, setVirtualInterview] = useState();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const interviewId = params.get("interview_id");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    var userId = localStorage.getItem("user_id");

    const retryApiCall = () => {
      axios
        .post(
          convertCreateVirtualInterviewUrl(userId, interviewId),
          {},
          {
            headers: {
              accept: "application/json",
              "Content-Type": "application/json",
            },
          }
        )
        .then(function (response) {
          if (response.data?.virtualInterview === "Waiting") {
            setTimeout(() => {
              retryApiCall();
            }, 5000);
          } else {
            console.log(response.data.virtualInterview);
            setVirtualInterview(response.data.virtualInterview);
            setIsLoading(false);
          }
        })
        .catch(function (error) {});
    };
    retryApiCall();
  }, []);

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
          {virtualInterview &&
            Object.keys(virtualInterview).map((title) => (
              <>
                <S.Title>{title}</S.Title>
                {Object.entries(virtualInterview[title]).map(
                  ([key, interview], idx) => (
                    <>
                      <VirtualInterviewInput
                        name={"question"}
                        type={"text"}
                        width={"100%"}
                        height={"52px"}
                        backgroundColor={"#F1F4F9"}
                        value={
                          idx % 2 === 0
                            ? interview.split("진행자 : ")[1]
                            : interview.split("참가자 : ")[1]
                        }
                        frontText={idx % 2 === 0 ? "진행자" : "참가자"}
                        disabled
                      />
                    </>
                  )
                )}
              </>
            ))}
          <S.ButtonContainer>
            <Button
              text={"질문 수정하기"}
              width={"192px"}
              height={"44px"}
              backgroundColor={"#FFFFFF"}
              color={"#333335"}
              onClick={() =>
                navigate(`/prepare/question-list?interview_id=${interviewId}`)
              }
            />
            <Button
              text={"다음으로"}
              width={"192px"}
              height={"44px"}
              backgroundColor={"#333335"}
              color={"#F1F4F9"}
              onClick={() =>
                navigate(`/summary/content-summary?interview_id=${interviewId}`)
              }
            />
          </S.ButtonContainer>
        </S.InterviewQuestionBlock>
      )}
    </S.Wrap>
  );
}

export default VirtualInterview;
