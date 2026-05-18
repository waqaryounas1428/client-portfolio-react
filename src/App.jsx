import { useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Expertise } from "./components/Expertise";
import { Timeline } from "./components/Timeline";
import { Research } from "./components/Research";
import { Toolkit } from "./components/Toolkit";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {

  useEffect(() => {

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    });

    const hiddenElements = document.querySelectorAll(".scroll-effect");

    hiddenElements.forEach((el) => observer.observe(el));

  }, []);

  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Expertise />
      <Timeline />
      <Research />
      <Toolkit />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;