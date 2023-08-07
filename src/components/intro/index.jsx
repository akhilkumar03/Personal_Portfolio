import React from 'react'

import "./style.scss"
import cloud from "../../images/cloud.png"
import cloudSoft from "../../images/cloud-soft.png"
import Navigation from './navigation'
import HeroSection from './hero-section'

const Intro = () => {
  return (
    <div className="intro-section" id='intro'>
        <div className="vector-bg" id='parallax'></div>
        <img src={cloud} className='cloud'/>
        <img src={cloudSoft} className='cloud-soft'/>
        <div className="content">
            <Navigation />
            <HeroSection />
        </div>
    </div>
    )
}

export default Intro;