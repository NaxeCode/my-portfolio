import React from 'react';

interface WhoProps {
  intro: string;
}

function Who(props: WhoProps) {
  return (
    <section>
      <h2>Who?</h2>
      <p>{props.intro}</p>
    </section>
  );
}

export default Who;