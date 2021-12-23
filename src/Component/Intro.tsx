import React, { useState, useEffect } from "react";
import styled from "styled-components";

// down icon
import { AiOutlineDown } from "react-icons/ai";

// scroll event
import { useScroll } from "../Hook/hooks";
import useScrollFadeIn from "../Hook/useScrollFadeIn";

/* ------------- style */

// main
const MainStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #e0e0e0;
  width: 100%;
  height: 100vh;
  font-size: 3rem;
  white-space: pre-line;
  div {
    padding: 0.5rem;
  }
`;

// bottom
const Bottom = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  bottom: 2rem;
  .DownButton {
    cursor: pointer;
    &:hover {
      color: #3e3e3e;
    }
  }
  .alice-carousel__dots-item.__active {
    background-color: #3e3e3e;
  }
`;
const Contact = styled.div`
  font-size: 1rem;
  b:first-child {
    padding-right: 1rem;
  }
  a {
    color: gray;
  }
`;

const Intro = () => {
  const { scrollY } = useScroll();
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (window.scrollY > 0 && show) {
      setShow(false);
      window.scrollTo({ top: 1000, behavior: "smooth" });
    }
  }, [scrollY, show]);

  return (
    <MainStyle>
      <div {...useScrollFadeIn("up", 1, 0)}>안녕하세요</div>
      <div {...useScrollFadeIn("up", 1, 0.5)}>신입 프론트엔드 개발자</div>
      <div {...useScrollFadeIn("up", 1, 1.1)}>권오승입니다</div>
      <Bottom>
        <Contact {...useScrollFadeIn("up", 1, 2)}>
          <b>Contact</b>email: 00osos@naver.com <b>|</b> github:&nbsp;
          <a href="https://github.com/OseungKwon">OseungKwon</a>
        </Contact>
        <AiOutlineDown
          className="DownButton"
          style={{ fontSize: "3rem" }}
          onClick={() => {
            window.scrollTo({ top: 1000, behavior: "smooth" });
          }}
        />
      </Bottom>
    </MainStyle>
  );
};

export default Intro;
