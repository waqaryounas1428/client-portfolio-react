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
        "A 2015 field study at Sindh Agriculture University and Quetta evaluated neem extract against potato leafhopper on potato crops. Results showed that higher neem doses effectively reduced infestation, with 100cc/plot giving the best control.",
      year: "2018",
      status: "Published",
      linkHref: "https://share.google/yRRYvgOSHLsp8YITR",
      linkText: "View Publication",
      linkIcon: <FaExternalLinkAlt />,
      linkClass: "research-link vip-link"
    },
    {
      icon: <FaFileAlt className="research-icon" />,
      title: "Research Thesis",
      topic: "Topic: Impact of Neem Extract on Potato Leafhopper Control",
      description:
        "A field trial conducted in 2015 evaluated different neem extract doses against potato leafhopper in potato crops. Results showed that higher neem concentrations effectively reduced pest infestation, with 100cc/plot providing the best control.",
      year: "2017",
      status: "Published",
      linkHref: "/Neem-Research-Paper.pdf",
      linkText: "View Full PDF",
      linkIcon: <FaFilePdf />,
      linkClass: "research-link"
    },
    {
      icon: <FaFileAlt className="research-icon" />,
      title: "Newspaper Articles",
      topic: "Topic: Mishandling Floods",
      description:
        "A critical analysis of Pakistan's flood management highlights the devastating impact of recurring floods, the delayed response of state institutions, and the suffering of affected communities. It emphasizes the need for effective disaster preparedness, transparent relief distribution, responsible leadership, and coordinated efforts by government and volunteer organizations to minimize loss of life and property.",
      year: "2022",
      status: "Published",
      linkHref: "/Mishandling Floods-1.pdf",
      linkText: "View Full PDF",
      linkIcon: <FaFilePdf />,
      linkClass: "research-link"
    },
    {
      variant: "vip",
      badge: "Featured",
      icon: <FaFileAlt className="research-icon" />,
      title: "Essays & Paragraphs",
      topic: "Topic: Development Journey of Pakistan, 1947-present",
      description:
        "Pakistan was created to ensure the welfare and progress of its people, but its development has remained limited in many social and economic sectors. Compared to countries like China, Bangladesh, and Western nations, Pakistan has struggled to achieve significant progress. Studying successful global development models could help the country improve its future growth and prosperity.",
      year: "2024",
      status: "Published",
      linkHref: "/Essay write-up.docx.pdf",
      linkText: "View Full PDF",
      linkIcon: <FaFilePdf />,
      linkClass: "research-link vip-link"
    }
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
