// import React from 'react';
// import '../styles/Footer.css';

// function Footer() {
//   return (
//     <footer className="main-footer">
//       <p>&copy; 2024 FAKTORY STUDIOS. All rights reserved.</p>
    
//     </footer>
    
//   );
// }

// export default Footer;
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="main-footer">
      <div className="footer-content">
        <div className="footer-left">
          <p>&copy; 2024 FAKTORY STUDIOS. All rights reserved.</p>
        </div>
        <div className="footer-right">
          <nav>
            <ul>
              <li><Link to="/privacy">Privacy Policy</Link></li>
              <li><Link to="/terms">Terms of Service</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export default Footer;