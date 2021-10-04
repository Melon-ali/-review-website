import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <div className="footer-container">
        <div className="container">
          <FontAwesomeIcon icon={faCoffee} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
