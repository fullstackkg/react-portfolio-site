import React from "react";
import ServicesCard from "../components/ServicesCard";
import webdevImage from "../assets/images/webdev.jpg";
import mobiledevImage from "../assets/images/mobileapp.jpg";
import backenddevImage from "../assets/images/backend.jpg";

import "../styles/Services.css";

function Services() {
  const webdev = {
    service: "Web Development",
    imageSrc: webdevImage,
    imageAlt: "An image of some React code.",
    servicesDescription:
      "As a proficient web developer, I offer expertise web development services to create dynamic, responsive, and user-friendly websites. Using technologies such as React, HTML, CSS, JavaScript, and Node.js, I develop web applications tailored to meet your needs. I will ensure that your website is not only visually appealing but also highly functional and optimized for performance.",
  };

  const backend = {
    service: "Backend Development",
    imageSrc: backenddevImage,
    imageAlt: "An image of backend code.",
    servicesDescription:
      "As an experienced backend developer, I offer backend and API development services to build robust, scalable, and efficient server-side applications. Utilizing my proficiency in C#, Java, and SQL, along with frameworks like ASP.NET and Spring Boot, I design and implement powerful backend solutions tailored to meet your specific requirements. My services ensure that your applications are secure, performant, and scalable.",
  };
  const mobiledev = {
    service: "Mobile Apps Development",
    imageSrc: mobiledevImage,
    imageAlt: "A gaming image.",
    servicesDescription:
      "As an experienced mobile app developer, I'm able to leverage my skills in Kotlin to create high-quality, responsivem and user-friendly mobile applications. I deliver Android applications that are secure, performant, and tailed to your needs.",
  };

  return (
    <div className="services">
      <h1>Services</h1>
      <ServicesCard
        service={webdev.service}
        imageSrc={webdev.imageSrc}
        imageAlt={webdev.imageAlt}
        servicesDescription={webdev.servicesDescription}
      />
      <ServicesCard
        service={mobiledev.service}
        imageSrc={mobiledev.imageSrc}
        imageAlt={mobiledev.imageAlt}
        servicesDescription={mobiledev.servicesDescription}
      />
      <ServicesCard
        service={backend.service}
        imageSrc={backend.imageSrc}
        imageAlt={backend.imageAlt}
        servicesDescription={backend.servicesDescription}
      />
    </div>
  );
}

export default Services;
