import React from 'react';
import './styles/About.css'

const About = () => {
 

  return (
    <div className="about-outlet">
      <div className="about-bio">
        <div>
          <h1>Education</h1>
          <ul>
            <li>
              <h2>Kwame Nkrumah University of Science and Technology</h2>
              <p>Bachelor of Science in Computer Engineering</p>
              <p>2017 - 2021</p>
            </li>
          </ul>
        </div>
        <div>
          <h1>Skills</h1>
          <ul className="skills">
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript</li>
            <li>React</li>
            <li>Ruby</li>
            <li>Rails</li>
            <li>Nodejs</li>
            <li>Postgres</li>
            <li>MongoDb</li>
            <li>GitHub</li>
            <li>OOP</li>
            <li>Express</li>
            <li>Remote Collaboration</li>
            <li>Bootstrap</li>
          </ul>
        </div>        
      </div>
      <div className="about-picture">
        <img src="/images/IMG_3234.JPG" alt="" className='myImg' />
      </div>      
    </div>
  );
};

export default About;