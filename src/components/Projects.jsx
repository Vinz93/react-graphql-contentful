import React from "react";

const Projects = ({ projects }) => {
  if (!projects) {
    return <span>No projects yet</span>;
  }

  return (
    <div>
      {projects.map((project) => {
        return (
          <div>
            <p>{project.name}</p>
            <p>{project.company}</p>
            <p>{project.stack.join(", ")}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
