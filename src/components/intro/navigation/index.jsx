import React from 'react'

import "./style.scss"
import Logo from "../../../images/logo.png"
import CallToAction from '../../shared/calltoaction'

const Navigation = () => {
  return (
    <div className="top-navigation-bar">
        <div className="app-logo">
            <img src={Logo} alt="Akhil's Portfolio" />
        </div>
        <div className="navigation-items">
            <span className='navigation-item'>Skills</span>
            <span className='navigation-item'>Portfolio</span>
            <span className='navigation-item'>Articles & Blogs</span>
        </div>
            <CallToAction text="Contact me" />
    </div>
  )
}

export default Navigation