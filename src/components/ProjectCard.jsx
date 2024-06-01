import React from "react";
import "../styles/ProjectCard.css";

function ProjectCard({
  imageSrc,
  imageAlt,
  projectName,
  projectDescription,
  projectLink,
}) {
  return (
    <div className="project-card">
      <div className="project-card-image">
        <img src={imageSrc} alt={imageAlt} />
      </div>
      <div className="project-card-content">
        <h3 className="project-card-name">{projectName}</h3>
        <p className="project-card-description">{projectDescription}</p>
        <a href={projectLink} className="project-card-project-link button">
          View Project
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
