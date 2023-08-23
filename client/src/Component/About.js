import React from "react";
import  Pic  from "../Picture/headerImg.png"

const About = () => {
  return (
    <div id="about" className="about-section">
      <div className="about-img">
        <img src={Pic} alt="error" />
      </div>
      <div className="about-content">
        <span>
          Hello! My name is Anuj Gupta. I am from Aligarh, Uttar Pradesh. I am
          pursuing my bachelor degree in computer science and engineering.
        </span>
      </div>
    </div>
  );
};

export default About;
