import React from 'react'

import "./style.scss"
import { FaPhoneAlt } from 'react-icons/fa'
import {MdEmail} from "react-icons/md"


const Contactinfo = () => {
  return (
    <div className='contact-info-box'>
        <h4>I would be happy to answer  any question that you have about me or my skills!</h4>
        <div className="contact-option">
            <FaPhoneAlt />
            <span className='text'>+91 9319023094</span>
        </div>
        <div className="contact-option">
            <MdEmail />
            <span className='text'>ak96akhil@gmail.com</span>
        </div>
    </div>
  )
}

export default Contactinfo