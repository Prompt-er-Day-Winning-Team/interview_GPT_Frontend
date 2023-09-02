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
      <span style={{ position: 'absolute', marginLeft: '16px'}}>{props.frontText}</span>
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
    </S.WrapQuestion>
  );
}

export {TextInput, QuestionInput};
