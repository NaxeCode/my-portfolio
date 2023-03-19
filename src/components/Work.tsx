import React from 'react';

function Work(props) {
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