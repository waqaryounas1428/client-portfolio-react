import pic2 from "../images/2.jpg";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";
import "./Contact.css";

export const Contact = () => {
  return (
    <section id="contact" className="contact-section scroll-effect">

      {/* LEFT SIDE - CONTACT INFO */}
      <div className="contact-left scroll-effect">
        <h1 className="contact-title scroll-effect">Let’s Achieve Success Together</h1>

<p className="contact-description scroll-effect">
  Whether you are preparing for <span className="highlight">CSS</span>,
  <span className="highlight"> PMS</span>,
  <span className="highlight"> PCS</span>, or other
  <span className="highlight"> competitive examinations</span>, I am here to help you strengthen your
  <span className="highlight"> writing skills</span>,
  <span className="highlight"> analytical thinking</span>, and
  <span className="highlight"> subject knowledge</span> to achieve outstanding results.
</p>

        <div className="contact-items scroll-effect">
          <div className="contact-item scroll-effect">
            <FaEnvelope className="contact-icon" />
            <span>nasrullah.agri87@gmail.com</span>
          </div>

          <div className="contact-item scroll-effect">
            <FaPhone className="contact-icon" />
            <span>0333-1409480</span>
          </div>

          {/* <div className="contact-item scroll-effect">
            <FaLinkedin className="contact-icon" />
            <a
              href="https://www.linkedin.com/in/waqar-younas1428/"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/waqar-younas1428
            </a>
          </div> */}

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

      {/* RIGHT SIDE - IMAGE */}
      <div className="contact-right scroll-effect">
        <img src={pic2} alt="profile" className="contact-image" />
      </div>

    </section>
  );
};