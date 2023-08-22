import React from 'react';
import '../style.css';
import IntoPic from "../Picture/intro-pic.jpg"

const IntroComponent = () => {
  return (
    <div id='Intro' className='intro'>
      <div className='left-content'>Hello, I'm Anuj Gupta. I passionate about development and design.</div>
      <div className='right-content'>
        <img src = {IntoPic} alt='error'/>
      </div>
    </div>
  )
}

export default IntroComponent