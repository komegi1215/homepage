import React from "react";
import "../styles/Home.css";  // Importing component-specific styles


function Home() {
  return (
    <div>
      <div className="container-fluid all-container" data-controller="profile">
        <h1 className="title">Megumi Mizuno</h1>
        <div className="menu">
          <a href="#portfolio" className="menu-1">
            Projects
          </a>
          <a href="#career" className="menu-2">
            Career
          </a>
          <a href="#certificate-list" className="menu-3">
            Skills&Certificates
          </a>
          <a href="#contact-container" className="menu-4">
            Contact
          </a>
        </div>
        <div className="row">
          <div className="upper-container">
            <div className="col-lg-3 col-md-4 left-container justify-content-center introduction col-3">
              <div className="profile-pic">
                {/* <%= image_tag "meg.jpeg", className: "profile" %> */}
              </div>
            </div>
            <div
              className="right-container"
              data-profile-target="profileText"
              data-link-url="https://www.lewagon.com/"
              data-link-text="Le Wagon"
            >
              <p
                className="description"
                data-action="mouseover->profile#showMore"
              >
                I am a freelance web developer and data engineer with a strong
                passion for coding. I successfully completed the rigorous "Le
                Wagon Bootcamp", a six-month program that honed my coding skills
                while balancing full-time work commitments.
                <br />
                Currently, I am employed as a CRM specialist at a pharmaceutical
                company, where I excel in managing sales operations.
                Additionally, I have begun delving into the realms of data
                management and engineering. No code, no life! 💻
              </p>
            </div>
          </div>
          <div className="bottom-container">
            <div className="portfolio" id="portfolio">
              <h1 className="project-text">Projects</h1>
              {/* <%= render "contacts/portfolio" %> */}
            </div>
            <div className="career" id="career">
              <h1 className="career-text">Career</h1>
              {/* <%= render "contacts/career" %> */}
            </div>
            <div className="certificate-list" id="certificate-list">
              <h1 className="certificate-text">Skills and Certificates</h1>
              {/* <%= render "contacts/badge" %> */}
            </div>
            <h1 className="contact-title">Contact Me -currently unavailable</h1>
            <div
              className="contact-container"
              id="contact-container"
              style={{ marginTop: "50px" }}
            ></div>
          </div>
        </div>
      </div>
      <a className="pagetop" href="#">
        <div className="pagetop__arrow"></div>
      </a>
      {/* <%= render "shared/footer" %> */}
    </div>
  );
}

export default Home;
