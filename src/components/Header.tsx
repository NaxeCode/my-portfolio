import React from "react";
import { StaticImage } from "gatsby-plugin-image"

interface HeaderProps {
    name: string;
}

function Header(props: HeaderProps) {
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