import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Projects = ({ projectProfiles }) => (
    <>
    <div id="projects">
      <h1>Projects</h1>

      <div class="row">

      {projectProfiles.map((profile, key) => (
        <div class="card">
          <img class = "cardIMG" src={process.env.PUBLIC_URL + '/projectImages/' + profile.imageName} alt="Avatar"></img>
          <div class="card-body">
            <h4>{profile.name}</h4>
            <h5>{profile.description}</h5>
            <p>
              {profile.skills}
            </p>
            {/* <a href={profile.URL} class="btn">Read more</a> */}
          </div>
        </div>
        ))}
      </div>
    </div>
    </>
);

export default Projects;