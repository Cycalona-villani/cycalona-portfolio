
import './App.css'

const skills = [
  'React',
  'TypeScript',
  'JavaScript',
  'Vue',
  'Angular',
  'HTML & CSS',
  'Cypress',
  'Jenkins',
  'Git',
  'Power BI',
  'Power Automate',
]

function App() {
  return (
    <>
      <header className="site-header">
        <a className="brand" href="#home">
          Cycalona Villani<span>.</span>
        </a>

        <nav aria-label="Main navigation">
          <a href="#projects">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main id="home">
        {/* HERO SECTION */}
        <section className="hero">
          <p className="eyebrow">
            DEVELOPER · PROBLEM SOLVER
          </p>

          <h1>
            Thoughtful software.
            <br />
            <span>Practical solutions.</span>
          </h1>

          <p className="hero-description">
            I’m Cycalona Villani. I build web applications
            and reporting tools that turn complex workflows
            into clear, useful experiences.
          </p>

          <div className="hero-actions">
            <a className="button" href="#projects">
              Explore my work ↗
            </a>
            <a className="text-link" href="#contact">
              Let’s connect →
            </a>
          </div>

          <p className="availability">
            Based in Oklahoma · Open to remote opportunities
          </p>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="section">
          <p className="eyebrow">SELECTED WORK / 01</p>
          <h2>Built with purpose.</h2>

          <article className="featured-project">
            {/* LEFT SIDE */}
            <div className="project-copy">
              <p className="eyebrow">
                FEATURED PROJECT · TRUST & SAFETY
              </p>

              <h3>Provider Verification System</h3>

              <p>
                A working React and TypeScript application
                that keeps provider approval blocked until
                verification requirements are met, with
                manual identity review and recovery from
                simulated service outages.
              </p>

              <ul className="project-highlights">
                <li>
                  Expired licenses remain blocked after
                  identity review.
                </li>
                <li>
                  Three Cypress tests verify key approval
                  workflows.
                </li>
                <li>
                  Jenkins builds, tests, and publishes
                  JUnit test reports.
                </li>
              </ul>

              <div className="tags">
                <span>React</span>
                <span>TypeScript</span>
                <span>Cypress</span>
                <span>Jenkins</span>
              </div>

              {/* PROJECT LINKS — INSIDE PROJECT COPY */}
              <div className="project-links">
                <a
                  className="button"
                  href="https://cycalona-villani.github.io/provider-verification-system/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo ↗
                </a>

                <a
                  className="text-link"
                  href="https://github.com/Cycalona-villani/provider-verification-system"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View GitHub →
                </a>
              </div>
            </div>

            {/* RIGHT SIDE — TEST RESULTS */}
            <aside
              className="project-proof"
              aria-label="Verified test results"
            >
              <span className="proof-label">
                TESTED WORKFLOWS
              </span>

              <strong>
                03<span> / 03</span>
              </strong>

              <p>Cypress tests passing</p>

              <ul>
                <li>✓ Approval safeguards</li>
                <li>✓ Expired license blocking</li>
                <li>✓ Outage recovery</li>
              </ul>

              <small>
                Results verified in Jenkins · JUnit reports
              </small>
              <a
  className="test-evidence-link"
  href={`${import.meta.env.BASE_URL}images/cypress-tests.png`}
  target="_blank"
  rel="noopener noreferrer"
>
  View Cypress Test Results ↗
</a>
            </aside>
          </article>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="section about-section">
          <div>
            <p className="eyebrow">
              THE PERSON BEHIND THE CODE
            </p>

            <h2>
              Curious by nature.
              <br />
              Practical by experience.
            </h2>
          </div>

          <div>
            <p>
              My experience spans web development,
              reporting, and workflow improvement.
              I enjoy understanding how people work,
              finding the friction, and building
              something that makes their day easier.
            </p>

            <p>
              I bring development, testing, and product
              thinking together, from the first
              requirement to a working application.
            </p>
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section className="section">
          <p className="eyebrow">MY TOOLKIT</p>

          <h2>Skills I put to work.</h2>

          <ul className="skills-list">
            {skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="contact-section">
          <p className="eyebrow">LET’S CONNECT</p>

          <h2>Have something worth building?</h2>

          <p>
            I’d love to talk about your team and
            the problems you’re solving.
          </p>

          <a
            className="button"
            href="mailto:clonievillani@gmail.com"
          >
            Get in touch ↗
          </a>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="site-footer">
        <span>
          © {new Date().getFullYear()} Cycalona Villani
        </span>

        <span>Built with React & TypeScript</span>
      </footer>
    </>
  )
}

export default App
