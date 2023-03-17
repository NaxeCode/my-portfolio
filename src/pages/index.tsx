import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Header from "../components/Header"
import Skills from "../components/Skills"
import Projects from "../components/Projects"
import Footer from "../components/Footer"

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
    <div style={mainStyle}>
      <main style={pageStyles}>
        <Header />
        <Skills />
        <Projects />
        <Footer />
        
        
      </main>
    </div>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
