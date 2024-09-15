// import React from 'react';
// import '../styles/About.css';

// function About() {
//   return (
//     <div className="about-page">
//       <h1>About Faktory Studios</h1>
//       <div className="about-content">
//         <p>
//           Faktory Studios is a state-of-the-art recording and production facility
//           dedicated to helping artists, musicians, and content creators bring their
//           visions to life. Founded in 2010, we have been at the forefront of the
//           music and media production industry, constantly evolving to meet the
//           needs of our diverse clientele.
//         </p>
//         <p>
//           Our team of experienced professionals is committed to providing
//           top-notch services in music production, studio space rental, media
//           creation, and equipment rental. We believe in fostering creativity
//           and innovation, and our cutting-edge facilities are designed to
//           inspire and empower our clients.
//         </p>
//         <p>
//           At Faktory Studios, we're not just a service provider – we're your
//           creative partner. Whether you're a seasoned professional or just
//           starting out, we're here to help you achieve your goals and push
//           the boundaries of your art.
//         </p>
//       </div>
//       <div className="team-section">
//         <h2>Our Team</h2>
//         <div className="team-members">
//           {/* Add team member profiles here */}
//           <div className="team-member">
//             <img src="/images/team-member1.jpg" alt="Team Member 1" />
//             <h3>John Doe</h3>
//             <p>Lead Producer</p>
//           </div>
//           <div className="team-member">
//             <img src="/images/team-member2.jpg" alt="Team Member 2" />
//             <h3>Jane Smith</h3>
//             <p>Studio Manager</p>
//           </div>
//           {/* Add more team members as needed */}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default About;
import React from 'react';
import '../styles/About.css';

function About() {
  return (
    <div className="about-page">
      <section className="hero">
        <h1>About Faktory Studios</h1>
        <p>Empowering creativity since 2010</p>
      </section>

      <section className="mission">
        <h2>Our Mission</h2>
        <p>
          At Faktory Studios, we're dedicated to helping artists, musicians, and content creators bring their visions to life. 
          Our state-of-the-art facilities and experienced team are here to support your creative journey.
        </p>
      </section>

      <section className="history">
        <h2>Our History</h2>
        <p>
          Founded in 2010, Faktory Studios has been at the forefront of the music and media production industry. 
          We've continuously evolved to meet the needs of our diverse clientele, always staying ahead of the curve in technology and trends.
        </p>
      </section>

      <section className="services-overview">
        <h2>What We Offer</h2>
        <ul>
          <li>Music Production</li>
          <li>Studio Space Rental</li>
          <li>Media Creation</li>
          <li>Equipment Rental</li>
          <li>Professional Consultation</li>
        </ul>
      </section>

      <section className="team-section">
        <h2>Our Team</h2>
        <div className="team-members">
          <div className="team-member">
            <img src="/images/team-member1.jpg" alt="John Doe" />
            <h3>John Doe</h3>
            <p>Lead Producer</p>
          </div>
          <div className="team-member">
            <img src="/images/team-member2.jpg" alt="Jane Smith" />
            <h3>Jane Smith</h3>
            <p>Studio Manager</p>
          </div>
          <div className="team-member">
            <img src="/images/team-member3.jpg" alt="Mike Johnson" />
            <h3>Mike Johnson</h3>
            <p>Audio Engineer</p>
          </div>
        </div>
      </section>

      <section className="cta">
        <h2>Ready to Create?</h2>
        <p>Let's bring your vision to life. Contact us today to get started on your next project.</p>
        <a href="/contact" className="cta-button">Get in Touch</a>
      </section>
    </div>
  );
}

export default About;