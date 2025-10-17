import React from "react";
import "./AboutMeContainer.css";

function AboutMeContainer() {
  return (
    <div className="AboutMeContainer">
      <hr />

      <div className="resume-card">
  <div className="resume-header">
    <img src="./images/me2025.jpg" alt="Andrew Robinson" className="resume-img" />
    <div>
    <h1 className="resume-title">Resume</h1>
      <h2>Education</h2>
      <p>B.S. in Computer Science, Wilmington University (Aug 31, 2023)</p>
      <p>Certificate: University of Utah, Boding Boot Camp – Full Stack Web Development</p>
      <p>Security Clearance: Top Secret (Pending)</p>
    </div>
  </div>

  <section className="resume-section">
    <h2>Work Experience</h2>

    <div className="job">
      <h3>The JAAW Group – Software Engineer</h3>
      <span className="date">Sep 2023 – Jun 2024</span>
      <p>Software developer contractor for Hill Air Force Base.</p>
      <h4>Key Accomplishments:</h4>
      <ul>
        <li>Developed robust backend in C#, improving system performance and reliability.</li>
        <li>Used Azure DevOps for scheduling and quality control.</li>
        <li>Collaborated with cross-functional teams to achieve project goals.</li>
        <li>Implemented database migrations with .NET Entity Framework.</li>
      </ul>
    </div>

    <div className="job">
      <h3>Trilogy Education (edX) – Software Engineer / Assistant Instructor</h3>
      <span className="date">Apr 2021 – Present</span>
      <p>Teaching assistant for a full stack web development bootcamp.</p>
      <h4>Key Accomplishments:</h4>
      <ul>
        <li>Helped students grasp full-stack concepts and web technologies.</li>
        <li>Developed full-stack web apps using modern frameworks.</li>
        <li>Used GitHub for version control and project updates.</li>
        <li>Assisted with NoSQL database setup using Atlas and AWS.</li>
      </ul>
    </div>

    <div className="job">
      <h3>Action Toy Rentals – Software Engineer</h3>
      <span className="date">Jun 2018 – Apr 2021</span>
      <h4>Key Accomplishments:</h4>
      <ul>
        <li>Improved online booking capabilities and customer experience.</li>
        <li>Developed front-end UI and mock-up translations.</li>
        <li>Designed user interactions and debugged applications.</li>
      </ul>
    </div>
  </section>
</div>

    </div>
  );
}

export default AboutMeContainer;
