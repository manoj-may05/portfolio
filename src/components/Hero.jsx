import { ArrowDown, ArrowUpRight } from "lucide-react";
import selfImage from "../assets/self.png";
import "../App.css";

export default function Hero({ scrollTo }) {
  return (
    <section id="hero" className="hero-section">
      <div className="section-container">

        {/* Topline */}
        <div className="hero-topline">
          <div><span>01-</span>Introduction</div>

          <div className="availability">
            <span className="availability-dot" />
            Seeking New Opportunities
          </div>
        </div>

        {/* Main Hero Layout */}
        <div className="hero-layout">

          {/* Left Content */}
          <div className="hero-content">

            <p className="hero-kicker">
              FULL STACK DEVELOPER
            </p>

            <h1>
              I build digital
              <br />

              <span className="hero-outline">
                experiences
              </span>

              <br />

              that feel <em>simple.</em>
            </h1>

            <p className="hero-description">
              I'm Manoj, an aspiring Full Stack Developer focused on
              building practical, scalable, and user-friendly web
              applications with React, Python, FastAPI, and PostgreSQL.
            </p>

            {/* Actions */}
            <div className="hero-actions">

              <button
                className="hero-primary-button"
                onClick={() => scrollTo("projects")}
              >
                Explore my work
                <ArrowUpRight size={18} />
              </button>

              <button
                className="hero-scroll-button"
                onClick={() => scrollTo("about")}
              >
                <ArrowDown size={18} />
                Scroll to explore
              </button>

            </div>

          </div>

          {/* Right Image */}
          <div className="hero-visual">

            <div className="image-frame">

              <img
                src={selfImage}
                alt="Portrait of Manoj, Full Stack Developer"
              />

              <div className="image-caption">
                <span>Based in India</span>
                <span>Open to work</span>
              </div>

            </div>

          </div>

        </div>

        {/* Tech Stack */}
        <div className="hero-bottom">
          <span>React.js</span>
          <span>Python</span>
          <span>FastAPI</span>
          <span>PostgreSQL</span>
          <span>JavaScript</span>
        </div>

      </div>
    </section>
  );
}