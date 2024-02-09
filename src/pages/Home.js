import React from 'react'
import './styles/Home.css'

const Home = () => {
  return(
    <div className="home-outlet">
      <div className="intro-header">
        <h1>Hi, I'm Oshoke,</h1>
      </div>
      <div className="intro-bio">
        <p>
          A passionate and dedicated full stack web developer working out of Lagos Nigeria.
          I have a strong background in... I specialize in creating... My goal is to...
        </p>
      </div>
      <div className="intro-btn">
        <button>Download CV</button>
      </div>
    </div>
  )
};

export default Home;