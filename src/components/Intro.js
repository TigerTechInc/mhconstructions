import React from 'react';
import MediaContent from './Media/MediaContent';
import MediaBlock from './Media/MediaBlock';

const Intro = () => (
    <>
      <div id="intro">
        <h1 id="name">MH Concrete & Renovations Inc.</h1>
        <img id='profileIMG' src={process.env.PUBLIC_URL + '/profile.png'} alt="ProfilePic"></img>
        {/* <div class="mediaSpacingIntro">
          <MediaBlock mediaProfiles={MediaContent} />
        </div> */}
      </div>
    </>
);

export default Intro;