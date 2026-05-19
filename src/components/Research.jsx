import { FaBook, FaFileAlt, FaExternalLinkAlt, FaCrown, FaFilePdf } from "react-icons/fa";
import "./Research.css";

export const Research = () => {
  const cards = [
    {
      variant: "vip",
      badge: "Featured",
      icon: <FaBook className="research-icon" />,
      title: "Research Paper 1",
      topic: "Topic: EFFECT OF NEEM EXTRACT ON LEAFHOPPER OF POTATO CROP",
      description:
        "Field study evaluating neem extract effectiveness against potato leafhopper. Higher neem doses significantly reduced pest infestation, with 100cc/plot providing optimal control.",
      year: "2018",
      status: "Published",
      linkHref: "https://share.google/yRRYvgOSHLsp8YITR",
      linkText: "View Publication",
      linkIcon: <FaExternalLinkAlt />,
      linkClass: "research-link vip-link"
    },
    
    {
      variant: "vip",
      badge: "Featured",
      icon: <FaFileAlt className="research-icon" />,
      title: "Essays & Paragraphs",
      topic: "Topic: Development Journey of Pakistan, 1947-present",
      description:
        "Examines Pakistan's development journey from 1947 to present, analyzing progress in social and economic sectors. Compares with global development models to identify pathways for future growth and prosperity.",
      year: "2024",
      status: "Published",
      linkHref: "/Essay write-up.docx.pdf",
      linkText: "View Full PDF",
      linkIcon: <FaFilePdf />,
      linkClass: "research-link vip-link"
    },
    {
      icon: <FaFileAlt className="research-icon" />,
      title: "Newspaper Articles",
      topic: "Topic: Mishandling Floods",
      description:
        "Critical analysis of Pakistan's flood management examining recurring disasters, institutional response delays, and community impact. Emphasizes disaster preparedness, transparent relief distribution, and coordinated government-volunteer efforts.",
      year: "2022",
      status: "Published",
      linkHref: "/Mishandling Floods-1.pdf",
      linkText: "View Full PDF",
      linkIcon: <FaFilePdf />,
      linkClass: "research-link"
    },
    {
      icon: <FaFileAlt className="research-icon" />,
      title: "Research Thesis",
      topic: "Topic: Impact of Neem Extract on Potato Leafhopper Control",
      description:
        "Comprehensive field trial examining neem extract doses for potato leafhopper control. Higher concentrations demonstrated effective pest reduction with optimal results at 100cc/plot.",
      year: "2017",
      status: "Published",
      linkHref: "/Neem-Research-Paper.pdf",
      linkText: "View Full PDF",
      linkIcon: <FaFilePdf />,
      linkClass: "research-link"
    },
  ];

  return (
    <section id="research" className="research scroll-effect">
      <h1 className="research-title scroll-effect">Research & Publications</h1>

      <p className="research-subtitle scroll-effect">
        Academic research work and scholarly contributions
      </p>

      <div className="research-grid">
        {cards.map((card, index) => (
          <div
            className={`research-card ${card.variant === "vip" ? "vip-card" : ""} scroll-effect`}
            key={index}
          >
            {card.variant === "vip" && (
              <div className="vip-badge">
                <FaCrown /> {card.badge}
              </div>
            )}
            <h3>
              {card.icon}
              {card.title}
            </h3>
            <p className="research-topic">{card.topic}</p>
            <p className="research-description">{card.description}</p>
            <div className="research-meta">
              <span className="research-year">{card.year}</span>
              <span className="research-status">{card.status}</span>
            </div>
            <div className="research-buttons">
              <a
                href={card.linkHref}
                target="_blank"
                rel="noopener noreferrer"
                className={card.linkClass}
              >
                {card.linkIcon} {card.linkText}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
