import React from "react";
import  MyPic  from "../Picture/myPic.png"

const About = () => {
  return (
    <div id="about" className="about-section">
      <div className="about-img">
        <img src={MyPic} alt="error" />
      </div>
      <div className="about-content">
        <span>
          Hello! My name is <b>Anuj Gupta</b>. I am from <b>Aligarh</b>, Uttar Pradesh. I am
          pursuing my bachelor degree in computer science and engineering. I am last year student. I always aspire to become a <b>Software Developer</b>. During my course, I have made several projects. I have also learnt dsa for problem solving. I passionate for design and development. I hope that I will contribute some share from my side to this field.
        </span>
      </div>
    </div>
  );
};

export default About;
