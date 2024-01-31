import React, { useState, useEffect } from 'react';
import './styles/About.css'
import myImg from './IMG_3234.JPG'

const About = () => {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setAnimated(true);
    }, 500);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className={`staggered-text-container ${animated ? 'animate' : ''}`}>
      <div className={`about-bio staggered-text-item ${animated ? 'animate-h1' : ''}`}>
        <div>
          <h1>Educcation</h1>
          <p>
            The quick brown fox jumps over the lazy dog
            The quick brown fox jumps over the lazy dog
          </p>
        </div>
        <div>
          <h1>ambition</h1>
          <p>
            The quick brown fox jumps over the lazy dog
            The quick brown fox jumps over the lazy dog
          </p>
        </div>
        <div>
          <h1>Purpose</h1>
          <p>
            The quick brown fox jumps over the lazy dog
            The quick brown fox jumps over the lazy dog
          </p>
        </div>
        <div>
          <h1>Skills</h1>
          <p>
            The quick brown fox jumps over the lazy dog
            The quick brown fox jumps over the lazy dog
          </p>
        </div>  
        <div>
          <h1>Experience</h1>
          <p>
            The quick brown fox jumps over the lazy dog
            The quick brown fox jumps over the lazy dog
          </p>
        </div> 
        <div>
          <h1>Educcation</h1>
          <p>
            The quick brown fox jumps over the lazy dog
            The quick brown fox jumps over the lazy dog
          </p>
        </div>
        <div>
          <h1>ambition</h1>
          <p>
            The quick brown fox jumps over the lazy dog
            The quick brown fox jumps over the lazy dog
          </p>
        </div>
        <div>
          <h1>Purpose</h1>
          <p>
            The quick brown fox jumps over the lazy dog
            The quick brown fox jumps over the lazy dog
          </p>
        </div>
        <div>
          <h1>Skills</h1>
          <p>
            The quick brown fox jumps over the lazy dog
            The quick brown fox jumps over the lazy dog
          </p>
        </div>  
        <div>
          <h1>Experience</h1>
          <p>
            The quick brown fox jumps over the lazy dog
            The quick brown fox jumps over the lazy dog
          </p>
        </div> 
      </div>
      <div className={`about-picture staggered-text-item ${animated ? 'animate-p' : ''}`}>
        <img src={myImg} alt="" className='myImg' />
      </div>
      {/* <div className={`staggered-text-item ${animated ? 'animate-button' : ''}`}>
        <button>Download cv</button>
      </div> */}
    </div>
  );
};

export default About;