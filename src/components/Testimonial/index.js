import React from "react";

const Testimonial = () => {
  return (
    <div className="testimonial wow fadeInUp" data-wow-delay="0.1s" id="review">
      <div className="container">
        <div className="testimonial-icon">
          <i className="fa fa-quote-left"></i>
        </div>
        <div className="owl-carousel testimonials-carousel">
          <div className="testimonial-item">
            <div className="testimonial-img">
              <img src="images/testimonial-1.jpg" alt="Testimonial" />
            </div>
            <div className="testimonial-text">
              <p>
                Lorem ipsum dolor sit amet consec adipis elit. Etiam accums
                lacus eget velit tincid, quis suscip justo dictum. Lorem ipsum
                dolor sit amet consec adipis elit.
              </p>
              <h3>Customer Name</h3>
              <h4>Profession</h4>
            </div>
          </div>
          <div className="testimonial-item">
            <div className="testimonial-img">
              <img src="images/testimonial-2.jpg" alt="Testimonial2" />
            </div>
            <div className="testimonial-text">
              <p>
                Lorem ipsum dolor sit amet consec adipis elit. Etiam accums
                lacus eget velit tincid, quis suscip justo dictum. Lorem ipsum
                dolor sit amet consec adipis elit.
              </p>
              <h3>Customer Name</h3>
              <h4>Profession</h4>
            </div>
          </div>
          <div className="testimonial-item">
            <div className="testimonial-img">
              <img src="images/testimonial-3.jpg" alt="Testimonial3" />
            </div>
            <div className="testimonial-text">
              <p>
                Lorem ipsum dolor sit amet consec adipis elit. Etiam accums
                lacus eget velit tincid, quis suscip justo dictum. Lorem ipsum
                dolor sit amet consec adipis elit.
              </p>
              <h3>Customer Name</h3>
              <h4>Profession</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
