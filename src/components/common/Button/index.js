import React from "react";
import * as S from "./style";

function Button(props) {
  return (
    <S.Wrap>
      <button
        onClick={props.onClick}
        style={{
          width: props.width,
          height: props.height,
          backgroundColor: props.backgroundColor,
          color: props.color,
          border: "1px solid #333335",
        }}
      >
        {props.text}
      </button>
    </S.Wrap>
  );
}

export default Button;
