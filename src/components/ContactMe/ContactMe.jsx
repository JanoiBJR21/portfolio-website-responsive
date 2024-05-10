import React from "react";
import "./ContactMe.css";
import email_icon from '../../assets/images/email-icon.svg'
import github_icon from '../../assets/images/github-icon.svg'
import ContactInfoCard from "./ContactInfoCard/ContactInfoCard";
import ContactForm from "./ContactForm/ContactForm";

const ContactMe = () => {
  return (
    <section className="contact-container">
      <h5>Contact Me</h5>

      <div className="contact-content">
        <div style={{ flex: 1 }}>
          <ContactInfoCard 
          iconUrl={email_icon}
          text="apichat26870@gmail.com" 
          />
          <ContactInfoCard 
          iconUrl={github_icon}
          text="https://github.com/JanoiBJR21" 
          />
        </div>
        <div style={{ flex: 1 }}>
            <ContactForm/>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
