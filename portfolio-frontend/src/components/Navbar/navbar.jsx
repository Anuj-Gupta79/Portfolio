import React from 'react';
import { images } from '../../constants';

const navbar = () => {
  return (
    <nav className="app__navbar">
        <div className="app__navbar-logo">
            <img src={images.logo} alt="logo"/>
        </div>
        <ul className="app__navbar-link">
            {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
                <li key={`link-${item}`}>
                    <div className="app__flex p-text"/>
                    <a href={`#${item}`}>{item}</a>
                </li>
            ))}
        </ul>
    </nav>
  )
}

export default navbar