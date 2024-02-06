import React from 'react';

const About = () => (
  <>
    <div id="about" style={styles.container}>
      <h1 style={styles.heading}>About Us</h1>
      <p style={styles.paragraph}>
        Welcome to MH Concrete and Renovations, where craftsmanship meets creativity! Nestled in the heart of the GTA, we take pride in transforming dreams into reality. Our team specializes in bespoke renovation projects, offering a symphony of elegance and durability.
      </p>
      <p style={styles.paragraph}>
        With a legacy of over a decade, our artisans bring unparalleled expertise to every endeavor. Marvel at our portfolio showcasing masterpieces ranging from enchanting backyards and serene patios to captivating decks and meticulously designed driveways. We go beyond the ordinary, creating aggregate stamp sidewalks that leave a lasting impression.
      </p>
      <p style={styles.paragraph}>
        Contact us today at <strong>647-325-9190</strong> to embark on a journey of transforming your living space. Let us weave magic into your home, promising not just renovation but a lifestyle upgrade.
      </p>
      <p style={styles.slogan}>Elevate your living with the MH touch - Excellence isn't just a choice; it's our commitment to your dream space</p>
    </div>
  </>
);

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    maxWidth: '800px',
    margin: 'auto',
    padding: '30px',  // Increased padding for a luxurious feel
    backgroundColor: '#f9f9f9',  // Lighter background for a sophisticated look
    borderRadius: '12px',  // Increased border-radius for a smoother appearance
    boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.1)',  // Subtle box shadow for depth
  },
  heading: {
    fontSize: '42px',  // Increased font size for emphasis
    color: '#333',
    marginBottom: '20px',
    textTransform: 'uppercase',  // Uppercase for a bold touch
    letterSpacing: '1px',  // Slight letter-spacing for clarity
  },
  paragraph: {
    fontSize: '20px',  // Increased font size for readability
    lineHeight: '1.6',
    color: '#555',
    marginBottom: '20px',  // Increased margin for better spacing
  },
  slogan: {
    fontSize: '24px',  // Increased font size for emphasis
    color: '#ff6600',
    fontStyle: 'italic',
    marginTop: '30px',  // Increased margin for better spacing
    letterSpacing: '1px',  // Slight letter-spacing for clarity
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',  // Adding a subtle text shadow
    transition: 'color 0.3s ease-in-out',  // Adding a smooth color transition on hover
    cursor: 'pointer',  // Changing cursor on hover for a clickable feel
  },
};

export default About;
