// About.js
import React from 'react';
import './About.css'; // Make sure to create this CSS file for styling

const About = () => {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <p>
        Welcome to our website! We are passionate about providing the best service and ensuring
        that our users have the best experience possible. Our team is dedicated to excellence
        and constantly working to improve our offerings.
      </p>
      <p>
        If you have any questions or feedback, feel free to <a href="/contact">contact us</a>.
      </p>
    </div>
  );
};

export default About;
