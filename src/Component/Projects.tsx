import React, { useState } from "react";
import styled from "styled-components";

// Carousel
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "../main.scss";

// Scroll
import { useScroll } from "../Hook/hooks";
//import useScrollFadeIn from "../Hook/useScrollFadeIn";

// Images
import p1_1 from "../Img/p1_1.png";
import p1_2 from "../Img/p1_2.png";
import p1_3 from "../Img/p1_3.png";
import p1_4 from "../Img/p1_4.png";

import p2 from "../Img/p2.png";

import p3 from "../Img/Portfolio1.jpg";

/* ------------- header */

// Header
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
`;
const TopName = styled.div`
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
    padding-right: 23rem;
  }
`;

// Main

const MainStyle = styled.div`
  padding: 10rem;
  display: grid;
  color: black;
  background-color: #e0e0e0;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(4, 1fr);
`;

// ImgArea
const ImgArea = styled.div`
  img {
    -webkit-user-drag: none;
    cursor: e-resize;
  }
  padding: 2rem;
  z-index: 10;
  width: 90%;
  grid-column: 1/4;
  grid-row: 1;
  margin-bottom: 20rem;
`;
const Img = styled.img`
  width: 99%;
  height: 80%;
  object-fit: cover;
  border: 1px solid #afafaf;
`;

// Content
const ContentArea = styled.div`
  white-space: pre-wrap;
  grid-column: 4;
  grid-row: 1;
  padding-left: 2rem;
  font-size: 1rem;
`;
const Title = styled.div`
  font-height: 2rem;
  font-weight: bold;
  //padding: 2rem;
  font-size: 4rem;
`;
const SubTitle = styled.div`
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  font-size: 1.5rem;
`;

// etc
const Highlight = styled.a`
  color: #13ca91;
  display: inline;
`;

/* ------------- projects content */

const projects = [
  {
    name: "HANDPAINTING",
    explain:
      "아이들을 대상으로 수화에 대한 긍정적 인식을 높여, 청각 장애인 차별을 없애고자 사이트를 만들게 되었습니다.\n머신러닝은 mediapipe의 hands를 가져와 사용했으며, 이를 응용해 손의 상대 위치에 따라 수화 동작을 인식하고, 이를 프로세싱으로 보여주는 웹사이트를 개발하였습니다.",
    contribute: "aaa",
    image: [p1_1, p1_2, p1_3, p1_4]
  },
  {
    name: "DEPL(QLICK)",
    explain:
      "1차 MVP를 앞두고 있으며, 코드 리뷰 서비스를 제외한 blog, qna, userInfo에 관한 코드를 짜는 중입니다.",
    contribute:
      "qna 페이지의 프론트엔드 부분을 담당해 프로젝트를 진행 중에 있습니다.\napi를 연결시키는 과정에서 백엔드 팀원과의 지속적인 소통을 하며 데이터 통신이 원활하게 이루어지도록 만들었습니다.\n또한, 프론트엔드 팀원과 동시에 같은 부분을 개발하는 상황속에서 깃 커밋을 작은 단위로 쪼개는 습관을 가지게 되었으며,\nqna 댓글 기능을 개발하는 과정 속에서, 댓글이 정상적으로 업데이트가 되지 않는 문제가 발생하였는데, 이를 해결하기 위해 브라우저 동작 과정과 toast-ui editor setMarkdown 기능을 학습하고 이를 응용해 해결하였습니다.",
    image: [p2]
  },
  {
    name: "Portfolio",
    explain: "권오승의 포트폴리오 페이지",
    contribute: "전체",
    image: [p3]
  }
];

const Projects = () => {
  console.log(projects);
  const { scrollY } = useScroll();
  const [doIt, setDoIt] = useState(true);
  if (scrollY < 3600 && doIt) {
    setDoIt(false);
  }
  if (scrollY > 3600 && doIt === false) {
    setDoIt(true);
  }

  return (
    <div>
      {doIt && (
        <Header>
          <QuoteWrapper>
            <div>[</div>
            <div>]</div>
          </QuoteWrapper>
          <TopName>프로젝트</TopName>
        </Header>
      )}

      <MainStyle>
        {projects.map((project, index) => (
          <>
            <ImgArea style={{ gridRow: `${index + 1}` }}>
              <AliceCarousel
                autoPlay
                autoPlayInterval={2500}
                disableButtonsControls
                mouseTracking
                infinite
              >
                {project.image.map((img) => (
                  <Img src={img} alt="img" className="sliderimg" />
                ))}
              </AliceCarousel>
            </ImgArea>

            <ContentArea style={{ gridRow: `${index + 1}` }}>
              <Title>{project.name}</Title>
              <SubTitle>설명</SubTitle>
              {project.explain}
              <SubTitle>진행 사항</SubTitle>
              {project.explain}
              <SubTitle>기여</SubTitle>
              {project.contribute}
            </ContentArea>
          </>
        ))}
      </MainStyle>
    </div>
  );
};

export default Projects;
