import React, { useState } from "react";
import * as S from "./style";
import { convertCreateInterviewContentsUrl } from "../../utils/apis";
import axios from "axios";
import { useSpeechSynthesis } from "react-speech-kit";
import { useParams } from "react-router";

function InterviewHelper() {
  const [isStart, setIsStart] = useState(true);
  const [isRecord, setIsRecord] = useState(true);
  const [isFinished, setIsFinished] = useState(false);
  const [textToSpeak, setTextToSpeak] = useState("");
  const { speak } = useSpeechSynthesis();
  const { user_id, interview_id, interview_result_id } = useParams();

  const [mediaRecorder, setMediaRecorder] = useState(null);

  const startRecording = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const recorder = new MediaRecorder(stream);

    recorder.ondataavailable = (e) => {
      if (e.data.size > 0) {
        getQuestion(e.data);
      }
    };
    setMediaRecorder(recorder);
    recorder.start();
  };

  const stopRecording = () => {
    if (mediaRecorder) {
      mediaRecorder.stop();
    }
  };

  const readingQuestion = (text) => speak({ text });

  const getQuestion = (audio) => {
    const fd = new FormData();
    fd.append("answer_audio_file", audio);

    const response = axios
      .post(
        convertCreateInterviewContentsUrl(
          user_id,
          interview_id,
          interview_result_id
        ),
        fd,
        {
          headers: {
            accept: "application/json",
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then(function (response) {
        if (response.data?.isFinished) {
          setIsFinished(true);
          setTextToSpeak("인터뷰가 종료되었습니다. 참여해주셔서 감사합니다");
          readingQuestion("인터뷰가 종료되었습니다. 참여해주셔서 감사합니다");
        } else {
          setTextToSpeak(response.data?.interviewQuestion);
          readingQuestion(response.data?.interviewQuestion);
        }
      })
      .catch(function (error) {});
  };

  const handleButtonClick = (type) => {
    switch (type) {
      case "start":
        getQuestion("");
        setIsStart(false);
        break;
      case "record":
        setIsRecord(!isRecord);
        startRecording();
        break;
      case "stop":
        setIsRecord(!isRecord);
        stopRecording();
        break;
      default:
    }
  };

  return (
    <S.Wrap>
      <S.Title>{textToSpeak}</S.Title>

      <img
        src={process.env.PUBLIC_URL + "/images/Record/logo.gif"}
        alt="gif"
        style={{ width: "350px", height: "350px" }}
      />
      {isStart ? (
        <img
          src={process.env.PUBLIC_URL + "/images/Record/startButton.svg"}
          alt="start"
          style={{
            width: "150px",
            height: "50px",
            cursor: "pointer",
            display: isFinished ? "none" : "block",
          }}
          onClick={() => handleButtonClick("start")}
        />
      ) : isRecord ? (
        <img
          src={process.env.PUBLIC_URL + "/images/Record/recordButton.svg"}
          alt="record"
          style={{
            width: "150px",
            height: "50px",
            cursor: "pointer",
            display: isFinished ? "none" : "block",
          }}
          onClick={() => handleButtonClick("record")}
        />
      ) : (
        <img
          src={process.env.PUBLIC_URL + "/images/Record/stopButton.svg"}
          alt="stop"
          style={{
            width: "150px",
            height: "50px",
            cursor: "pointer",
            display: isFinished ? "none" : "block",
          }}
          onClick={() => handleButtonClick("stop")}
        />
      )}
    </S.Wrap>
  );
}
export default InterviewHelper;
