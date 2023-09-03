import React, { useEffect } from "react";
import * as S from "./style";

function InterviewHelper() {
  const textToSpeak = "에이닷 사용하면서 불편한 점은 어떤게 있으셨나요?";

  const speakText = (text) => {
    const synth = window.speechSynthesis;
    if (synth && text) {
      const utterance = new SpeechSynthesisUtterance(text);
      synth.speak(utterance);
    }
  };

  useEffect(() => {
    speakText(textToSpeak);

    return () => {
      const synth = window.speechSynthesis;
      if (synth && synth.speaking) {
        synth.cancel();
      }
    };
  }, []);

  return (
    <S.Wrap>
      <S.Title onClick={speakText}>
        {"에이닷 사용하면서 불편한 점은 어떤게 있으셨나요?"}
      </S.Title>
      <img
        src={process.env.PUBLIC_URL + "/images/Record/logo.gif"}
        alt="gif"
        style={{ width: "350px", height: "350px" }}
      />
      <img
        src={process.env.PUBLIC_URL + "/images/Record/recordButton.svg"}
        alt="record"
        style={{ width: "150px", height: "50px", cursor: "pointer" }}
        onClick={speakText}
      />
    </S.Wrap>
  );
}

export default InterviewHelper;
