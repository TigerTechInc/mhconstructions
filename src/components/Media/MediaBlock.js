import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'
// import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const MediaBlock = ({ mediaProfiles }) => {
    const brandProfiles = mediaProfiles.filter(brandProfiles => brandProfiles.brand === true);
    const otherProfiles = mediaProfiles.filter(otherProfiles => otherProfiles.brand === false)

    return (
        <>
        {otherProfiles.map((profile, key) => (
            <a href={profile.myURL} target="_blank">
                <span class="iconCSS" >
                    <FontAwesomeIcon id="iconLink" icon={profile.iconClass} size="3x" color="black" />
                </span>
            </a>
        ))}
        {brandProfiles.map((profile, key) => (
            <a href={profile.myURL} target="_blank">
                <span class="iconCSS" >
                    <FontAwesomeIcon id="iconLink" icon={profile.iconClass} size="3x" color="black" />
                </span>
            </a>
        ))}
        </>
    );
}

export default MediaBlock;