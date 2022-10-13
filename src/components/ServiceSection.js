import React from 'react';
import clock from '../imgs/clock.svg';
import diaphragm from '../imgs/diaphragm.svg';
import money from '../imgs/money.svg';
import teamwork from '../imgs/teamwork.svg';
import home2 from '../imgs/home2.png';

export default function ServiceSection() {
  return (
    <div className="Services">
      <h2>
        High <span>quality</span> services
      </h2>
      <div className="cards">
        <div className="card">
          <div className="icon">
            <img src={clock} alt="?" />
            <h3>Efficient</h3>
          </div>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="card">
          <div className="icon">
            <img src={diaphragm} alt="?" />
            <h3>Efficient</h3>
          </div>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="card">
          <div className="icon">
            <img src={money} alt="?" />
            <h3>Efficient</h3>
          </div>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="card">
          <div className="icon">
            <img src={teamwork} alt="?" />
            <h3>Efficient</h3>
          </div>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
      <div className="image">
        <img src={home2} alt="camera" />
      </div>
    </div>
  );
}
