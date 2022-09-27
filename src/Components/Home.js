import React from "react";

function Home() {
  return (
    <div className="content hero container">
      <span className="title">Fullstack Devloper</span>
      <h1>
        Hello, my name is <span>Noah King</span>
      </h1>
      <p>
        I'm currently working on building my programming skillset,
        to be able to create professional, responsive and multi-fuctional React
        Components. While also providing visually aesthetic layouts and features
        for users.
      </p>
      <a href="resume.pdf" target="_blank" className="btn">Download CV</a>
    </div>
  );
}

export default Home;
