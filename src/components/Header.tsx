import React from "react";
import { StaticImage } from "gatsby-plugin-image"
import "../styles/Styles.css"

function Header(props) {
    return (
        <header>
            <StaticImage
                className="rounded-img"
                src="../images/scott_pilgrim.jpg"
                alt="My Profile Picture"
                placeholder="blurred"
                layout="fixed"
                width={150}
                height={150}
            />
            <h1 className="title">
                NaxeCode
            </h1>
        </header>
    );
}

export default Header;