import React from "react";
import "../styles/About.css";
import profilePhoto from "../assets/images/linkedin-photo.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function About() {
  return (
    <div className="about">
      <h1>About Me</h1>
      <div className="about-me-content">
        <div className="profile-photo-container">
          <img src={profilePhoto} alt="Headshot image of me" />
        </div>
        <h2>Khalil Gayle</h2>
        <p>
          Hello, I'm Khalil. I specialize in programming languages like Java,
          JavaScript, SQL, C#, and Python, honed through academic study,
          personal projects, and freelance work. Driven by a passion for coding
          and problem-solving, I'm focused on continuously improving my skills
          and applying them to real-world challenges.
        </p>
        <div className="links">
          <a href="../public/kgresume.pdf" id="resume-link" className="button">
            Resume
          </a>
          <div>
            <a href="http://github.com/fullstackkg">
              <FontAwesomeIcon icon={faGithub} className="github-icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
