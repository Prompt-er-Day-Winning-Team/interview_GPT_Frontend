import React, { useState, useEffect } from "react";
import * as S from "./style";
import { convertCreateInterviewContentsUrl } from "../../utils/apis";
import axios from "axios";
import { useSpeechSynthesis } from "react-speech-kit";

function InterviewHelper() {
  const [isStart, setIsStart] = useState(true);
  const [isRecord, setIsRecord] = useState(true);
  const [isFinished, setIsFinished] = useState(false);
  const [textToSpeak, setTextToSpeak] = useState("");
  const { speak } = useSpeechSynthesis();

  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [audioChunks, setAudioChunks] = useState([]);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const recorder = new MediaRecorder(stream);

      recorder.ondataavailable = (e) => {
        if (e.data.size > 0) {
          setAudioChunks([e.data]);
        }
      };

      setMediaRecorder(recorder);
      recorder.start();
    } catch (error) {
      console.error("녹음을 시작할 수 없습니다:", error);
    }
  };

  const stopRecording = () => {
    if (mediaRecorder) {
      mediaRecorder.stop();
      const formData = new FormData();
      console.log("audioChunks", audioChunks);
      audioChunks.forEach((chunk, index) => {
        formData.append(
          `audioChunk${index}`,
          chunk,
          `audio_chunk_${index}.webm`
        );
      });

      getQuestion(formData);
    }
  };

  const readingQuestion = (text) => speak({ text });

  const getQuestion = (audio) => {
    /*audio.forEach((value, key) => {
      if (value instanceof Blob) {
        console.log(`Field Name: ${key}`);
        console.log(`Value Size: ${value.size} bytes`);
      }
    });*/

    var userId = localStorage.getItem("user_id");
    var interviewId = localStorage.getItem("interview_id");
    var result_id = localStorage.getItem("result_id");

    const response = axios
      .post(
        convertCreateInterviewContentsUrl(userId, interviewId, result_id),
        {
          audio,
        },
        {
          headers: {
            accept: "application/json",
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then(function (response) {
        console.log(response.data);
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
