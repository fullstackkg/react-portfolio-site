import React from "react";
import ProjectCard from "../components/ProjectCard";
import "../styles/Projects.css";
import project1Image from "../assets/images/project1.jpg";
import project2Image from "../assets/images/project2.jpg";
import project3Image from "../assets/images/project3.jpg";

function Projects() {
  // Data to pass into ProjectCard component
  const project1 = {
    imageSrc: project1Image,
    imageAlt: "A screenshot of the Movie Watchlist app.",
    projectName: "Movie Watchlist",
    projectDescription:
      "A movie project that let's you browse an array of movies, and add to your watchlist.",
    projectLink: "https://khalil-gayle-movie-watchlist.netlify.app/",
  };

  const project2 = {
    imageSrc: project2Image,
    imageAlt: "A screenshot of the Colour Scheme Generator app.",
    projectName: "Colour Scheme Generator",
    projectDescription:
      "A colour scheme generator what allows you to experiment with a variety of colour combinations.",
    projectLink: "https://colour-schemes-generator.netlify.app/",
  };

  const project3 = {
    imageSrc: project3Image,
    imageAlt: "A screenshot of the Game of War app.",
    projectName: "Game of War",
    projectDescription: "A remake of the popular card game War.",
    projectLink: "https://khalil-game-of-war.netlify.app/",
  };

  return (
    <div className="projects">
      <h1>Projects</h1>
      <div className="projects-content">
        <ProjectCard
          imageSrc={project1.imageSrc}
          imageAlt={project1.imageAlt}
          projectName={project1.projectName}
          projectDescription={project1.projectDescription}
          projectLink={project1.projectLink}
        />
        <ProjectCard
          imageSrc={project2.imageSrc}
          imageAlt={project2.imageAlt}
          projectName={project2.projectName}
          projectDescription={project2.projectDescription}
          projectLink={project2.projectLink}
        />
        <ProjectCard
          imageSrc={project3.imageSrc}
          imageAlt={project3.imageAlt}
          projectName={project3.projectName}
          projectDescription={project3.projectDescription}
          projectLink={project3.projectLink}
        />
      </div>
    </div>
  );
}

export default Projects;
