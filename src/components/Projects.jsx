import { ArrowUpRight } from "lucide-react";
import { PROJECTS } from "../data/data";
import "../App.css";

export default function Projects() {
  return (
    <section id="projects">

      <div className="section-container">

        <div className="section-label">
          <span>04</span>
          Selected work
        </div>

        <div className="projects-heading">

          <h2>
            Things I’ve
            <br />
            <em>built.</em>
          </h2>

          <p>
            A selection of projects that reflect my
            approach to problem-solving, design, and
            full-stack development.
          </p>

        </div>

        <div className="projects-list">

          {PROJECTS.map((project, index) => (

            <article
              className="project-item"
              key={project.title}
            >

              <div className="project-number">
                0{index + 1}
              </div>

              <div className="project-preview">

                <img
                  src={project.image}
                  alt={project.title}
                />

              </div>

              <div className="project-details">

                <div className="project-top">

                  <span>
                    {project.category}
                  </span>

                  <span>
                    {project.year}
                  </span>

                </div>

                <h3>
                  {project.title}
                </h3>

                <p>
                  {project.description}
                </p>

                <div className="project-tech">

                  {project.tags?.map((tag) => (
                    <span key={tag}>
                      {tag}
                    </span>
                  ))}

                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  View project

                  <ArrowUpRight size={17} />
                </a>

              </div>

            </article>

          ))}

        </div>

      </div>

    </section>
  );
}