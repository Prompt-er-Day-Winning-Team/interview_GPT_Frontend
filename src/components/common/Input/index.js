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
          width: props.width, 
          height: props.height, 
          backgroundColor: props.backgroundColor
        }}
      />
    </S.Wrap>
  );
}

export default TextInput;
