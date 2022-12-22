import React from "react";
import githubLogo from "../../assets/logos/github-mark.png";

// export const ProjectCard = () => {
//   return (
//     <div>ProjectCard</div>
//   )
// }
function ProjectCard(image, title, description, githubLink, appLink) {
  return (
    <section>
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <img src={image} alt="Avatar" />
          </div>
          <div class="flip-card-back">
          <h1>Title</h1>
          <p>Description: {description}</p>
            <a href={githubLink}><img src={githubLogo} alt="github-logo"/></a>
            
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectCard;
