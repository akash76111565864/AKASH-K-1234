import React from 'react';
import aboutImage from './Aboutpage.png'; 

const About = () => {
  return (
    <div>
      <h1>About Page</h1>
      <img 
        src={aboutImage} 
        alt="About" 
        style={{ maxWidth: '100%', height: 'auto' }} 
      />

    </div>
  );
};

export default About;
