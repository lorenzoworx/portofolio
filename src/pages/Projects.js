import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Projects.css';
import { projectData } from '../lib/ProjectData';
import ReadMore from '../components/ReadMore';

const Projects = () => {
  return(
    <div className={`project-outlet`}>
      <div className="project-container">
        {projectData.map((project) => {
          return(
            <div className={`project-card`} key={project.id}>
              <div>
                <img src={project.image} alt="" />
              </div>
              <div className='project-description'>
                <h1>
                  {project.title}
                </h1>
                <ReadMore
                  text={project.description}
                  maxLength={50}
                 />                  
              </div>
              <div className='project-links'>
                {project.liveLinkAvailable ?
                (<Link className='live-demo-link' to={project.liveLink}>Live Demo</Link>)
                : '' }
                
                <Link to={project.githubLink}>View on GitHub</Link>
              </div>
        </div>
          )
        })}
      </div>
    </div>
  )
};

export default Projects;