import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { useScroll } from "../Hook/hooks";

/* ------------- style */
// etc style
const blink = keyframes`
    50% {
        border-color: transparent;
    }
`;

// main
const QuoteStyle = styled.div`
  position: relative;
  bottom: 7.2rem;
  left: 3rem;
  &__text span {
    animation: letter-glow 0.7s 0s ease both;
    @include nth-ani-delay(180, 0.05s);
  }
`;
const SquareBrackets = styled.span`
  border-left: 0.1em solid white;
  animation: ${blink} 0.7s steps(1) infinite;
`;

interface IProps {
  start: number;
  end: number;
}

const Quote = ({ start }: IProps) => {
  const quote = ["나누는 것을 좋아하는", "배움에 주저함이 없는"];
  const [text, setText] = useState("");
  const { scrollY } = useScroll();
  const [doIt, setDoIt] = useState([1, 1, 1]);
  const divide = [start + 100, start + 300, start + 1000, start + 1200];

  const quoteDisplay = (n: number) => {
    for (let i = 1; i < quote[n].length + 1; i++) {
      (function (x) {
        setTimeout(function () {
          console.log(x);
          setText(quote[n].substring(0, x));
        }, 200 * x);
      })(i);
    }
  };

  if (scrollY > divide[0] && scrollY < divide[1] && doIt[0]) {
    setDoIt([0, 1, 1]);
    quoteDisplay(0);
  }
  if (scrollY > divide[2] && scrollY < divide[3] && doIt[2]) {
    setText("");

    setDoIt([1, 1, 0]);
    quoteDisplay(1);
  }

  return (
    <QuoteStyle>
      <span>{text}</span>
      <SquareBrackets id="cursor" style={{}}></SquareBrackets>
    </QuoteStyle>
  );
};

export default Quote;
