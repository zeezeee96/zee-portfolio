import React from "react";

const Footer = () => {
  return (
    <>
      <div className="footer wow fadeIn" data-wow-delay="0.3s">
        <div className="container-fluid">
          <div className="container">
            <div className="footer-info">
              <h2>Muhammad Aziz</h2>
              <h3>Chakwal, Punjab, Pakistan</h3>
              <div className="footer-menu">
                <a href="tel:+923135237774s">
                  <p>+92 313 5237774</p>
                </a>

                <a href="mailto:engr.muhammadaziz96@gmail.com">
                  <p className="noborder">engr.muhammadaziz96@gmail.com</p>
                </a>
              </div>
              <div className="footer-social">
                <a
                  href="https://twitter.com/zeeezeee96"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  href="https://facebook.com/zeezeee96"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  href="https://github.com/zeezeee96"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github"></i>
                </a>
                <a
                  href="https://www.instagram.com/zeezeee96/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/zeezeee96/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="container copyright">
            <p>
              &copy; 2023<a href="#"> Zee Zeee's Portfolio</a>, All Right
              Reserved
            </p>
          </div>
        </div>
      </div>

      <a href="#" className="btn back-to-top">
        <i className="fa fa-chevron-up"></i>
      </a>
    </>
  );
};

export default Footer;
