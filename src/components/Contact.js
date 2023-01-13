import React from 'react';
import MediaContent from './Media/MediaContent';
import MediaBlock from './Media/MediaBlock';

const Contact = () => (
    <>
      <div id="contact">
        <h1>Contact</h1>

        <p>Thanks for visiting! You can email me at <a class="no-link" href="mailto:jayant.mehta@uwaterloo.com">jayant.mehta@uwaterloo.ca</a> or connect with me below.</p>

        <div>
          <MediaBlock mediaProfiles={MediaContent} />
        </div>
        <p>Developed and Designed by Jayant Mehta</p>
        <p>Jayant Mehta © 2023</p>
      </div>
    </>
);

export default Contact;