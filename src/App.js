import React from "react";
import Projects from "./Component/Projects";
import Skill from "./Component/Skill";
import Top from "./Component/Top";
import Intro from "./Component/Intro";

const App = () => {
  return (
    <div style={{ backgroundColor: "black" }}>
      <Intro />
      <Top />
      <Skill />
      {/* <Carousel />
      <Carousel /> */}
      <Projects />
      {/* <Services /> */}
    </div>
  );
};

export default App;
