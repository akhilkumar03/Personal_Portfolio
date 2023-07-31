import React from 'react'
import Section from "../shared/section"


import "./style.scss"
import Contactinfo from './contact-info'
import Contactform from './contactform'

const Contact = () => {
  return (
    <Section id="contact" title="Any Question? Feel free to Contact Me!" background="dark">
        <div className="contact-content-wrapper">
            <Contactinfo />
            <Contactform />
        </div>

    </Section>
  )
}

export default Contact