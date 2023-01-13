import React from "react";
import ProjectCard from "./ProjectCard.js";
import food from "../../assets/portfolio/food.jpg";
import movies from "../../assets/portfolio/movies.jpg";
import technology from "../../assets/portfolio/technology.jpg";
import travel from "../../assets/portfolio/travel.jpg";
import notes from "../../assets/portfolio/notes.jpg";
import team from "../../assets/portfolio/team.jpg";
import "../../App.css";

const projects = [
  {
    image: food,
    title: "Dinna' Time",
    description: "Recipe Suggestions",
    githubLink: "https://github.com/taholton748/Dinna_Time",
    appLink: "https://taholton748.github.io/Dinna_Time/",
  },
  {
    image: movies,
    title: "Alternative Endings",
    description: "Movie Review/Creative Writing Platform",
    githubLink: "https://github.com/ScarElite/Alternative-Endings",
    appLink: "https://alternative-endings.herokuapp.com/",
  },
  {
    image: technology,
    title: "Tech-Talk",
    description: "Technology Blog",
    githubLink: "https://github.com/taholton748/Tech_Talk",
    appLink: "https://techtalk9.herokuapp.com",
  },
  {
    image: notes,
    title: "Note Taker",
    description: "Place to keep notes and thoughts",
    githubLink: "https://github.com/taholton748",
    appLink: "https://vast-wildwood-34892.herokuapp.com/",
  },
  {
    image: team,
    title: "Team Maker",
    description: "Command-line team maker (Requires Node and install)",
    githubLink: "https://github.com/taholton748/Team_Maker",
    appLink: "https://github.com/taholton748/Team_Maker",
  },
  {
    image: travel,
    title: "PlaceBook",
    description: "Travel Focused Social Media",
    githubLink: "https://github.com/taholton748/PlaceBook",
    appLink: "http://hidden-lake-64019.herokuapp.com/",
  }
  
  
];

function Portfolio() {
  return (
    <section className="project-container space-between">
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
