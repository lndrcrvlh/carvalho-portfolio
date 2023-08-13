import React from "react";
import "./projects.css";
import BasicTabs from "../tabs/projectsTabs.tsx";

function Projects() {
  return (
    <div className="projects">
      <div className="projects-left">
        <div className="projects-summary">
          <h2 className="projects-header">Work</h2>
          <p className="projects-description">
            I've taken on projects in a multitude of roles, from backend to
            front end, product management and quality assurance. My focus is
            always on delivering quality results.
          </p>
        </div>
      </div>
      <div className="projects-right">
        <div className="project-container">
          <BasicTabs />
        </div>
      </div>
    </div>
  );
}

export default Projects;
