import "../App.css"

export default function About() {
  return (
    <section id="about">

      <div className="section-container">

        <div className="section-label">
          <span>02</span>
          About me
        </div>

        <div className="about-layout">

          <h2>
            Turning curiosity
            <br />

            into <em>working software.</em>
          </h2>

          <div className="about-text">

            <p>
              I am an aspiring Full Stack Developer with
              a background in Mathematics and Computer
              Applications. I enjoy understanding how
              systems work and transforming ideas into
              useful digital products.
            </p>

            <p>
              My current focus is building full-stack
              applications using React.js, Python,
              FastAPI, and PostgreSQL. I am particularly
              interested in backend architecture, clean
              user interfaces, and solving practical
              problems through technology.
            </p>

            <div className="about-facts">

              <div>
                <strong>2026</strong>
                <span>MCA Graduate</span>
              </div>

              <div>
                <strong>2+</strong>
                <span>Projects Built</span>
              </div>

              <div>
                <strong>∞</strong>
                <span>Curiosity</span>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}