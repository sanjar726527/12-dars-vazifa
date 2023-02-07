import React from "react";

export default function Testimonials() {
  return (
    <div className="testimonials">
      <div className="container">
        <div className="testimonials-column">
          <div className="testimonials-title">
            <span className="text-primary mb-3 d-block text-uppercase fw-semi-bold ls-xl">
              Testimonials
            </span>
            <h2 className="mb-2 display-4 fw-bold ">
              What our learners are saying
            </h2>
            <p className="lead">
              12+ million people are already learning on Geeks
            </p>
          </div>
          <div className="testimonials-row">
            <div className="testimonials-card shadow">
              <p className="lead text-dark mt-3">
                I started at stage zero. With Geeks I was able to start learning
                online and eventually build up enough knowledge and skills to
                transition into a well-paying career.
              </p>
              <div className="footer">
                <img
                  src="https://geeks-react.netlify.app/static/media/avatar-1.d2fd9642fd3628734b27.jpg"
                  alt=""
                />
                <h3 className="text-white mb-0">Barry Watson</h3>
                <p className="text-white-50 mb-1">Web Developer,UK</p>
              </div>
            </div>
            <div className="testimonials-card shadow">
              <p className="lead text-dark mt-3">
                Orci varius natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus. Etiam vulputate euismod justo in
                consequat. Sed tempus elementum urnanisl et lacus.
              </p>
              <div className="footer green-footer">
                <img
                  src="https://geeks-react.netlify.app/static/media/avatar-2.397cdd4b772a83b9166e.jpg"
                  alt=""
                />
                <h3 className="text-white mb-0">Linda Shenoy</h3>
                <p className="text-white-50 mb-1">Developer and Bootcamp Instructor</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
