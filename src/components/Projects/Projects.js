import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Projects = ({ projectProfiles }) => (
  <>
    <div id="projects">
      <h1>Projects</h1>

      <div className="row">
        {projectProfiles.map((profile, key) => (
          <div className="card" key={key}>
            <img className="cardIMG" src={process.env.PUBLIC_URL + '/projectImages/' + profile.imageName} alt="Project"></img>
          </div>
        ))}
      </div>
    </div>
  </>
);

export default Projects;
