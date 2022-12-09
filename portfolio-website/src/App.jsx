

import { useState } from 'react'
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'
import About from './components/About/About'
import AboutProjects from './components/AboutProjects/AboutProjects'
import HardSkills from './components/HardSkills/HardSkills'
import Navbar from './components/Navbar/Navbar'
import ProjectsTabMenu from './components/ProjectsTabMenu/ProjectsTabMenu'
import Skills from './components/Skills/Skills'

import LightModeLogo from './assets/Creative Idea_Flat.png'
import DarkModeLogo from './assets/Creative Idea_Line.png'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

const lightTheme = {
  colors: {
    primary: '#fb3b64',
    textOne: '#000',
    textTwo: '#fff',
    bgPrimary: '#fff',
    bgSecondary: '#071828',
    light: '#fff',
    bgcopyright: '#061625'
  }
}

const darkTheme = {
  colors: {
    primary: '#fb3b64',
    textOne: '#fff',
    textTwo: '#000',
    bgPrimary: '#1c2440',
    bgSecondary: '#071828',
    light: '#fff',
    bgcopyright: '#061625'
  }
}

const GlobalStyle = createGlobalStyle`
html {
  scroll-behavior:smooth;
}
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
  }

  body {
    font-family: Vazirmatn, sans-serif;
    
  }

  a{
    text-decoration: none;
  }

  @media screen and (max-width: 668px){
    *{
      /* overflow-x: auto; */
    }
  }
`

const ModeControl = styled.img`
  width: 60px;
  position: fixed;
  right: 0;
  top: 50%;
  cursor: pointer;
  background-color: #fb3b64;
  border-radius: 20%;
  z-index: 10;
`

function App() {

  const [mode, setMode] = useState(false)

  return (
    <ThemeProvider 
    theme={mode ? darkTheme : lightTheme}>
      <GlobalStyle />
      <div className="App">
        <Navbar mode={mode} setMode={setMode}/>
        <ModeControl 
          onClick={() => setMode(!mode)}
          src={mode ? LightModeLogo : DarkModeLogo} />
        <About />
        <Skills />
        <AboutProjects />
        <ProjectsTabMenu />
        <Contact />
        <HardSkills />
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
