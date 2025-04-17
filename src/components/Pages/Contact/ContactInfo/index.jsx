import React from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SOCIALS } from "../../../../constant/socials";
import Button from "../../../Button";

const ContactInfo = () => {
  return (
    <div className="contact__info">
      <div className="info__item">
        <h3>Email</h3>
        <p>hazemaqbadran@gmail.com</p>
      </div>
      <div className="info__item">
        <h3>Phone</h3>
        <p>+972592083208</p>
      </div>
      <div className="info__item">
        <h3>My Socials</h3>
        <div className="social__links">
          {SOCIALS.map(({ icon, url }, i) => (
            <a key={i} href={url} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={icon} />
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
