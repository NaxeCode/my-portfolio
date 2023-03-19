import React from 'react';

interface SkillsProps {
  skills: string[];
}

function Skills(props: SkillsProps) {
  return (
    <section>
      <h2>Skills!</h2>
      <ul>
        {props.skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;