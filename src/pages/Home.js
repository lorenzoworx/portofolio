import React, { useState, useEffect } from 'react'
import './styles/Home.css'

const Home = () => {
  const [animated, setAnimated] = useState(false);

  useEffect (() => {
    const timeoutId = setTimeout(() => {
      setAnimated(true);
    }, 500);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);
  return(
    <div className={`staggered-text-container ${animated ? 'animate' : ''}`}>
      <div className={`intro-header staggered-text-item ${animated ? 'animate-h1' : ''}`}>
        <h1>Hi, I'm Oshoke,</h1>
      </div>
      <div className={`intro-bio staggered-text-item ${animated ? 'animate-p' : ''}`}>
        <p>
          A passionate and dedicated full stack web developer working out of Lagos Nigeria.
          I have a strong background in... I specialize in creating... My goal is to...
        </p>
      </div>
      <div className={`intro-btn staggered-text-item ${animated ? 'animate-button' : ''}`}>
        <button>Download CV</button>
      </div>
    </div>
  )
};

export default Home;