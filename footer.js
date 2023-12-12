import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt, faUser  } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';



import './footer.css';

const Footer = () => {
  return (
    <div className="footer">


    <div className="footer-column">
        <h4>About Us</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. ..
        </p>
        </p>
      </div> 
      
      <div className="footer-column">
        <FontAwesomeIcon icon={faPhone} />
        <h4>Call Us</h4>
        <p>123-456-7890</p>
      </div>

      <div className="footer-column">
        <FontAwesomeIcon icon={faUser } />
        <h4>Creator</h4>
        <p> Tanvi Jain</p>

        <a href="mailto:tmj07042@email.com"><FontAwesomeIcon icon={faEnvelope} /></a> 

        <a href="https://www.linkedin.com/in/tanvi-jain-bb755b239" ><FontAwesomeIcon icon={faLinkedin} /></a>

      <a href="https://github.com/Tanvi-Jain01/" ><FontAwesomeIcon icon={faGithub} /></a>

      </div>

       <div className="footer-column">
        <FontAwesomeIcon icon={faMapMarkerAlt} />
        <h4>Location</h4>
        <p>Sabarmati, Ahmedabad</p>
      </div> 

     

    </div>
  );
};

export default Footer;
