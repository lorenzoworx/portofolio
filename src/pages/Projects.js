import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './styles/Projects.css';
import { projectData } from '../lib/ProjectData';

const Projects = () => {

  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setAnimated(true);
    }, 500);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return(
    <div className={`staggered-text-container ${animated ? 'animate' : ''}`}>
      <div className="project-container">
        {projectData.map((project) => {
          return(
            <div className={`project-card staggered-text-item ${animated ? 'animate-h1' : ''}`} key={project.id}>
              <div>
                <img src={project.image} alt="" />
              </div>
              <div>
                <h1>
                  {project.title}
                </h1>
                <p>
                  {project.description}
                </p>
              </div>
              <div>
                <Link to={project.liveLink}>Live Demo</Link>
                <Link to={project.githubLink}>View on GitHub</Link>
              </div>
              <div>More Text</div>
        </div>
          )
        })}
      </div>
    </div>
  )
};

export default Projects;