import React from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SOCIALS } from "../../../../constant/socials";
import Button from "../../../Button";

const ContactInfo = () => {
  return (
    <div className="contact__info" id="contact-info" name="contactInfo">
      <div className="info__item" id="email-info" name="emailInfo">
        <h3 id="email-title" name="emailTitle">Email</h3>
        <p id="email-address" name="emailAddress">hazemaqbadran@gmail.com</p>
      </div>
      <div className="info__item" id="phone-info" name="phoneInfo">
        <h3 id="phone-title" name="phoneTitle">Phone</h3>
        <p id="phone-number" name="phoneNumber">+972592083208</p>
      </div>
      <div className="info__item" id="socials-info" name="socialsInfo">
        <h3 id="socials-title" name="socialsTitle">My Socials</h3>
        <div className="social__links" id="social-links" name="socialLinks">
          {SOCIALS.map(({ icon, url }, i) => (
            <a 
              key={i} 
              href={url} 
              target="_blank" 
              rel="noopener noreferrer"
              id={`social-link-${i}`}
              name={`socialLink${i}`}
            >
              <FontAwesomeIcon 
                icon={icon} 
                id={`social-icon-${i}`}
                name={`socialIcon${i}`}
              />
            </a>
          ))}
        </div>
      </div>
      {/* <Button stylee="btn__secondary" >
      See My CV
      </Button> */}
    </div>
  );
};

export default ContactInfo;
