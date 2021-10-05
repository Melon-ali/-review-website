import React from "react";

import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <div className="footer-container">
        <div className="container text-center">
          <h3>
            Follow us on Social Media
          </h3>
          <div className="footer-icon">
                <i class="fab fa-facebook"></i>
                <i class="fab fa-github"></i>
                <i class="fab fa-linkedin-in"></i>
                <i class="fab fa-instagram"></i>
          </div>
          <div className="text-center">
            <p> <small className="text">Melon &copy; All Right Reserved.</small></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
