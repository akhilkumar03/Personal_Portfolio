import React from 'react'
import { Typewriter } from 'react-simple-typewriter'


const Typewritter = () => {
  return (
    <div className='App'>
        <span style={{ color: 'white', fontWeight: 'bold', fontSize : '50px'}}>
          <Typewriter
            words={['Front-End Developer', 'UI/UX Designer']}
            loop={true}
            cursor
            cursorStyle='|'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
    </div>
  )
}

export default Typewritter