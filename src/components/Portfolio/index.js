import React from "react";
import ProjectCard from "./ProjectCard.js";
import hawaii from "../../assets/cover/Hawaii.jpg"

const projects = [
  {
    image: hawaii,
    title: "Dinna Time",
    description: "This is an app",
    githubLink: "",
    appLink: "",
  }
];

function Portfolio() {
  return (
    <section className="project-container">
      <h1 id="portfolio">Portfolio</h1>
      {projects.map(
        ({ image, title, description, githubLink, appLink }, index) => {
          return (
          <ProjectCard key={index} image={image} title={title} description={description} githubLink={githubLink} appLink={appLink}/>
          )
        }
      )}
    </section>
  );
}

export default Portfolio;
