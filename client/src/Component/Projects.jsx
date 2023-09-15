import React from "react";
import Card from "./Card";
import Data from "../Utils/data.utils..json";

const Projects = () => {
  const projectsArr = Data.projects;
  return (
    <div id="projects" className="projects-section">
      <h1>My Work</h1>
      <div className="projects-cards">
        {projectsArr.map((work) => {
          return <Card key={work.id} item={work} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
