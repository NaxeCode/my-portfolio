import React from 'react';
import '../styles/Styles.css';

const paragraphStyles = {
    color: '#f1faee',
    marginBottom: 48,
};

function Skills() {
    return (
        <>
            <h2>Skills!</h2>
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
