import React from "react";
import resume from "../../assets/resume/Resume.pdf";

function Resume() {
  return (
    <section>
      <h1 id="resume">Resume</h1>
      <div>
        Download resume{" "}
        <a href={resume} download>
          here
        </a>
      </div>
      <div className="my-5">Front-End Proficiencies</div>
      <ul>
        <li>HTML5</li>
        <li>CSS3</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Bootstrap</li>
        <li>VS Code</li>
      </ul>
      <div className="my-5">Back-End Proficiencies</div>
      <ul>
        <li>Express.js</li>
        <li>Node.js</li>
        <li>SQL</li>
        <li>Git</li>
        <li>GitHub</li>
        <li>Heroku</li>
        <li>NoSQL</li>
        <li>Sequelize</li>
      </ul>
    </section>
  );
}
export default Resume;
