import React from "react";
import "../styles/ServicesCard.css";

function ServicesCard({ imageSrc, imageAlt, service, servicesDescription }) {
  return (
    <div className="services-card">
      <h2>{service}</h2>
      <div className="services-card-img">
        <img src={imageSrc} alt={imageAlt} />
      </div>
      <div className="services-card-content">
        <p>{servicesDescription}</p>
      </div>
    </div>
  );
}

export default ServicesCard;
