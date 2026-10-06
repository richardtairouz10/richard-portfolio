import { Link, Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import "./App.css";

type Project = {
  title: string;
  category: "Mathematics & Quantitative Modeling" | "Software & Data";
  blurb: string;
  tags: string[];
  github: string;
  featured?: boolean;
};

const projects: Project[] = [
  {
    title: "Walk on Cylinders — Stochastic Modeling",
    category: "Mathematics & Quantitative Modeling",
    blurb:
      "Research implementation for simulating Brownian-motion paths using the Walk on Cylinders method, with applications to Monte Carlo methods and option-pricing experiments.",
    tags: ["Python", "Stochastic Modeling", "Monte Carlo", "Scientific Computing"],
    github: "https://github.com/arashfahim/Walk-on-Cylinders",
    featured: true,
  },
  {
    title: "American Option Pricing & Free Boundary Visualization",
    category: "Mathematics & Quantitative Modeling",
    blurb:
      "Quantitative-finance project focused on American option pricing, numerical methods, and visualizing the early-exercise boundary.",
    tags: ["Python", "Quant Finance", "Numerical Methods", "Option Pricing"],
    github: "https://github.com/richardtairouz10/Quant_Project",
    featured: true,
  },
  {
    title: "3D Face Modeling & Analysis",
    category: "Mathematics & Quantitative Modeling",
    blurb:
      "A 3D face-modeling and rendering framework using Python, C++, pybind11, and a GPU-accelerated Filament rendering pipeline.",
    tags: ["Python", "C++", "3D Modeling", "Computer Vision"],
    github: "https://github.com/FireHeart003/3D-Face-Modeling-Analysis-Capstone-Project",
    featured: true,
  },
  {
    title: "Guitar Chord Recognition",
    category: "Software & Data",
    blurb:
      "Machine-learning project for classifying 12 major chords, 12 minor chords, and noise from audio-derived features using multiple classification algorithms.",
    tags: ["Python", "Machine Learning", "Scikit-learn", "Audio"],
    github: "https://github.com/richardtairouz10/Guitar_Chord_Recognition",
    featured: true,
  },
  {
    title: "Gym Management System",
    category: "Software & Data",
    blurb:
      "Database-backed gym management application covering memberships, class scheduling, trainer assignments, payments, equipment maintenance, access control, and administrative workflows.",
    tags: ["Python", "MySQL", "Docker", "Database Systems"],
    github: "https://github.com/mominsalarkhan/gym-management-system",
  },
];

const skills = [
  {
    title: "Programming Languages",
    items: ["Python", "Java", "C", "C++", "C#", "R", "SQL", "JavaScript", "TypeScript"],
  },
  {
    title: "Web & Software",
    items: ["React", "HTML", "CSS", "Node.js", "Vite", "REST APIs", "Streamlit"],
  },
  {
    title: "Data & Machine Learning",
    items: [
      "NumPy",
      "Pandas",
      "SciPy",
      "Scikit-learn",
      "Matplotlib",
      "Machine Learning",
      "Statistical Modeling",
      "Data Analysis",
      "Data Visualization",
      "Excel",
      "Power BI",
      "Tableau",
    ],
  },
  {
    title: "Databases & Development Tools",
    items: ["MySQL", "Git", "GitHub", "Docker", "Linux", "VS Code", "Jupyter", "npm"],
  },
  {
    title: "Mathematics & Quantitative Methods",
    items: [
      "Probability",
      "Statistics",
      "Linear Algebra",
      "Differential Equations",
      "Mathematical Modeling",
      "Stochastic Modeling",
      "Numerical Methods",
      "Optimization",
      "Quantitative Analysis",
      "LaTeX",
    ],
  },
  {
    title: "Cloud",
    items: ["Azure", "AWS"],
  },
];

const research = [
  {
    date: "May 2025 — May 2026",
    org: "Florida State University",
    title: "Research Experience for Undergraduates (REU)",
    description:
      "Conducted mathematical and computational research involving stochastic modeling and quantitative analysis. Developed computational methods, ran numerical experiments, analyzed model behavior, and presented the work at a research symposium.",
    tags: ["Stochastic Modeling", "Python", "Numerical Methods", "Scientific Computing"],
  },
  {
    date: "Jan. 2023 — Jun. 2023",
    org: "Florida International University · Discovery Lab",
    title: "Undergraduate Researcher — Quantum Computing",
    description:
      "Investigated computational and mathematical concepts related to quantum computing and quantum algorithms, including the linear-algebra and probabilistic foundations of quantum computation.",
    tags: ["Quantum Computing", "Linear Algebra", "Algorithms", "Research"],
  },
];

function ScrollManager() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.slice(1);
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 0);
    } else {
      window.scrollTo({ top: 0, behavior: "auto" });
    }
  }, [location.pathname, location.hash]);

  return null;
}

function Navbar() {
  return (
    <header className="navbar">
      <div className="nav-inner">
        <Link to="/" className="logo" aria-label="Richard Tairouz home">
          RT.
        </Link>

        <nav className="nav-links" aria-label="Primary navigation">
          <Link to="/#about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/#research">Research</Link>
          <Link to="/#experience">Experience</Link>
          <Link to="/#skills">Skills</Link>
          <Link to="/#contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card">
      <div className="project-card-top">
        <span className="project-category">{project.category}</span>
        <a
          className="project-arrow"
          href={project.github}
          target="_blank"
          rel="noreferrer"
          aria-label={`Open ${project.title} on GitHub`}
        >
          ↗
        </a>
      </div>

      <div>
        <h3>{project.title}</h3>
        <p>{project.blurb}</p>
      </div>

      <div className="project-tags">
        {project.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>

      <div className="project-actions">
        <a href={project.github} target="_blank" rel="noreferrer">
          View on GitHub →
        </a>
      </div>
    </article>
  );
}

function Home() {
  const featured = projects.filter((project) => project.featured);

  return (
    <>
      <section className="hero">
        <div className="hero-inner">
          <p className="kicker">HELLO, I'M</p>
          <h1>
            Richard
            <br />
            <span>Tairouz.</span>
          </h1>
          <h2>Mathematics · Data · Software</h2>
          <p className="hero-text">
            I combine mathematical reasoning, data analysis, and software development
            to solve complex problems and build practical computational tools.
          </p>

          <div className="hero-actions">
            <Link className="btn btn-primary" to="/projects">
              Explore Projects
            </Link>
            <a className="btn btn-outline" href="/resume.pdf" target="_blank" rel="noreferrer">
              View Resume
            </a>
          </div>

          <div className="hero-socials">
            <a href="https://github.com/richardtairouz10" target="_blank" rel="noreferrer">
              GitHub ↗
            </a>
            <a
              href="https://www.linkedin.com/in/richard-tairouz-b1949626b"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="about-section">
        <div className="about-inner">
          <div className="about-title">
            <p className="kicker">ABOUT ME</p>
            <h2>Math-driven problem solving with practical software skills.</h2>
          </div>

          <div className="about-copy">
            <p>
              I have a background in mathematics and computer science, with experience
              in mathematical modeling, machine learning, data analysis, research, and
              software development.
            </p>
            <p>
              I enjoy understanding difficult problems mathematically and then using
              computation to turn those ideas into useful models, applications, and
              analytical tools.
            </p>
          </div>
        </div>
      </section>

      <section id="projects" className="section projects-section">
        <div className="section-heading split-heading">
          <div>
            <p className="kicker">SELECTED WORK</p>
            <h2>Featured Projects</h2>
          </div>
          <p>
            A selection of work across stochastic modeling, quantitative finance,
            machine learning, 3D computing, and software development.
          </p>
        </div>

        <div className="projects-grid">
          {featured.map((project) => (
            <ProjectCard project={project} key={project.title} />
          ))}
        </div>

        <div className="center-action">
          <Link className="btn btn-outline" to="/projects">
            View All Projects →
          </Link>
        </div>
      </section>

      <section id="research" className="research-section">
        <div className="research-inner">
          <div className="section-heading centered">
            <p className="kicker">ACADEMIC RESEARCH</p>
            <h2>Research Experience</h2>
            <p>
              Research experience spanning stochastic modeling, scientific computing,
              and quantum computing.
            </p>
          </div>

          <div className="research-list">
            {research.map((item, index) => (
              <article className="research-item" key={item.title}>
                <div className="research-meta">
                  <span className="research-number">{String(index + 1).padStart(2, "0")}</span>
                  <span>{item.date}</span>
                </div>
                <div className="research-content">
                  <p className="research-org">{item.org}</p>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <div className="tag-row">
                    {item.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="section">
        <div className="section-heading centered">
          <p className="kicker">EXPERIENCE</p>
          <h2>Teaching Experience</h2>
          <p>
            Experience supporting students, explaining mathematical ideas clearly, and
            guiding collaborative problem-solving.
          </p>
        </div>

        <div className="experience-list">
          <article className="experience-item">
            <div className="experience-date">Through December 2025</div>
            <div className="experience-content">
              <p className="experience-org">Florida International University</p>
              <h3>Learning Assistant — Precalculus</h3>
              <p>
                Supported students in developing mathematical reasoning and
                problem-solving skills in precalculus. Explained concepts through
                multiple approaches and assisted students during collaborative
                problem-solving sessions.
              </p>
              <div className="tag-row">
                <span>Mathematics</span>
                <span>Teaching</span>
                <span>Communication</span>
                <span>Problem Solving</span>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section id="skills" className="section skills-section">
        <div className="section-heading centered">
          <p className="kicker">TECHNICAL TOOLKIT</p>
          <h2>Skills</h2>
          <p>
            Programming languages, analytical methods, mathematical tools, and
            technologies used across coursework, research, and projects.
          </p>
        </div>

        <div className="skills-list">
          {skills.map((group) => (
            <article className="skill-row" key={group.title}>
              <h3>{group.title}</h3>
              <div className="tag-row">
                {group.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div className="contact-inner">
          <p className="kicker">CONTACT</p>
          <h2>Let’s connect.</h2>
          <p>
            I’m interested in opportunities involving software, data, mathematics,
            machine learning, quantitative analysis, and computational research.
          </p>

          <div className="contact-links">
            <a className="contact-card" href="mailto:richardtairouz@gmail.com">
              <span>Email</span>
              <strong>richardtairouz@gmail.com</strong>
              <small>Send a message →</small>
            </a>

            <a
              className="contact-card"
              href="https://www.linkedin.com/in/richard-tairouz-b1949626b"
              target="_blank"
              rel="noreferrer"
            >
              <span>LinkedIn</span>
              <strong>Richard Tairouz</strong>
              <small>Open profile ↗</small>
            </a>

            <a
              className="contact-card"
              href="https://github.com/richardtairouz10"
              target="_blank"
              rel="noreferrer"
            >
              <span>GitHub</span>
              <strong>@richardtairouz10</strong>
              <small>View repositories ↗</small>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

function ProjectsPage() {
  const math = projects.filter(
    (project) => project.category === "Mathematics & Quantitative Modeling",
  );
  const software = projects.filter((project) => project.category === "Software & Data");

  return (
    <main className="projects-page">
      <section className="page-hero">
        <p className="kicker">PORTFOLIO</p>
        <h1>Projects</h1>
        <p>
          My work spans mathematical modeling, quantitative finance, machine
          learning, databases, and computational software. Each project below links
          directly to its GitHub repository.
        </p>
      </section>

      <section className="project-category-section">
        <div className="category-heading">
          <span>01</span>
          <div>
            <h2>Mathematics & Quantitative Modeling</h2>
            <p>Research, stochastic modeling, numerical methods, and quantitative finance.</p>
          </div>
        </div>

        <div className="projects-grid">
          {math.map((project) => (
            <ProjectCard project={project} key={project.title} />
          ))}
        </div>
      </section>

      <section className="project-category-section">
        <div className="category-heading">
          <span>02</span>
          <div>
            <h2>Software & Data</h2>
            <p>Machine learning, databases, application development, and data-driven systems.</p>
          </div>
        </div>

        <div className="projects-grid">
          {software.map((project) => (
            <ProjectCard project={project} key={project.title} />
          ))}
        </div>
      </section>

      <div className="projects-profile-link">
        <a
          className="btn btn-primary"
          href="https://github.com/richardtairouz10"
          target="_blank"
          rel="noreferrer"
        >
          View Full GitHub Profile ↗
        </a>
      </div>
    </main>
  );
}

function App() {
  return (
    <div className="site">
      <ScrollManager />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>

      <footer>
        <span>© 2026 Richard Tairouz</span>
        <div className="footer-links">
          <a href="mailto:richardtairouz@gmail.com">Email</a>
          <a href="https://github.com/richardtairouz10" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/richard-tairouz-b1949626b"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
