import React from "react";

const About = () => {
  return (
    <div className="about wow fadeInUp" data-wow-delay="0.1s" id="about">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="about-img">
              <img src="images/aboutmeimg.PNG" alt="About" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-content">
              <div className="section-header text-left">
                <p>Learn About Me</p>
                <h2>3.5+ Years Experience</h2>
              </div>
              <div className="about-text">
                <p>
                  Hello! My name is Muhammad Aziz. I am a Mechanical Engineer
                  and it provides a strong foundation in problem-solving,
                  critical thinking, and attention to detail, skills that have
                  proven valuable in my transition to web development. I started
                  learning web development back in 2019 — turns out I was built
                  for this ! Fast-forward to today, and I’ve had the privilege
                  of working at an E-Commerce Electrical store webapp. My main
                  focus here is Frontend Development including new design and
                  features. Here are a few technologies I’ve been working with
                  recently:
                </p>
              </div>
              <div className="skills">
                <div className="skill-name">
                  <p>HTML, CSS</p>
                  <p>90%</p>
                </div>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow="90"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <div className="skill-name">
                  <p>React.js, Next.js</p>
                  <p>85%</p>
                </div>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow="85"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <div className="skill-name">
                  <p>Node.js Express.js</p>
                  <p>70%</p>
                </div>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow="70"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <div className="skill-name">
                  <p>Vercel, AWS</p>
                  <p>70%</p>
                </div>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow="70"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
              <a className="btn" href="">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
