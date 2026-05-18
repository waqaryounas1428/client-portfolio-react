import pic2 from "../images/2.jpg";
import { FaEnvelope, FaPhone, FaGithub } from "react-icons/fa";
import "./Contact.css";

export const Contact = () => {
  return (
    <section id="contact" className="contact-section scroll-effect">
      
      {/* TOP - TITLE AND DESCRIPTION (CENTER) */}
      <div className="contact-top scroll-effect">
        <h1 className="contact-title scroll-effect">Let's Achieve Success Together</h1>

        {/* Description Card */}
        <div className="contact-description-card scroll-effect">
          <p className="contact-description">
            Whether you are preparing for <span className="highlight">CSS</span>,
            <span className="highlight"> PMS</span>,
            <span className="highlight"> PCS</span>, or other
            <span className="highlight"> competitive examinations</span>, I am here to help you strengthen your
            <span className="highlight"> writing skills</span>,
            <span className="highlight"> analytical thinking</span>, and
            <span className="highlight"> subject knowledge</span> to achieve outstanding results.
          </p>
        </div>
      </div>

      {/* BOTTOM - IMAGE (LEFT) AND CONTACT INFO (RIGHT) */}
      <div className="contact-bottom scroll-effect">
        
        {/* LEFT SIDE - IMAGE */}
        <div className="contact-left scroll-effect">
          <div className="contact-image-card scroll-effect">
            <img src={pic2} alt="profile" className="contact-image" />
          </div>
        </div>

        {/* RIGHT SIDE - CONTACT INFO */}
        <div className="contact-right scroll-effect">
          <div className="contact-info-card scroll-effect">
            <div className="contact-items">
              <div className="contact-item scroll-effect">
                <FaEnvelope className="contact-icon" />
                <a href="mailto:nasrullah.agri87@gmail.com">nasrullah.agri87@gmail.com</a>
              </div>

              <div className="contact-item scroll-effect">
                <FaPhone className="contact-icon" />
                <a href="tel:03331409480">0333-1409480</a>
              </div>

              <div className="contact-item scroll-effect">
                <FaGithub className="contact-icon" />
                <a
                  href="https://share.google/YiKB2rgzDklikDDlI"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Writers Inn (writersin9-ctrl)
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>

    </section>
  );
};
