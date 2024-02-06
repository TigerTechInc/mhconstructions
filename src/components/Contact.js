import React from 'react';
import MediaContent from './Media/MediaContent';
import MediaBlock from './Media/MediaBlock';

const Contact = () => (
  <>
    <div id="contact" style={styles.container}>
      <h1 style={styles.heading}>Get in Touch</h1>

      <p style={styles.quote}>
        Need a quote? Let's discuss your project. Reach us at{' '}
        <strong style={styles.contactNumber}>647-325-9190</strong>.
      </p>

      <div>
        <MediaBlock mediaProfiles={MediaContent} />
      </div>
      <p style={styles.footerText}>Copyright © 2024 – MH Concrete and Renovations Inc. All Right Reserved.</p>
      <p style={styles.footerText}>Designed and Developed by TigerTech</p>
    </div>
  </>
);

const styles = {
  container: {
    background: '#1a1a1a', // Dark background color
    color: '#fff', // Light text color
    textAlign: 'center',
    paddingTop: '5vh',
    paddingBottom: '15vh',
    boxSizing: 'border-box',
  },
  heading: {
    fontSize: '48px', // Larger font size for heading
    marginBottom: '2vh',
    color: '#3498db', // Accent color
    letterSpacing: '1px', // Slight letter-spacing for style
  },
  quote: {
    fontSize: '20px', // Increased font size for the quote
    lineHeight: '1.6',
    marginBottom: '4vh',
  },
  contactNumber: {
    color: '#e74c3c', // Red color for emphasis
  },
  footerText: {
    fontSize: '18px', // Adjusted font size for footer text
    margin: '2vh 0',
    opacity: '0.8', // Reduced opacity for a subtle look
  },
};

export default Contact;
