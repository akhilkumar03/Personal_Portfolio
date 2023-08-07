import React from 'react'

import "./style.scss"

import SocialIcons from './social-icons'
import Section from '../shared/section'
import Logo from "../../images/Logo1.png"
import { scrollToSection } from '../utils/helper'
import {
    FaLinkedinIn,
    FaGithub,
    FaInstagram,
    FaBehance,
} from "react-icons/fa"


const Footer = () => {
  return (
    <Section background="light" className="footer">
        <div className="footer-content-wrapper">
            <div className="footer-logo">
                <img src={Logo} alt="Akhil Kumar Singh" />
            </div>
            <ul className="footer-menu-items">
                <li className="footer-menu-item" onClick={()=> 
                scrollToSection("intro")}>
                    Home
                    </li>
                <li className="footer-menu-item" onClick={()=> 
                scrollToSection("skills")}>
                    Skills
                    </li>
                <li className="footer-menu-item" onClick={()=> 
                scrollToSection("portfolio")}>
                    Portfolio
                    </li>
                <li className="footer-menu-item" onClick={()=> 
                scrollToSection("contact")}>
                    Contact Me
                    </li>
            </ul>
            <div className="social-icons">
                <SocialIcons 
                    color="#0A66C2"
                    icon={<FaLinkedinIn />}
                    link="https://www.linkedin.com/in/akhilkumar03/"
                />
                <SocialIcons 
                    color="#0D2636"
                    icon={<FaGithub />}
                    link="https://github.com/akhilkumar03"
                />
                <SocialIcons 
                    color="#053eff"
                    icon={<FaBehance />}
                    link="https://www.behance.net/akhilkumar58"
                />
                <SocialIcons 
                    color="#E84C88"
                    icon={<FaInstagram />}
                    link="https://www.instagram.com/akhil.kumar1301/"
                />
                
            </div>
            <div className="bottom-bar">
                    <div className="copyright-text">
                    © 2023 Akhil Kumar Singh | All Rights Reserved 
                    </div>
                </div>
        </div>
    </Section>
  )
}

export default Footer