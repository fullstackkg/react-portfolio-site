import React from "react";
import "../styles/PersonalCard.css";
import headshotPic from "../assets/images/headshot1.jpg";

function PersonalCard() {
  return (
    <div className="personal-card">
      <img
        className="profile-pic"
        src={headshotPic}
        alt="Headshot photo of me"
      />
      <h2>Khalil Gayle</h2>
      <h3>Full-Stack Developer</h3>
    </div>
  );
}

export default PersonalCard;
