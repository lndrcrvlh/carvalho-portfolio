import React from "react";
import "./projects.css";

function Projects() {
  return (
    <div className="projects">
      <div className="projects-left">
        <div className="projects-summary">
          <h2 className="projects-header">Work</h2>
          <p className="projects-description">
            I've taken on projects in a multitude of roles, from backend to
            front end, product management and quality assurance.
          </p>
        </div>
      </div>
      <div className="projects-right">
        <div className="project-container">
          <div className="project">
            <div className="project-header">Project 1</div>
            <div className="project-description">lorem ipsum....</div>
          </div>
          <div className="project">
            <div className="project-header">Project 2</div>
            <div className="project-description">lorem ipsum....</div>
          </div>
          <div className="project">
            <div className="project-header">Project 3</div>
            <div className="project-description">lorem ipsum....</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
