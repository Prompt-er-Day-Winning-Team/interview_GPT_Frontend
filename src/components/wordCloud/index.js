import React from "react";
import ReactWordcloud from "react-wordcloud";

const WordCloud = ({ words }) => {
  const options = {
    rotations: 0,
    rotationAngles: [0, 0],
    fontSizes: [15, 60],
    padding: 15,
    fontFamily: "Pretendard-Medium",
  };
  return <ReactWordcloud words={words} options={options} />;
};

export default WordCloud;
