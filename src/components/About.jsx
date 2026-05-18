import { FaGraduationCap, FaCode, FaRocket, FaHeart } from "react-icons/fa";
import "./About.css";

export const About = () => {
  return (
    <section id="about" className="about scroll-effect">
      <div className="about-container">
        <h2 className="about-title">About Me</h2>
        <p className="about-subtitle">Passionate learner | innovative | Philosophical approach
</p>

        <div className="about-content">
          <div className="about-card scroll-effect">
            <FaGraduationCap className="about-icon" />
            <h3>Education</h3>
            <p>
              M.Sc. in Agricultural Sciences (Entomology) and B.A. in Political Science with expertise in insect science, crop protection, and governance.
            </p>
          </div>

          <div className="about-card scroll-effect">
            <FaCode className="about-icon" />
            <h3>Development</h3>
            <p>
              Specialized in Essay Writing, Precis & Composition with strong analytical skills focused on clear, structured expression for competitive exams.
            </p>
          </div>

          <div className="about-card scroll-effect">
            <FaRocket className="about-icon" />
            <h3>Innovation</h3>
            <p>
              Mastering writing skills through innovative techniques and structured practice to develop clarity, creativity, and excellence.
            </p>
          </div>

          <div className="about-card scroll-effect">
            <FaHeart className="about-icon" />
            <h3>Passion</h3>
            <p>
              Committed to continuous learning and growth, turning complex problems into elegant solutions through philosophical analysis.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
