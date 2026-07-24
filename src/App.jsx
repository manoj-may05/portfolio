import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import "./App.css";
import { NAV_LINKS } from "./data/data";

function App() {
  const scrollTo = (id) => {
    const element = document.getElementById(id);

    if (!element) return;

    const navbar = document.querySelector(".portfolio-nav");

    const navbarHeight = navbar
      ? navbar.offsetHeight
      : 80;

    const elementPosition =
      element.getBoundingClientRect().top +
      window.scrollY;

    const scrollPosition =
      elementPosition - navbarHeight;

    window.scrollTo({
      top: scrollPosition,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Navbar
        NAV_LINKS={NAV_LINKS}
        scrollTo={scrollTo}
      />

      <main>
        <Hero scrollTo={scrollTo} />

        <About />

        <Skills />

        <Projects />

        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;