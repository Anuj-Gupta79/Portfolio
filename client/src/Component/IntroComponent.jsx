import React from 'react';
import '../style.css';
import IntoPic from "../Picture/headerImg.png"

const IntroComponent = () => {
  return (
    <div className='into-section'>
      <div className='intro'>
        <div className='intro-content'>
          <h3>Hello, I'm Anuj Gupta. I am 4th year student of B.Tech. I am passionate for the development and design. I always as aspire to be a software developer.</h3>
        </div>
        <div className='intro-image'>
          <img src={IntoPic} alt='error' />
        </div>
      </div>
    </div>
  )
}

export default IntroComponent