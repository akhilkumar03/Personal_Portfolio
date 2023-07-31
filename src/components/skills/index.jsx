import React from 'react'

import "./style.scss"
import TechImage from "../../images/tech-icons.png"
import {AiOutlineCloudDownload} from "react-icons/ai"

import Section from '../shared/section'
import CallToAction from '../shared/calltoaction'

const Skills = () => {
  return (
    <Section background="dark" id="skills">
        <div className="content-wrapper">
            <div className="left-column">
                <img src={TechImage} alt="Html,CSS,JS,React" />
            </div>
            <div className="right-column">
              <h2>Skills</h2>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis nemo nulla maiores voluptatum, quae dolore excepturi consequatur eum debitis quis cupiditate architecto rem, molestiae officiis accusantium. Nam aut iure reprehenderit?</p>
              <CallToAction text="Download CV" icon={<AiOutlineCloudDownload />} />
            </div>
        </div>
    </Section>
  )
}

export default Skills