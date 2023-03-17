import React from 'react';
import '../styles/Styles.css';

const codeStyles = {
    color: "#FF6534",
    padding: 4,
    backgroundColor: "#FFF4DB",
    fontSize: "1.00rem",
    borderRadius: 4,
}

const paragraphStyles = {
    color: '#f1faee',
    marginBottom: 48,
}

const listStyles = {
    marginBottom: 96,
    paddingLeft: 0,
}
const listItemStyles = {
    fontWeight: 300,
    fontSize: 24,
    maxWidth: 560,
    marginBottom: 30,
}

const linkStyle = {
    color: "#FF54A8",
    fontWeight: "bold",
    fontSize: 16,
    verticalAlign: "5%",
}

const descriptionStyle = {
    color: "#FF2129",
    fontSize: 14,
    marginTop: 10,
    marginBottom: 0,
    lineHeight: 1.25,
}

const badgeStyle = {
    color: "#fff",
    backgroundColor: "#FF8413",
    border: "1px solid #FF8413",
    fontSize: 11,
    fontWeight: "bold",
    letterSpacing: 1,
    borderRadius: 4,
    padding: "4px 6px",
    display: "inline-block",
    position: "relative" as "relative",
    top: -2,
    marginLeft: 10,
    lineHeight: 1,
}

const links = [
    {
        text: "Tutorial",
        url: "https://www.gatsbyjs.com/docs/tutorial/",
        description:
            "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
        color: "#FF5800",
    },
]

function Experiment
    () {
    return (
        <>
            <p style={paragraphStyles}>
                Example Code: <code style={codeStyles}>src/pages/index.tsx</code>
                <br></br>
                Edit page update in real-time. 😎
            </p>
            <ul style={listStyles}>
                {links.map(link => (
                    <li key={link.url} style={{ ...listItemStyles, color: link.color }}>
                        <span>
                            <a
                                style={linkStyle}
                                href={`${link.url}?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter-ts`}
                            >
                                {link.text}
                            </a>
                            {link.badge && (
                                <span style={badgeStyle} aria-label="New Badge">
                                    NEW!
                                </span>
                            )}
                            <p style={descriptionStyle}>{link.description}</p>
                        </span>
                    </li>
                ))}
            </ul>
            <img
                alt="Gatsby G Logo"
                src="data:image/svg+xml,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 2a10 10 0 110 20 10 10 0 010-20zm0 2c-3.73 0-6.86 2.55-7.75 6L14 19.75c3.45-.89 6-4.02 6-7.75h-5.25v1.5h3.45a6.37 6.37 0 01-3.89 4.44L6.06 9.69C7 7.31 9.3 5.63 12 5.63c2.13 0 4 1.04 5.18 2.65l1.23-1.06A7.959 7.959 0 0012 4zm-8 8a8 8 0 008 8c.04 0 .09 0-8-8z' fill='%23639'/%3E%3C/svg%3E"
            />
        </>
    );
}

export default Experiment;