import { SKILLS } from "../data/data";
import "../App.css";

export default function Skills() {
  return (
    <section id="skills">

      <div className="section-container">

        <div className="section-label">
          <span>03</span>
          Capabilities
        </div>

        <div className="skills-heading">
          <h2>
            Tools I use to
            <br />
            bring ideas to <em>life.</em>
          </h2>

          <p>
            A practical toolkit built through continuous
            learning and hands-on projects.
          </p>
        </div>

        <div className="skills-list">

          {Object.entries(SKILLS).map(
            ([category, skills], index) => (

              <div
                className="skill-row"
                key={category}
              >

                <span className="skill-index">
                  0{index + 1}
                </span>

                <h3>
                  {category}
                </h3>

                <div className="skill-items">

                  {skills.map((skill) => (
                    <span key={skill}>
                      {skill}
                    </span>
                  ))}

                </div>

              </div>

            )
          )}

        </div>

      </div>

    </section>
  );
}