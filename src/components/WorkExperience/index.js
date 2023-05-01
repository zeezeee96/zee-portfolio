import React from "react";

const WorkExperience = () => {
  return (
    <div className="experience" id="experience">
      <div className="container">
        <header
          className="section-header text-center wow zoomIn"
          data-wow-delay="0.1s"
        >
          <p>My Resume</p>
          <h2>Working Experience</h2>
        </header>
        <div className="timeline">
          <div
            className="timeline-item left wow slideInLeft"
            data-wow-delay="0.1s"
          >
            <div className="timeline-text">
              <div className="timeline-date">OCT-2021 - Present</div>
              <h2>MERN Stack Developer</h2>
              <h4>Pursue Today, Lahore | Electrical.com, USA</h4>
              <p>● Shifted an old Ecommerce app from old Reactjs to Nextjs.</p>
              <p>● Added SSR to all pages and ISR for blogs pages.</p>
              <p>
                ● Updated all page’s designs with re-useable styled components.
              </p>
              <p>● Created Responsive designs for 6 dimension widths.</p>
              <p>
                ● Custom re-usable Modals and Responsive Sidebar using styled
                components.
              </p>
              <p>
                ● Integrated Contentful CMS for blogs and homepage content
                management.
              </p>
              <p>● Added unit tests for the whole app.</p>
              <p>● Optimized the new site performance and SEO.</p>
              <p>● Added Custom Validations and error handling on all forms.</p>
              <p>● Added Secure Checkout Process.</p>
              <p>
                ● Created Listing page with multiple type filters from
                Contentful and Backend.
              </p>
              <p>● Added flow and unit testing for a GraphQL backend.</p>
            </div>
          </div>
          <div
            className="timeline-item right wow slideInRight"
            data-wow-delay="0.1s"
          >
            <div className="timeline-text">
              <div className="timeline-date">JAN-2021 - SEP-2021</div>
              <h2>Front-End Developer</h2>
              <h4>Gap Inc. USA</h4>
              <p>
                ● Performed shopping bag optimization tasks of E-Commerce
                Clothing store app including logs creation for every outgoing
                browser request and incoming response, saving logs to splunk,
                creating alerts and emails in case some specified event occurs
                in log, code-refactoring, creating multiple loyalty service
                flags, testing Loyalty program outcomes and other team members
                PRs
              </p>
            </div>
          </div>
          <div
            className="timeline-item left wow slideInLeft"
            data-wow-delay="0.1s"
          >
            <div className="timeline-text">
              <div className="timeline-date">DEC-2019 - JAN-2021</div>
              <h2>MERN Stack Developer</h2>
              <h4>Heapware, Lahore</h4>
              <p>
                ● Developed a Real State Property app with two modules of admin
                and user. and with property creations, property approving by
                admin, available properties, media uploading and their
                interactions, adding other users as friend, notifications and
                user’s chats using Next.js. Also, deployed the app to Vercel and
                AWS amplify.
              </p>
              <p>
                ● Developed Clinical Practitioner app with 4 different modules
                of admin, agent, doctor, patient, with appointments for
                videocall and in-clinic appointments, appointment approval,
                online prescriptions, online medicine facility, online lab
                tests, labs and pharmacy additions and approvals, blogs
                creations and user chat support.
              </p>
            </div>
          </div>
          <div
            className="timeline-item right wow slideInRight"
            data-wow-delay="0.1s"
          >
            <div className="timeline-text">
              <div className="timeline-date">FEB-2019 - AUG-2019</div>
              <h2>Design Engineer</h2>
              <h4>Byonyks, Lahore</h4>
              <p>● 3D designing and printing of machine parts.</p>
              <p>● Testing Developed parts and approving for machine</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
