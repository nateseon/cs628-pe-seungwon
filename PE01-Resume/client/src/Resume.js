import React from "react";
import "./Resume.css";

const Resume = () => {
  return (
    <div className="resume">
      <header className="header">
        <h1>Seungwon (Nate) Seon</h1>
        <p>
          Seattle, WA | (206) 549-6950 | natesun0702@gmail.com |{" "}
          <a
            href="https://linkedin.com/in/nateseon"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/nateseon
          </a>{" "}
          |{" "}
          <a
            href="https://github.com/nateseon"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/nateseon
          </a>
        </p>
      </header>

      <section className="section">
        <h2>Education & Credentials</h2>
        <div className="education">
          <h3>Georgia Institute of Technology</h3>
          <p>Master of Science in Computer Science | 2024-present</p>
          <h3>City University of Seattle</h3>
          <p>Master of Science in Computer Science | 2024-present</p>
          <h3>Indiana University - Kelley School of Business</h3>
          <p>Bachelor of Science Business | 2014-2016</p>
        </div>
      </section>

      <section className="section">
        <h2>Technical Proficiencies</h2>
        <p>
          Programming Languages: Python 3, JavaScript, SQL. Frontend: DOM
          manipulation, WebSockets, React, React Hooks, Redux Toolkit,
          Bootstrap, Wordpress. Backend: AWS, Django, Chalice, PostgreSQL,
          FastAPI, Docker, MongoDB, Flask, Git, GitLab CI/CD, Pytest. System
          Design: Monoliths, Microservices, OOP, Message passing, Event
          sourcing.
        </p>
      </section>

      <section className="section">
        <h2>Application Development Experience</h2>
        <div className="projects">
          <h3>Seattle Food Recommendation</h3>
          <p>
            Role: Full Stack Engineer |{" "}
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </p>
          <p>
            Built a RESTful API with Flask to provide personalized food
            recommendations for users in Seattle based on their preferences.
            Utilized Pandas for data manipulation and scikit-learn for
            machine-learning integration.
          </p>

          <h3>MFA Verification</h3>
          <p>
            Role: Full Stack Engineer |{" "}
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </p>
          <p>
            Built a Flask-based web application for secure multi-factor
            authentication, integrated with Twilio API for time-sensitive OTPs
            and a Bootstrap interface for user-friendly design.
          </p>

          <h3>Wanderlust</h3>
          <p>
            Role: Full Stack Engineer |{" "}
            <a
              href="https://gitlab.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitLab
            </a>
          </p>
          <p>
            Developed a cloud-native React application for personalized trip
            planning. Secured authentication with JWTs and used PostgreSQL for
            data persistence. Leveraged GitLab CI/CD for automated testing and
            deployment workflows.
          </p>
        </div>
      </section>

      <section className="section">
        <h2>Professional Experience</h2>
        <div className="experience">
          <h3>Deputy Section Chief | Tawoo Shipping Corporation</h3>
          <p>Seoul, Korea | 2018-2022</p>
          <p>
            Automated statistical and competitive analysis using Python, Pandas,
            and Tableau API. Led business negotiations based on data-driven
            insights.
          </p>

          <h3>International Sales Summer Intern | GS Caltex Corporation</h3>
          <p>Seoul, Korea | 2017</p>
          <p>
            Conducted data analysis on large datasets using Python. Presented
            business plans for Hawaii gas tank installation to the board of
            directors.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Resume;
