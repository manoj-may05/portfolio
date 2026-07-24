import { ArrowDown, ArrowUpRight } from "lucide-react";
import selfImage from "../assets/self.png";
import "../App.css"

export default function Hero({ scrollTo }) {
  return (
    <section id="hero" className="hero-section">
      <div className="section-container">

        <div className="hero-topline">
          <span>01 — Introduction</span>

          <span className="availability">
            <span className="availability-dot" />
            Available for opportunities
          </span>
        </div>

        <div className="hero-layout">

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
              I’m Manoj, an aspiring Full Stack Developer
              focused on building practical, scalable, and
              user-friendly web applications with React,
              Python, FastAPI, and PostgreSQL.
            </p>

            <div className="hero-actions">

              <button
                className="hero-primary-button"
                onClick={() =>
                  scrollTo("projects")
                }
              >
                Explore my work

                <ArrowUpRight size={18} />
              </button>

              <button
                className="hero-scroll-button"
                onClick={() =>
                  scrollTo("about")
                }
              >
                <ArrowDown size={18} />

                Scroll to explore
              </button>

            </div>

          </div>

          <div className="hero-visual">

            <div className="image-frame">

              <div className="image-number">
                01
              </div>

              <img
                src={selfImage}
                alt="Manoj"
              />

              <div className="image-caption">
                <span>Based in India</span>
                <span>Open to work</span>
              </div>

            </div>

          </div>

        </div>

        <div className="hero-bottom">

          <span>
            React.js
          </span>

          <span>
            Python
          </span>

          <span>
            FastAPI
          </span>

          <span>
            PostgreSQL
          </span>

          <span>
            JavaScript
          </span>

        </div>

      </div>
    </section>
  );
}