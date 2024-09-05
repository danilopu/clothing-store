import React from 'react';
import '../styles/About.css';

function About() {
  return (
    <div className="about-page">
      <h1>About Faktory Studios</h1>
      <div className="about-content">
        <p>
          Faktory Studios is a state-of-the-art recording and production facility
          dedicated to helping artists, musicians, and content creators bring their
          visions to life. Founded in 2010, we have been at the forefront of the
          music and media production industry, constantly evolving to meet the
          needs of our diverse clientele.
        </p>
        <p>
          Our team of experienced professionals is committed to providing
          top-notch services in music production, studio space rental, media
          creation, and equipment rental. We believe in fostering creativity
          and innovation, and our cutting-edge facilities are designed to
          inspire and empower our clients.
        </p>
        <p>
          At Faktory Studios, we're not just a service provider – we're your
          creative partner. Whether you're a seasoned professional or just
          starting out, we're here to help you achieve your goals and push
          the boundaries of your art.
        </p>
      </div>
      <div className="team-section">
        <h2>Our Team</h2>
        <div className="team-members">
          {/* Add team member profiles here */}
          <div className="team-member">
            <img src="/images/team-member1.jpg" alt="Team Member 1" />
            <h3>John Doe</h3>
            <p>Lead Producer</p>
          </div>
          <div className="team-member">
            <img src="/images/team-member2.jpg" alt="Team Member 2" />
            <h3>Jane Smith</h3>
            <p>Studio Manager</p>
          </div>
          {/* Add more team members as needed */}
        </div>
      </div>
    </div>
  );
}

export default About;
