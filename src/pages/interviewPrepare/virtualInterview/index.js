import React, { useState, useEffect } from "react";
import Header from "../../../components/common/Header";
import * as S from "./style";
import { VirtualInterviewInput } from "../../../components/common/Input";
import Button from "../../../components/common/Button";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { convertCreateVirtualInterviewUrl } from "../../../utils/apis";

function VirtualInterview() {
  const navigate = useNavigate();
  const [virtualInterview, setVirtualInterview] = useState();

  useEffect(() => {
    var userId = localStorage.getItem("user_id");
    var interviewId = localStorage.getItem("interview_id");

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
            }, 2000);
          } else {
            setVirtualInterview(response.data.virtualInterview);
          }
        })
        .catch(function (error) {});
    };
    retryApiCall();
  }, []);

  return (
    <S.Wrap>
      <Header />
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
            onClick={() => navigate("/prepare/question-list")}
          />
          <Button
            text={"다음으로"}
            width={"192px"}
            height={"44px"}
            backgroundColor={"#333335"}
            color={"#F1F4F9"}
            onClick={() => navigate("/summary/content-summary")}
          />
        </S.ButtonContainer>
      </S.InterviewQuestionBlock>
    </S.Wrap>
  );
}

export default VirtualInterview;
