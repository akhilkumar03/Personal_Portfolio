import React from 'react'

import Intro from "./components/intro";
import Skills from './components/skills';
import Portfolio from './components/portfolio';
import "./App.scss";
import Contact from './components/contact';




const App = () => {
  return (
    <div>
     <Intro />
    <Skills />
    <Portfolio />
    <Contact />

    </div>
  )
}

export default App