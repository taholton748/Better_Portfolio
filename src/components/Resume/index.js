import React from 'react';

function Resume() {
    return (
      <section>
    <h1 id="resume">Resume</h1>
    <div>Download resume <a>here</a></div>
    <div className="my-5">Front-End Proficiencies</div>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>Git</li>
        <li>JavaScript</li>
        </ul> 
    <div className="my-5">Back-End Proficiencies</div>
    <ul>
      <li>Express</li>
    </ul>
  </section>
    );
  }
export default Resume;