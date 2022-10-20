import React from 'react';
import home1 from '../imgs/home1.png';
import {About, Description, Image, Hide} from '../styles';
import {titleAni} from '../animation';
import {motion} from 'framer-motion';

export default function AboutSection() {
  const h2Animate = {
    hide: {opacity: 0},
    show: {opacity: 1, transition: {duration: 2}},
  };
  const container = {
    hide: {x: 100},
    show: {
      x: 0,
      transition: {duration: 0.7, ease: 'easeOut', staggerChildren: '0.75'},
    },
  };
  return (
    <About>
      <Description>
        <motion.div
          variants={container}
          initial="hide"
          animate="show"
          className="title"
        >
          <Hide>
            <motion.h2 variants={h2Animate}>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={h2Animate}>
              your <span> dreams</span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={h2Animate}>true.</motion.h2>
          </Hide>
        </motion.div>
        <p>
          Contact us for any photography or videography ideas you've got. We are
          professionals with amazing skills
        </p>
        <button>Contact Us</button>
      </Description>
      <Image className="image">
        <img src={home1} alt="Camera guy" />
      </Image>
    </About>
  );
}
