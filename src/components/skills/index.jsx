import React from 'react'

import "./style.scss"
import TechImage from "../../images/tech-icons.png"
import {AiOutlineCloudDownload} from "react-icons/ai"

import Section from '../shared/section'
import CallToAction from '../shared/calltoaction'
// import { Resume } from "../../../public/"

// const PDF_FILE_URL ="http://localhost:3000/AkhilResume.pdf"

const Skills = () => {
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch('AkhilResume.pdf').then(response => {
        response.blob().then(blob => {
            // Creating new object of PDF file
            const fileURL = window.URL.createObjectURL(blob);
            // Setting various property values
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = 'SamplePDF.pdf';
            alink.click();
        })
    })
}



  return (
    <Section background="dark" id="skills">
        <div className="content-wrapper">
            <div className="left-column">
                <img src={TechImage} alt="Html,CSS,JS,React" />
            </div>
            <div className="right-column">
              <h2>Skills</h2>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis nemo nulla maiores voluptatum, quae dolore excepturi consequatur eum debitis quis cupiditate architecto rem, molestiae officiis accusantium. Nam aut iure reprehenderit?</p>
              
              <CallToAction text="Download CV" onclick={onButtonClick} icon={<AiOutlineCloudDownload />} />
              
            </div>
        </div>
    </Section>
  )
}

export default Skills