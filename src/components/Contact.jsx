import pic2 from "../images/2.jpg";
import { FaEnvelope, FaPhone, FaGithub, FaTwitter } from "react-icons/fa";
import "./Contact.css";

export const Contact = () => {
  return (
    <section id="contact" className="contact-section scroll-effect">

      {/* TITLE (CENTER TOP) */}
      <h1 className="contact-title scroll-effect">Let's Achieve Success Together</h1>

      {/* TOP ROW - IMAGE LEFT, DESCRIPTION CARD RIGHT */}
      <div className="contact-top-row scroll-effect">

        {/* LEFT SIDE - IMAGE */}
        <div className="contact-image-wrapper scroll-effect">
          <div className="contact-image-card scroll-effect">
            <img src={pic2} alt="profile" className="contact-image" />
          </div>
        </div>

        {/* RIGHT SIDE - DESCRIPTION CARD */}
        <div className="contact-description-wrapper scroll-effect">
          {/* <div className="contact-description-card scroll-effect"> */}
            <div className="contact-description-card scroll-effect">
              <p className="contact-description">
                Whether you are preparing for <span className="highlight">CSS</span>,
                <span className="highlight"> PMS</span>,
                <span className="highlight"> PCS</span>, or other
                <span className="highlight"> competitive examinations</span>, I am here to help you strengthen your
                <span className="highlight"> writing skills</span>,
                <span className="highlight"> analytical thinking</span>, and
                <span className="highlight"> subject knowledge</span> to achieve outstanding results. Together, we will work on
                <span className="highlight"> skill-based areas</span> such as
                <span className="highlight"> Art of Writing</span>,
                <span className="highlight"> Grammar & Composition</span>,
                <span className="highlight"> Analytical Reasoning & Mathematics</span>, and
                <span className="highlight"> Question Attempting Techniques</span> with a strong focus on
                <span className="highlight"> continuous practice</span>,
                <span className="highlight"> refinement</span>, and
                <span className="highlight"> exam-oriented preparation</span> until you achieve your goals.
              </p>
            </div>
          {/* </div> */}
        </div>

      </div>

    </section>
  );
};
