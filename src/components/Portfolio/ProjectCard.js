import React from "react";
import "../../App.css"

// export const ProjectCard = () => {
//   return (
//     <div>ProjectCard</div>
//   )
// }
function ProjectCard({ image, title, description, githubLink, appLink }) {
  return (
    <section>
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <img src={image} alt="Avatar" />
          </div>
          <div class="flip-card-back">
          <h1><a href={appLink}>{title}</a></h1>
          <p>{description}</p>
            <a href={githubLink}>GitHub Repo</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectCard;
