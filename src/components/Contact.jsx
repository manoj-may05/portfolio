import {
  Mail,
  ArrowUpRight,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import "../App.css";

export default function Contact() {
  return (
    <section id="contact">

      <div className="section-container">

        <div className="section-label">
          <span>05</span>
          Get in touch
        </div>

        <div className="contact-layout">

          <div>

            <h2>
              Have an idea?
              <br />

              Let's make it
              <br />

              <em>real.</em>
            </h2>

            <p>
              I am currently open to opportunities,
              collaborations, and conversations about
              software development.
            </p>

          </div>

          <div className="contact-links">

            <a
              href="mailto:manojbm305@gmail.com"
              className="contact-item"
            >
              <Mail size={20} />

              <span>
                manojbm305@gmail.com
              </span>

              <ArrowUpRight size={18} />
            </a>

            <a
              href="https://github.com/manoj-may05"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-item"
            >
              <FaGithub size={20} />

              <span>
                  github.com/manoj-may05
              </span>

              <ArrowUpRight size={18} />
            </a>

            <a
              href="https://www.linkedin.com/in/codecraft-manoj/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-item"
            >
              <FaLinkedin size={20} />

              <span>
                linkedin.com/in/codecraft-manoj
              </span>

              <ArrowUpRight size={18} />
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}