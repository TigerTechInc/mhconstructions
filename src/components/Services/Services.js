import React from 'react';

const Services = ({ serviceProfiles }) => (
  <div id="services" className="mt-5">
    <h1 className="text-center mb-4">Services</h1>

    <div className="services-container">
      {serviceProfiles.map((profile, key) => (
        <div className="service-card" key={key}>
          <img
            className="service-image"
            src={process.env.PUBLIC_URL + '/serviceImages/' + profile.imageName}
            alt="Service"
          />
          <div className="service-name">{profile.serviceName}</div>
        </div>
      ))}
    </div>
  </div>
);

export default Services;
