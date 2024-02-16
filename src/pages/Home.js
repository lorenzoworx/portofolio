import React from 'react'
import './styles/Home.css'
import DownloadButton from '../components/DownloadButton';

const Home = () => {
  return(
    <div className="home-outlet">
      <div className="intro-header">
        <h1>Hi, I'm Oshoke</h1>
      </div>
      <div className="intro-bio">
        <p>
          and you're welcome to my digital realm. I'm a dedicated and passionate full stack web developer with a solid 
          foundation in computer engineering. My journey through the world of technology has been one of constant exploration, 
          learning, and problem-solving. With each line of code, I strive to bridge the gap between complex engineering principles and 
          the seamless, intuitive experiences that users love and expect. What sets me apart? It's my deep-seated love for tackling 
          challenges head-on and my unwavering belief in the power of teamwork. My academic background in computer engineering has 
          equipped me with a robust understanding of both the theoretical and practical aspects of technology. This knowledge base 
          allows me to dive deep into the mechanics of web development, from the intricate dance of back-end programming to the 
          artistry of front-end design. Throughout my career, I've had the privilege of collaborating with brilliant minds on a 
          diverse range of projects. These experiences have not only honed my technical skills but also taught me the value of 
          communication, adaptability, and a user-centered approach to development. Whether it's building scalable web applications 
          from the ground up or optimizing existing sites for peak performance, I bring a holistic view and a relentless drive to 
          create, innovate, and elevate. I invite you to explore my portfolio, a curated collection of my work that showcases my 
          journey, my achievements, and my vision for the future of web development. Let's embark on this digital adventure together, 
          and discover how we can transform your ideas into reality.
        </p>
      </div>
      <div className="intro-btn">
      <DownloadButton fileName="oshokeResume.pdf" filePath='/resume/Okolo-Oshokenoya-Resume-uptodate.pdf' buttonLabel='Download CV' />
      </div>
    </div>
  )
};

export default Home;