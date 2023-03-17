import React from "react";
import { StaticImage } from "gatsby-plugin-image"
import "../styles/titleStyle.css"

const headingStyles = {
    color: "#FFFFFF",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 35,
}

const paragraphStyles = {
    color: "#f1faee",
    marginBottom: 48,
}

function Header() {
    return (
        <>
            <div style={headingStyles}>
                <StaticImage
                    className="rounded-img"
                    src="../images/scott_pilgrim.jpg"
                    alt="My Profile Picture"
                    placeholder="blurred"
                    layout="fixed"
                    width={150}
                    height={150}
                />
            </div>
            <h1 className="title">
                NaxeCode
            </h1>
            <h2 style={headingStyles}>
                Who?
            </h2>
            <p style={paragraphStyles}>
                Welcome to my website! I'm NaxeCode, a software engineer and game programmer based in Portland, Oregon USA. With my experience working on indie titles and live service games, I've honed my skills in the gaming industry and have a wealth of knowledge to bring to any project.
                This website showcases the results of my passion and dedication, featuring an impressive collection of games and software projects. From crafting engaging gameplay mechanics to designing elegant code architecture, I pour my heart and soul into every project. Take a look around my portfolio and feel free to get in touch with me to learn more about my work or to discuss potential collaborations.
            </p>
        </>
    );
}

export default Header;