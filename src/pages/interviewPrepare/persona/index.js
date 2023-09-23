import React, { useState, useEffect } from "react";
import Header from "../../../components/common/Header";
import * as S from "./style";
import { TextInput, QuestionInput } from "../../../components/common/Input";
import Button from "../../../components/common/Button";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { convertCreatePersonaUrl } from "../../../utils/apis";

function Persona() {
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const interviewId = params.get("interview_id");
  const [personaData, setPersonaData] = useState();

  useEffect(() => {
    var userId = localStorage.getItem("user_id");

    const retryApiCall = () => {
      axios
        .post(
          convertCreatePersonaUrl(userId, interviewId),
          {},
          {
            headers: {
              accept: "application/json",
              "Content-Type": "application/json",
            },
          }
        )
        .then(function (response) {
          if (response.data?.persona === "Waiting") {
            setTimeout(() => {
              retryApiCall();
            }, 2000);
          } else {
            setPersonaData(response.data.persona);
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
        {personaData &&
          Object.keys(personaData).map((title) => (
            <>
              {title === "기본정보" ? (
                <>
                  <S.Title>{title}</S.Title>
                  <S.PersonaDefaultInfoContainer>
                    {Object.keys(personaData[title]).map((subtitle, idx) => (
                      <QuestionInput
                        name={subtitle}
                        type={"text"}
                        frontText={subtitle}
                        value={personaData[title][subtitle]}
                        width={"80%"}
                        height={"52px"}
                        backgroundColor={"#F1F4F9"}
                      />
                    ))}
                  </S.PersonaDefaultInfoContainer>
                </>
              ) : (
                <>
                  <S.Title>{title}</S.Title>
                  {Object.keys(personaData[title]).map((subtitle, idx) => (
                    <QuestionInput
                      name={subtitle}
                      type={"text"}
                      frontText={subtitle}
                      value={personaData[title][subtitle]}
                      width={"100%"}
                      height={"52px"}
                      backgroundColor={"#F1F4F9"}
                    />
                  ))}
                </>
              )}
            </>
          ))}
        <S.ButtonContainer>
          <Button
            text={"이전으로"}
            width={"192px"}
            height={"44px"}
            backgroundColor={"#FFFFFF"}
            color={"#333335"}
            onClick={() => navigate("/prepare/basic-info")}
          />
          <Button
            text={"다음으로"}
            width={"192px"}
            height={"44px"}
            backgroundColor={"#333335"}
            color={"#F1F4F9"}
            onClick={() =>
              navigate(`/prepare/question-list?interview_id=${interviewId}`)
            }
          />
        </S.ButtonContainer>
      </S.InterviewQuestionBlock>
    </S.Wrap>
  );
}

export default Persona;
