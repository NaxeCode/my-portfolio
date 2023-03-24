import React from 'react';

interface SkillsProps {
  programming: string[];
  frameworks: string[];
  engines: string[];
  areas: string[];
}

function Skills(props: SkillsProps) {
  return (
    <section>
      <h2>Programming</h2>
      <ul className="list-wrapper list-disc">
        {props.programming.map((programming, index) => (
          <li key={index}>{programming}</li>
        ))}
      </ul>

      <h2>Frameworks</h2>
      <ul className="list-wrapper">
        {props.frameworks.map((frameworks, index) => (
          <li key={index}>{frameworks}</li>
        ))}
      </ul>

      <h2>Engines</h2>
      <ul className="list-wrapper">
        {props.engines.map((engines, index) => (
          <li key={index}>{engines}</li>
        ))}
      </ul>

      <h2>Areas of Development</h2>
      <ul className="list-wrapper">
        {props.areas.map((areas, index) => (
          <li key={index}>{areas}</li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;