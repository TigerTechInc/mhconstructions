import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Experience = ({ experienceProfiles }) => (
    <>
    <div id="experience">
      <h1>Experience</h1>

      <div class="row">

      {experienceProfiles.map((profile, key) => (
        <div class="card">
          <img class = "cardIMG" src={process.env.PUBLIC_URL + '/companyImages/' + profile.imageName} alt="Avatar"></img>
          <div class="card-body">
            <h4>{profile.company}</h4>
            <h5>{profile.title}</h5>
            <p>
              {profile.timeline}
            </p>
            <a href="#" class="btn">Read more</a>
          </div>
        </div>
        ))}
      </div>
    </div>
    </>
);

export default Experience;