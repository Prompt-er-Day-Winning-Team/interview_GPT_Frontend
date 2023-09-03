import React, { useEffect, useState } from "react";
import * as S from "./style";
  
const textToSpeak = [
  "1124124",
  "2",
  "3",
  "4",
  "5",
  "6",
];

function InterviewHelper() {
  const [isRecord, setIsRecord] = useState(true)
  const [textToSpeakIdx, setTextToSpeakIdx] = useState(-1)

  const handleInputChange = (e) => {
    if (isRecord) {
      setIsRecord(!isRecord)
      setTextToSpeakIdx(textToSpeakIdx + 1)
      speakText(textToSpeak[textToSpeakIdx + 1])
    } else {
      setIsRecord(!isRecord)
    }
  };

  // useEffect(() => {
  //   speakText(textToSpeak[textToSpeakIdx])
  // }, []);

  const speakText = (text) => {
    const lang = "ko-KR"
    const synth = window.speechSynthesis;
    if (synth && text) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = lang
      utterance.pitch = 1
      utterance.rate = 0.9
      synth.speak(utterance);
    }
  };

  return (
    <S.Wrap>
      <S.Title>
        {textToSpeak[textToSpeakIdx]}
      </S.Title>
      <img
        src={process.env.PUBLIC_URL + "/images/Record/logo.gif"}
        alt="gif"
        style={{ width: "350px", height: "350px" }}
      />
      {console.log(isRecord)}
      {isRecord ? 
      <>
        {textToSpeakIdx === -1 ? 
          <img
            src={process.env.PUBLIC_URL + "/images/Record/startButton.svg"}
            alt="start"
            style={{ width: "150px", height: "50px", cursor: "pointer" }}
            onClick={handleInputChange}
          />
        :
        <img
          src={process.env.PUBLIC_URL + "/images/Record/stopButton.svg"}
          alt="stop"
          style={{ width: "150px", height: "50px", cursor: "pointer" }}
          onClick={handleInputChange}
        />
        }
      </>
      :
        <img
          src={process.env.PUBLIC_URL + "/images/Record/recordButton.svg"}
          alt="record"
          style={{ width: "150px", height: "50px", cursor: "pointer" }}
          onClick={handleInputChange}
        />
      }
    </S.Wrap>
  );
}

export default InterviewHelper;
