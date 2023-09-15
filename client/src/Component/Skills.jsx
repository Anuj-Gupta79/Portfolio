import React from "react";

const Skills = () => {
  return (
    <div id="skills" className="skills-section">
      <h1>Skills</h1>
      <h3>Programming Languages :-</h3>
      <div className="programming-language">
        <a href="https://devdocs.io/cpp/">
          <h5>C++</h5>
        </a>
        <a href="https://devdocs.io/c/">
          <h5>C</h5>
        </a>
        <a href="https://docs.oracle.com/en/java/">
          <h5>Java</h5>
        </a>
      </div>
      <h3>Web Technologies :-</h3>
      <div className="web-technologies">
        <a href="https://developer.mozilla.org/en-US/docs/Web/HTML">
          <h5>HTML</h5>
        </a>
        <a href="https://developer.mozilla.org/en-US/docs/Web/CSS">
          <h5>CSS</h5>
        </a>
        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
          <h5>Javascript</h5>
        </a>
        <a href="https://react.dev/">
          <h5>ReactJs</h5>
        </a>
        <a href="https://devdocs.io/node/">
          <h5>NodeJs</h5>
        </a>
        <a href="https://docs.spring.io/spring-boot/docs/current/reference/htmlsingle/">
          <h5>Spring Boot</h5>
        </a>
      </div>
      <h3>Databases :-</h3>
      <div className="databases">
        <a href="https://dev.mysql.com/doc/">
          <h5>MySql</h5>
        </a>
        <a href="https://www.postgresql.org/docs/">
          <h5>Postgresql</h5>
        </a>
        <a href="https://www.mongodb.com/docs/manual/core/document/">
          <h5>MongoDB</h5>
        </a>
      </div>
      <h3>Others :-</h3>
      <div className="others">
        <a href="https://git-scm.com/doc">
          <h5>Git</h5>
        </a>
        <a href="https://docs.github.com/en">
          <h5>Github</h5>
        </a>
        <a href="https://docs.aws.amazon.com/">
          <h5>AWS</h5>
        </a>
      </div>
    </div>
  );
};

export default Skills;
