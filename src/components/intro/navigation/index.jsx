import React from 'react'

import "./style.scss"
import Logo from "../../../images/Logo1.png"
import CallToAction from '../../shared/calltoaction'
import { scrollToSection } from '../../utils/helper'

const Navigation = () => {
  return (
    <div className="top-navigation-bar">
        <div className="app-logo">
            <img src={Logo} alt="Akhil's Portfolio" />
        </div>
        <div className="navigation-items">
            <span className='navigation-item' onClick={()=> 
                scrollToSection("skills")}>Skills</span>
            <span className='navigation-item' onClick={()=> 
                scrollToSection("portfolio")}>Portfolio</span>
            <span className='navigation-item' onClick={()=> 
                scrollToSection("skills")}>Resume</span>
        </div>
            <CallToAction text="Contact me" action={()=> 
                scrollToSection("contact")} />
    </div>
  )
}

export default Navigation