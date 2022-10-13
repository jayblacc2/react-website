import React from 'react';
import home1 from '../imgs/home1.png';
import styled from 'styled-components';
import {About, Description, Image, Hide} from '../styles';

export default function AboutSection() {
  return (
    <About>
      <Description>
        <div className="title">
          <Hide>
            <h2>We work to make</h2>
          </Hide>
          <Hide>
            <h2>
              your <span> dreams</span> come
            </h2>
          </Hide>
          <Hide>
            <h2>true.</h2>
          </Hide>
        </div>
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
