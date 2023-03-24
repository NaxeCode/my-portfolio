import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Header from '../components/Header';
import Who from '../components/Who';
import Skills from '../components/Skills';
import Work from '../components/Work';
import Footer from '../components/Footer';
import port from "../images/icon.png";
import soulCAT from "../images/soulCat.png";
import magnum from "../images/magnum.png";
import hop from "../images/hop.png";
import dodge from "../images/dodge.png";
import doll from "../images/doll.png";
import vapor from "../images/vapor.png";
import eggs from "../images/eggs.png";
import '../styles/tailwind.css';

const introText = "Welcome to my website! I'm a software engineer and game programmer based in Portland, Oregon. This site showcases my collection of games and software projects. From crafting engaging gameplay mechanics to designing elegant code architecture, I pour my heart and soul into every project. Take a look around and feel free to get in touch with me to learn more or discuss potential collaborations.";
const languages = ['Haxe', 'C++', 'C#', 'HTML', 'CSS', "JavaScript / Typescript", "Lua", "Golang", "Python"];
const frameworks = ['HaxeFlixel', '.Net Core', "Xamarin", 'React', "Gatsby", "Phaser.io", "PixiJS", "Game Maker"];
const engines = ['XNA / FNA', 'Unity', 'Unreal 4', "Godot"];
const areas = ["Git", "Online Networking", "AWS", "Azure", "Steamworks SDK", "Kubernetes & Docker", "Cloud Architecture", "Web UI / UX", "Game Design", "Technical Writing", "Mobile Porting (IOS & Android)", "Game Engine Design"];
const IndexPage: React.FC<PageProps> = () => {
  return (
    <div>
      <Header name="NaxeCode"/>
      <Who intro={introText} />
      <Skills programming={languages} frameworks={frameworks} engines={engines} areas={areas} />
      <Work projects={[
        { name: 'i ate two eggs', image: eggs },
        { name: 'Vaporwave Breakout', image: vapor},
        { name: 'Dust Drop Doll', image: doll },
        { name: 'Dodge Knight', image: dodge },
        { name: 'Hop: Friend Ressurection', image: hop },
        { name: 'Magnum', image: magnum },
        { name: 'Soul Cat', image: soulCAT },
      ]} />
      <Footer />
    </div>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
