import React, { useState } from "react";
import styled from "styled-components";
import useScrollFadeIn from "./useScrollFadeIn";
import { useScroll } from "../Hook/hooks";

const MainStyle = styled.div`
  display: flex;
  padding: 10rem;
  color: white;
  flex-direction: row;
  align-items: center;
  height: 50vh;
`;
const Item = styled.div`
  display: inline;
  font-size: 2rem;
  padding: 2rem;
`;
const Space = styled.div`
  height: 20rem;
`;
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
const Title = styled.div`
  position: absolute;
  top: 1.4rem;
  left: 15rem;
  font-weight: 300;
`;

const QuoteWrapper = styled.div`
  position: relative;
  display: flex;
  padding-bottom: 1rem;
  div {
    font-size: 3rem;
  }
  div:first-child {
    padding-right: 30rem;
  }
`;
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
      {/* <hr style={{ color: "white", borderColor: "white" }} /> */}
      {/* <Space /> */}
    </div>
  );
};

export default Skill;
