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

function Skills() {
    return (
        <>
            <h2 style={headingStyles}>Skills!</h2>
            <ul>
                <li style={paragraphStyles}>Programming Languages</li>
                <ul>
                    <li>C#</li>
                    <li>Golang</li>
                    <li>Typescript/JavaScript</li>
                    <li>GameMaker Language</li>
                    <li>Lua</li>
                    <li>Python</li>
                    <li>PHP</li>
                </ul>
            </ul>
        </>
    );
}

export default Skills;
