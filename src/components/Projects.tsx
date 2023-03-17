import React from 'react';
import '../styles/titleStyle.css';

const headingStyles = {
    color: '#FFFFFF',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 35,
};

const paragraphStyles = {
    color: '#f1faee',
    marginBottom: 48,
};

function Projects() {
    return (
        <>
            <h2 style={headingStyles}>
                Works & Contributions!
            </h2>
        </>
    );
}

export default Projects;