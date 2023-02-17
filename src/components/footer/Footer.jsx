import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Andrias</h1>

        <ul className="footer__list">
          <li>
            <a href="#home" className="footer__link">
              Home
            </a>
          </li>

          <li>
            <a href="#portofolio" className="footer__link">
              Portofolio
            </a>
          </li>

          <li>
            <a href="#contact" className="footer__link">
              contact
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://www.instagram.com/andriasda_/"
            className="footer__social-link"
            target="_blank"
          >
            <i class="bx bxl-instagram"></i>
          </a>

          <a
            href="mailto:daniswaraandrias@gmail.com"
            className="footer__social-link"
            target="_blank"
          >
            <i class="uil uil-envelope-alt"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/andriasdaniswara/"
            className="footer__social-link"
            target="_blank"
          >
            <i class="bx bxl-linkedin"></i>
          </a>
        </div>

        <span className="footer__copy">&#169; Andrias Daniswara.</span>
      </div>
    </footer>
  );
};

export default Footer;
