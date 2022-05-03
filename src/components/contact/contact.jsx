import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <a href="mailto:lndrcrvlh@gmail.com" className="email-button">Send Me an Email</a>
      
      <hr className="divider"></hr>
      <div className="social-links">
        <a href="/" className="github">
          github logo
        </a>
        <a href="/" className="linkedin">
          linkedin logo
        </a>
        <a href="/" className="medium">
          medium logo
        </a>
      </div>
    </div>
  );
};

export default Contact;
