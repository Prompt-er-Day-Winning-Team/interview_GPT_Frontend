import React from "react";
import * as S from "./style";

function TextInput(props) {
  return (
    <S.Wrap>
      <textarea
        name={props.name}
        type={props.type || "text"}
        placeholder={props.title}
        onChange={props.onChange}
        value={props.value}
        style={{
          resize: "none",
          width: props.width, 
          height: props.height, 
          backgroundColor: props.backgroundColor
        }}
        disabled={props.disabled}
      />
    </S.Wrap>
  );
}

function QuestionInput(props) {
  return (
    <S.WrapQuestion>
      <span style={{ color: '#8E94A1', position: 'absolute', marginLeft: '16px'}}>{props.frontText}</span>
      <textarea
        name={props.name}
        type={props.type || "text"}
        placeholder={props.title}
        onChange={props.onChange}
        value={props.value}
        style={{
          resize: "none",
          width: props.width, 
          height: props.height, 
          backgroundColor: props.backgroundColor,
          padding: `16px 16px 16px ${props.frontText.length < 3 ? 55 : 55 + 13*(props.frontText.length-2)}px`,
        }}
        disabled={props.disabled}
      />
    </S.WrapQuestion>
  );
}

export {TextInput, QuestionInput};
