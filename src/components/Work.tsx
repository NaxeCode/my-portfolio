import React from 'react';
import "../styles/Work.css";

interface Project {
  name: string;
  image: string;
}

interface WorkProps {
  projects: Project[];
}

function Work(props: WorkProps) {
  return (
    <section>
      <h2>Work</h2>
      <div className="grid">
        {props.projects.map((project, index) => (
          <div className="project" key={index}>
            <img src={project.image} alt={project.name} />
            <p>{project.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Work;