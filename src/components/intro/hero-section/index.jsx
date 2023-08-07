import React from 'react'
import {BsAwardFill} from "react-icons/bs";
import {FaUser} from "react-icons/fa"

import "./style.scss"
import HandIcon from "../../../images/hand.png"
import Photo from "../../../images/main copy.png"
import { scrollToSection } from '../../utils/helper';
import CallToAction from '../../shared/calltoaction'
import Typewriter from './typewritter';

const HeroSection = () => {
  return (
    <div className='hero-section'>
        <div className="layout">
            <div className="left-section">
                <h1 className="title">
                    <span className="small-text">
                        <span className="text">Hello</span>
                        <span className="icon">
                            <img src={HandIcon} />
                        </span>
                        <span className="text">, I'm Akhil, a</span>
                    </span>
                    <span className="big-text"><Typewriter /></span>
                </h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum commodi, nihil praesentium totam voluptatibus adipisci.</p>
                <CallToAction text="Contact me" action={()=> 
                scrollToSection("contact")}/>
            </div>
            <div className="right-section">
                <img src={Photo} alt="Akhil Kumar Singh" />

            {/* <div className="highlights horizontal">
                <div className="icon">
                    <BsAwardFill />
                </div>
                <div className="text">Best Design Award</div>
            </div>  */}

            {/* <div className="highlights vertical">
                <div className="icon">
                    <FaUser />
                </div>
                <div className="text">
                    <span>4k+</span>
                    Happy Customers
                </div>
            </div> */}

            </div>
        </div>
    </div>
  )
}

export default HeroSection