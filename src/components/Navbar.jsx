import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import "../App.css";

const SECTION_MAP = {
  Home: "hero",
  About: "about",
  Skills: "skills",
  Projects: "projects",
  Contact: "contact",
};

export default function Navbar({ NAV_LINKS, scrollTo }) {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const sections = Object.values(SECTION_MAP);

    const handleScroll = () => {
      const scrollPosition =
        window.scrollY + window.innerHeight * 0.35;

      let currentSection = "hero";

      sections.forEach((id) => {
        const section = document.getElementById(id);

        if (!section) return;

        const sectionTop = section.offsetTop;
        const sectionBottom =
          sectionTop + section.offsetHeight;

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionBottom
        ) {
          currentSection = id;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleClick = (link) => {
    const sectionId = SECTION_MAP[link];

    scrollTo(sectionId);
    setOpen(false);
  };

  return (
    <header className="portfolio-nav">
      <div className="nav-inner">

        <nav className="nav-links">
          {NAV_LINKS.map((link) => {
            const sectionId = SECTION_MAP[link];

            return (
              <button
                key={link}
                onClick={() => handleClick(link)}
                className={`
                  nav-button
                  ${activeSection === sectionId ? "nav-active" : ""}
                  ${link === "Contact" ? "nav-contact" : ""}
                `}
              >
                {link}
              </button>
            );
          })}
        </nav>

        <button
          className="hamburger"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <div className={`mobile-menu ${open ? "mobile-menu-open" : ""}`}>
        {NAV_LINKS.map((link) => {
          const sectionId = SECTION_MAP[link];

          return (
            <button
              key={link}
              onClick={() => handleClick(link)}
              className={`
                nav-button
                ${activeSection === sectionId ? "nav-active" : ""}
                ${link === "Contact" ? "nav-contact" : ""}
              `}
            >
              {link}
            </button>
          );
        })}
      </div>
    </header>
  );
}