import React from "react";
import "./contact.css";
import linkedin from "../../images/logos/linkedinLogo.png"
import github from "../../images/logos/githubLogo.png"
import medium from "../../images/logos/mediumLogo.jpeg"

const Contact = () => {
  return (
    <div className="contact">
      <a href="mailto:lndrcrvlh@gmail.com" className="email-button">Send Me an Email</a>
      
      <hr className="divider"></hr>
      <div className="social-links">
        <a href="https://github.com/lndrcrvlh" className="github">
          <img src={github} alt="github" className="logo" />
        </a>
        <a href="https://www.linkedin.com/in/lndrcrvlh/" className="linkedin">
          <img src={linkedin} alt="linkedin" className="logo" />
        </a>
        <a href="https://teixeiras.medium.com/" className="medium">
        <img src={medium} alt="medium" className="logo" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
