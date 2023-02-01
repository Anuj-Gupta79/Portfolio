import React from 'react';
import { motion } from 'framer-motion';
import { images } from '../../constants'

import { AppWrap } from '../../Wrapper';


import './about.scss';

const About = () => {
  const abouts = [
    { title : 'Web Development', description : 'I am good Web Developer', imgUrl: images.about01},
    { title : 'Android Development', description : 'I am good Android Developer', imgUrl: images.about02},
    { title : 'UX/UI Design', description : 'I am good UX/UI designer', imgUrl: images.about03},
    { title : 'Web Animation', description : 'I am good Web Animator', imgUrl: images.about04}
  ]

  return (
    <>
      <h2 className="head-text">I Know that <span>Good App</span> <br />means  <span>Good Business</span></h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
            <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(About, 'about');