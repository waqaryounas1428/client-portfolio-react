import { FaBriefcase, FaGraduationCap } from "react-icons/fa";
import "./Timeline.css";

export const Timeline = () => {
  const journeyData = [
    {
      icon: <FaBriefcase />,
      date: "2021 - Present",
      title: "Director, WICA",
      desc: "Mentoring competitive exam aspirants."
    },
    {
      icon: <FaBriefcase />,
      date: "2017 - Present",
      title: "Agriculture Officer",
      desc: "Agricultural development & field expertise."
    },
    {
      icon: <FaGraduationCap />,
      date: "2017",
      title: "M.Sc Agriculture",
      desc: "Sindh Agriculture University."
    },
    // {
    //   icon: <FaGraduationCap />,
    //   date: "2012",
    //   title: "B.Sc Agriculture",
    //   desc: "Balochistan Agriculture College."
    // },
    {
      icon: <FaGraduationCap />,
      date: "2010",
      title: "B.A Political Science",
      desc: "University of Balochistan."
    }
  ];

  return (
    <section id="timeline" className="timeline-section scroll-effect">
      <h2 className="timeline-title scroll-effect">My Journey</h2>
      <p className="timeline-subtitle scroll-effect">Education & Professional Timeline</p>

      <div className="timeline-cards">
        {journeyData.map((item, index) => (
          <div className="timeline-card scroll-effect" key={index}>
            <span className="timeline-date">{item.date}</span>
            <h3>
              <span className="timeline-icon">{item.icon}</span>
              {item.title}
            </h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
