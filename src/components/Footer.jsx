import { FaGithub, FaLinkedin, FaEnvelope, FaHeart, FaPhone } from "react-icons/fa";
import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3 className="footer-logo">NASRULLAH S'b</h3>
          <p className="footer-tagline">Academic Researcher & Scholar</p>
          <p className="footer-description">
            Dedicated to advancing knowledge through research, writing, and academic excellence in social sciences and development studies.
          </p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#expertise">Expertise</a></li>
            <li><a href="#timeline">Journey</a></li>
            <li><a href="#research">Research</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact Info</h4>
          <div className="footer-contact">
            <p><FaEnvelope /> nasrullah.agri87@gmail.com</p>
            <p><FaPhone /> 03331409480</p>
          </div>
        </div>

        {/* <div className="footer-section">
          <h4>Connect</h4>
          <div className="footer-socials">
            <a href="https://share.google/YiKB2rgzDklikDDlI" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Writers Inn">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/waqar-younas1428/" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="mailto:writersin9@gmail.com" className="social-icon" aria-label="Email">
              <FaEnvelope />
            </a>
          </div>
        </div> */}
      </div>

      <div className="footer-bottom">
        <p>
          Made with <FaHeart className="heart-icon" /> by Nasrullah © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};
