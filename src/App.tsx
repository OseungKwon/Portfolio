import React from "react";
import Projects from "./component/Projects";
import Skill from "./component/Skill";
import Top from "./component/Top";
import Intro from "./component/Intro";

const App: React.FC = () => {
  return (
    <div style={{ backgroundColor: "black" }}>
      <Intro />
      <Top />
      <Skill />
      <Projects />
    </div>
  );
};

export default App;
