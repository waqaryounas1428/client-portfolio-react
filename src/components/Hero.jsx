import pic2 from "../images/2.jpg";
import "./Hero.css";

export const Hero = () => {
  return (
    <section id="home">
      <div className="name-title">
        <p className="name scroll-effect">
          <span className="hello">Hello, I'm</span><br />
          <span className="user-name">Nasrullah S'b</span><br />
          <span className="titles">agriculture Officer (B-17)</span>
        </p>
      </div>


      <div className="content-wrapper">
        <div className="intro-left">
          <div className="intro scroll-effect">
  <p>
    I am a highly accomplished <span className="highlight">Agriculture Officer</span> and Founder & Director of
    <span className="highlight"> Writers INN Competitive Academy (WICA)</span>, where I have been mentoring
    <span className="highlight"> competitive exam aspirants</span> since 2021. With a strong academic background and excellent command of
    <span className="highlight"> English</span>, I specialize in
    <span className="highlight"> Essay Writing</span>,
    <span className="highlight"> Paragraph Writing</span>,
    <span className="highlight"> Precis & Composition</span>, and
    <span className="highlight"> English Grammar (foundation)</span>.

    Through a <span className="highlight">result-oriented teaching approach</span>,
    <span className="highlight"> strategic guidance</span>, and
    <span className="highlight"> student-centered mentorship</span>, I have trained numerous candidates for
    <span className="highlight"> CSS</span>,
    <span className="highlight"> PMS</span>,
    <span className="highlight"> PCS</span>, and other
    <span className="highlight"> public service examinations</span>.

    My success in qualifying the
    <span className="highlight"> Tehsildar'2025 Written Examination</span> reflects my
    <span className="highlight"> intellectual strength</span>,
    <span className="highlight"> subject expertise</span>, and
    <span className="highlight"> commitment to excellence</span>. Under my leadership,
    <span className="highlight"> WICA</span> has become a trusted platform for developing
    <span className="highlight"> confident</span>,
    <span className="highlight"> analytical</span>, and
    <span className="highlight"> high-performing candidates</span> for competitive exams.
  </p>
</div>
        </div>

        <div className="img-right">
          <div className="hero-right scroll-effect">
            <img src={pic2} alt="profile" />
          </div>
        </div>

      </div>
    </section>
  );
};
