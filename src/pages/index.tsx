import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Header from '../components/Header';
import Who from '../components/Who';
import Skills from '../components/Skills';
import Work from '../components/Work';
import Footer from '../components/Footer';
import port from "../images/icon.png";
import '../styles/tailwind.css';

const mainStyle = {
  backgroundColor: "#264653",
}
const pageStyles = {
  color: "#232129",
  paddingTop: 35,
  paddingLeft: 96,
  paddingRight: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  color: "#FFFFFF",
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 35,
}

const headingAccentStyles = {
  color: "#a8dadc",
}
const paragraphStyles = {
  color: "#f1faee",
  marginBottom: 48,
}

const IndexPage: React.FC<PageProps> = () => {
  return (
    <div className="App">
      <Header name="NaxeCode" />
      <Who intro="Welcome to my website! I'm a software engineer and game programmer based in Portland, Oregon USA. With my experience working on indie and live service games. This site showcases results of my passion and dedication, featuring a collection of games and software projects. From crafting engaging gameplay mechanics to designing elegant code architecture, I pour my heart and soul into every project. Take a look around my portfolio and feel free to get in touch with me to learn more about my work or to discuss potential collaborations." />
      <Skills skills={['JavaScript', 'React', 'HTML', 'CSS']} />
      <Work projects={[
        { name: 'Project 1', image: port },
        { name: 'Project 2', image: port },
        { name: 'Project 3', image: port },
        { name: 'Project 4', image: port },
        { name: 'Project 5', image: port },
        { name: 'Project 6', image: port },
        { name: 'Project 7', image: port },
        { name: 'Project 8', image: port },
        { name: 'Project 9', image: port },
        { name: 'Project 10', image: port },
      ]} />
      <Footer />
    </div>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
