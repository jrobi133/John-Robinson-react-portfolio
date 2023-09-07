import React from "react";
import "./AboutMeContainer.css";

function AboutMeContainer() {
  return (
    <div className="container contact-form">
      <h1>About Me</h1>
      <hr></hr>

      <div className="row">
        <div className="col-md-12">
          <div>
            <img src="./images/me1.jpg" alt="Placeholder" className="imgMe" />
            <p>
              Passionate software engineer driven by excellence and a deep
              commitment to innovation. Equipped with a diverse skill set
              encompassing full-stack web development, server-side expertise,
              and database management. Proficient in a wide range of
              technologies including ReactJS, JavaScript, Java, HTML, CSS, and
              more, enabling the creation of impactful and user-centric
              solutions.{" "}
            </p>
            <p>
              My background as a teacher assistant and fraud specialist provides
              a unique perspective that enhances my problem-solving and
              service-oriented abilities. I specialize in popular MVC frameworks
              like MERN Stack, and I possess advanced knowledge of Git, GraphQL,
              and user authentication for developing scalable applications.{" "}
            </p>
            <p>
              With a Bachelor's degree in Computer Science from Wilmington
              University, supported by Discover's Education services, I am eager
              to contribute my skills and expertise to dynamic software
              engineering projects. My portfolio showcases a range of projects
              that highlight my creative problem-solving skills and technical
              prowess.{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div>
            <p>
              In conclusion I would like to say thank you for looking over this.
              This is one of the the greatest industry to be in and let’s make a
              change. Thank you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMeContainer;
