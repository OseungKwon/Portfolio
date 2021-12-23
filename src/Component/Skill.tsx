import React, { useState } from "react";
import styled from "styled-components";
import useScrollFadeIn from "../Hook/useScrollFadeIn";
import { useScroll } from "../Hook/hooks";

/* ------------- style */
// header
const Header = styled.div`
  display: flex;
  z-index: 11;
  position: fixed;
  padding: 1rem;
  padding-left: 10rem;
  top: 0;
  width: 100%;
  background-color: black;
  color: white;
  font-weight: 900;
  line-height: 2rem;
  font-size: 2rem;
  box-shadow: 1px 1px 1px 1px #444;
`;
const QuoteWrapper = styled.div`
  position: relative;
  display: flex;
  padding-bottom: 1rem;
  div {
    font-size: 3rem;
  }
  div:first-child {
    padding-right: 23rem;
  }
`;
const Title = styled.div`
  position: absolute;
  top: 1.4rem;
  left: 15rem;
  font-weight: 300;
`;

// main
const MainStyle = styled.div`
  display: flex;
  padding: 10rem;
  color: white;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  height: 100vh;
`;
const Item = styled.div`
  display: inline;
  font-size: 2rem;
  padding: 2rem;
`;

/* ------------- skills content */
const skills = [
  "JavaScript(ES8)",
  "React",
  "Next.js",
  "Redux",
  "UI(material-ui,antd)"
];

const Skill = () => {
  const { scrollY } = useScroll();

  const [doIt, setDoIt] = useState(true);
  if (scrollY < 2700 && doIt) {
    setDoIt(false);
  }
  if ((scrollY > 2700) & (doIt === false)) {
    setDoIt(true);
  }
  const animatedItem = {
    0: useScrollFadeIn("up", 1, 0),
    1: useScrollFadeIn("up", 1, 0.1),
    2: useScrollFadeIn("up", 1, 0.2),
    3: useScrollFadeIn("up", 1, 0.3),
    4: useScrollFadeIn("up", 1, 0.4)
  };
  return (
    <div>
      {doIt && (
        <Header>
          <QuoteWrapper>
            <div>[</div>
            <div>]</div>
          </QuoteWrapper>
          <Title>기술 스택</Title>
        </Header>
      )}
      <MainStyle>
        {skills.map((skill, index) => (
          <Item key={skill} {...animatedItem[index]}>
            {skill}
          </Item>
        ))}
      </MainStyle>
    </div>
  );
};

export default Skill;
