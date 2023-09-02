import React from "react";
import * as S from "./style";

function Input(props) {
  return (
    <S.Wrap>
      <input
        name={props.name}
        type={props.type || "text"}
        placeholder={props.title}
        onChange={props.onChange}
        value={props.value}
      />
    </S.Wrap>
  );
}

export default Input;
