import React from "react";

const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://www.instagram.com/andriasda_/"
        className="home__social-icon"
        target="_blank"
      >
        <i class="uil uil-instagram"></i>
      </a>

      <a href="mailto:daniswaraandrias@gmail.com" className="home__social-icon">
        <i class="uil uil-envelope-alt"></i>
      </a>

      <a
        href="https://www.linkedin.com/in/andriasdaniswara/"
        className="home__social-icon"
        target="_blank"
      >
        <i class="uil uil-linkedin"></i>
      </a>
    </div>
  );
};

export default Social;
