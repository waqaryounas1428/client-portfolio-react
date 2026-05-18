import { useState, useEffect } from "react";
import {
  FaPencilAlt,
  FaFileAlt,
  FaNewspaper,
  FaLandmark,
  FaFlagUsa,
  FaGlobeAmericas,
  FaTree,
  FaBalanceScale
} from "react-icons/fa";
import "./Expertise.css";

export const Expertise = () => {
  const [mobile, setMobile] = useState(false);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth <= 768;
      setMobile(isMobile);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleSeeMore = () => {
    setShowAll(true);
  };

  const cards = [
    {
      icon: <FaPencilAlt className="icon" />,
      title: "English Essay Writing",
      desc: "Developing structured, analytical and impactful essay writing skills for competitive examinations."
    },
    {
      icon: <FaFileAlt className="icon" />,
      title: "English Precis & Composition",
      desc: "Enhancing comprehension, summarization, and advanced writing skills with clarity and precision."
    },
    {
      icon: <FaNewspaper className="icon" />,
      title: "Current Affairs",
      desc: "Building strong awareness of national and international developments for competitive success."
    },
    {
      icon: <FaLandmark className="icon" />,
      title: "Political Science (Philosophy)",
      desc: "Studying political theories, governance systems, and philosophical foundations of politics."
    },
    {
      icon: <FaFlagUsa className="icon" />,
      title: "History of USA",
      desc: "Understanding the historical evolution, key events, and development of the United States."
    },
    {
      icon: <FaGlobeAmericas className="icon" />,
      title: "Geography",
      desc: "Understanding physical and human geography with analytical and conceptual clarity."
    },
    {
      icon: <FaTree className="icon" />,
      title: "Agriculture & Forestry",
      desc: "Developing knowledge of sustainable agriculture, environmental systems, and forest resources."
    },
    {
      icon: <FaBalanceScale className="icon" />,
      title: "Criminology",
      desc: "Studying the causes, patterns, and prevention of crime with a focus on criminal behavior, justice systems, and law enforcement."
    }
  ];

  // Desktop: show all 8 cards always
  // Mobile: show first 4 cards initially, all 8 after clicking
  const displayedCards = mobile && !showAll ? cards.slice(0, 4) : cards;

  return (
    <section id="expertise" className="expertise scroll-effect">
      <h1 className="title scroll-effect">Areas of Expertise</h1>

      <p className="subtitle scroll-effect">
        Passionate learner | innovative | Philosophical approach | with special focus on learning skills
      </p>

      <div className="cards">
        {displayedCards.map((card, index) => (
          <div 
            className={index < 4 ? "card scroll-effect" : "card"} 
            key={index}
            style={index >= 4 ? { opacity: 1, transform: 'translateY(0)', filter: 'blur(0)' } : {}}
          >
            <h3>
              {card.icon}
              {card.title}
            </h3>
            <p>{card.desc}</p>
          </div>
        ))}
      </div>

      {/* See More Button - Only shows on mobile when first 4 cards are visible */}
      {mobile && !showAll && (
        <button
          className="see-more-btn"
          onClick={handleSeeMore}
        >
          See More 
        </button>
      )}
    </section>
  );
};
